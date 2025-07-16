export interface KeywordData {
  keyword: string;
  volume: number;
  difficulty: number;
  cpc: number;
  competition: 'low' | 'medium' | 'high';
  trend: 'up' | 'down' | 'stable';
  relatedKeywords: string[];
  questions: string[];
  searchIntent: 'informational' | 'commercial' | 'transactional' | 'navigational';
}

export interface KeywordRanking {
  keyword: string;
  position: number;
  previousPosition: number;
  url: string;
  volume: number;
  difficulty: number;
  lastUpdated: string;
  featured: boolean;
  device: 'desktop' | 'mobile';
  location: string;
}

export interface CompetitorKeyword {
  keyword: string;
  position: number;
  volume: number;
  difficulty: number;
  url: string;
  domain: string;
}

class KeywordService {
  private keywordDatabase: KeywordData[] = [
    {
      keyword: 'SEO tools',
      volume: 49500,
      difficulty: 65,
      cpc: 3.45,
      competition: 'high',
      trend: 'up',
      relatedKeywords: ['SEO software', 'SEO analysis', 'website optimization'],
      questions: ['What are the best SEO tools?', 'How to use SEO tools?'],
      searchIntent: 'commercial'
    },
    {
      keyword: 'website audit',
      volume: 18100,
      difficulty: 42,
      cpc: 2.89,
      competition: 'medium',
      trend: 'up',
      relatedKeywords: ['site audit', 'SEO audit', 'website analysis'],
      questions: ['How to audit a website?', 'What is website audit?'],
      searchIntent: 'informational'
    },
    {
      keyword: 'keyword research',
      volume: 27400,
      difficulty: 58,
      cpc: 4.12,
      competition: 'high',
      trend: 'stable',
      relatedKeywords: ['keyword analysis', 'keyword finder', 'SEO keywords'],
      questions: ['How to do keyword research?', 'Best keyword research tools?'],
      searchIntent: 'informational'
    }
  ];

  private rankings: KeywordRanking[] = [
    {
      keyword: 'SEO tools',
      position: 3,
      previousPosition: 5,
      url: '/seo-tools',
      volume: 49500,
      difficulty: 65,
      lastUpdated: new Date().toISOString(),
      featured: true,
      device: 'desktop',
      location: 'United States'
    }
  ];

  async searchKeywords(query: string, options: {
    location?: string;
    language?: string;
    includeQuestions?: boolean;
  } = {}): Promise<KeywordData[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Filter keywords based on query
    const results = this.keywordDatabase.filter(keyword =>
      keyword.keyword.toLowerCase().includes(query.toLowerCase()) ||
      keyword.relatedKeywords.some(related => 
        related.toLowerCase().includes(query.toLowerCase())
      )
    );

    // Generate additional keyword suggestions
    const suggestions = this.generateKeywordSuggestions(query);
    
    return [...results, ...suggestions].slice(0, 50);
  }

  private generateKeywordSuggestions(query: string): KeywordData[] {
    const prefixes = ['best', 'top', 'free', 'how to', 'what is'];
    const suffixes = ['tool', 'software', 'guide', 'tips', '2024'];
    
    const suggestions: KeywordData[] = [];
    
    prefixes.forEach(prefix => {
      const keyword = `${prefix} ${query}`;
      suggestions.push({
        keyword,
        volume: Math.floor(Math.random() * 10000) + 1000,
        difficulty: Math.floor(Math.random() * 100),
        cpc: Math.random() * 5 + 0.5,
        competition: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as any,
        trend: ['up', 'down', 'stable'][Math.floor(Math.random() * 3)] as any,
        relatedKeywords: [query, `${query} tool`, `${query} software`],
        questions: [`What is ${keyword}?`, `How to use ${keyword}?`],
        searchIntent: 'informational'
      });
    });

    suffixes.forEach(suffix => {
      const keyword = `${query} ${suffix}`;
      suggestions.push({
        keyword,
        volume: Math.floor(Math.random() * 8000) + 500,
        difficulty: Math.floor(Math.random() * 80) + 20,
        cpc: Math.random() * 4 + 1,
        competition: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as any,
        trend: ['up', 'down', 'stable'][Math.floor(Math.random() * 3)] as any,
        relatedKeywords: [query, `${query} guide`, `${query} tips`],
        questions: [`How to find ${keyword}?`, `Best ${keyword}?`],
        searchIntent: 'commercial'
      });
    });

    return suggestions.slice(0, 10);
  }

  async getKeywordRankings(domain: string): Promise<KeywordRanking[]> {
    await new Promise(resolve => setTimeout(resolve, 800));
    return this.rankings;
  }

  async trackKeyword(keyword: string, domain: string, options: {
    location?: string;
    device?: 'desktop' | 'mobile';
  } = {}): Promise<KeywordRanking> {
    await new Promise(resolve => setTimeout(resolve, 500));

    const ranking: KeywordRanking = {
      keyword,
      position: Math.floor(Math.random() * 100) + 1,
      previousPosition: Math.floor(Math.random() * 100) + 1,
      url: `/${keyword.replace(/\s+/g, '-').toLowerCase()}`,
      volume: Math.floor(Math.random() * 50000) + 1000,
      difficulty: Math.floor(Math.random() * 100),
      lastUpdated: new Date().toISOString(),
      featured: Math.random() < 0.1,
      device: options.device || 'desktop',
      location: options.location || 'United States'
    };

    this.rankings.push(ranking);
    return ranking;
  }

  async getCompetitorKeywords(domain: string, competitorDomain: string): Promise<CompetitorKeyword[]> {
    await new Promise(resolve => setTimeout(resolve, 1200));

    return Array.from({ length: 20 }, (_, i) => ({
      keyword: `competitor keyword ${i + 1}`,
      position: Math.floor(Math.random() * 50) + 1,
      volume: Math.floor(Math.random() * 20000) + 1000,
      difficulty: Math.floor(Math.random() * 100),
      url: `/${competitorDomain}/page-${i + 1}`,
      domain: competitorDomain
    }));
  }

  async getKeywordIdeas(seedKeyword: string): Promise<KeywordData[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return this.generateKeywordSuggestions(seedKeyword);
  }
}

export const keywordService = new KeywordService();