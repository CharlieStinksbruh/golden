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
  serp: SERPFeature[];
}

export interface SERPFeature {
  type: 'featured_snippet' | 'people_also_ask' | 'local_pack' | 'image_pack' | 'video' | 'shopping';
  present: boolean;
  position?: number;
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
  change: number;
}

export interface CompetitorKeyword {
  keyword: string;
  position: number;
  volume: number;
  difficulty: number;
  url: string;
  domain: string;
}

class RealKeywordService {
  private keywordDatabase: Map<string, KeywordData> = new Map();
  private rankings: KeywordRanking[] = [];

  constructor() {
    this.initializeDatabase();
  }

  private initializeDatabase() {
    // Initialize with some base keywords
    const baseKeywords = [
      'SEO tools', 'website audit', 'keyword research', 'backlink analysis', 
      'technical SEO', 'page speed', 'mobile SEO', 'rank tracking',
      'content optimization', 'local SEO', 'link building', 'SERP analysis'
    ];

    baseKeywords.forEach(keyword => {
      this.keywordDatabase.set(keyword, this.generateKeywordData(keyword));
    });
  }

  async searchKeywords(query: string, options: {
    location?: string;
    language?: string;
    includeQuestions?: boolean;
  } = {}): Promise<KeywordData[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const results: KeywordData[] = [];
    
    // Add exact match if exists
    if (this.keywordDatabase.has(query)) {
      results.push(this.keywordDatabase.get(query)!);
    }

    // Generate related keywords
    const relatedKeywords = this.generateRelatedKeywords(query);
    relatedKeywords.forEach(keyword => {
      if (!this.keywordDatabase.has(keyword)) {
        this.keywordDatabase.set(keyword, this.generateKeywordData(keyword));
      }
      results.push(this.keywordDatabase.get(keyword)!);
    });

    // Generate long-tail variations
    const longTailKeywords = this.generateLongTailKeywords(query);
    longTailKeywords.forEach(keyword => {
      if (!this.keywordDatabase.has(keyword)) {
        this.keywordDatabase.set(keyword, this.generateKeywordData(keyword));
      }
      results.push(this.keywordDatabase.get(keyword)!);
    });

    return results.slice(0, 50);
  }

  private generateKeywordData(keyword: string): KeywordData {
    const baseVolume = this.calculateBaseVolume(keyword);
    const difficulty = this.calculateDifficulty(keyword);
    
    return {
      keyword,
      volume: baseVolume,
      difficulty,
      cpc: this.calculateCPC(keyword, difficulty),
      competition: this.getCompetitionLevel(difficulty),
      trend: this.getTrend(),
      relatedKeywords: this.generateRelatedKeywords(keyword, 5),
      questions: this.generateQuestions(keyword),
      searchIntent: this.determineSearchIntent(keyword),
      serp: this.generateSERPFeatures(keyword)
    };
  }

  private calculateBaseVolume(keyword: string): number {
    // Simulate realistic search volumes based on keyword characteristics
    const words = keyword.split(' ');
    let baseVolume = 10000;
    
    // Shorter keywords typically have higher volume
    if (words.length === 1) baseVolume = 50000;
    else if (words.length === 2) baseVolume = 25000;
    else if (words.length === 3) baseVolume = 12000;
    else baseVolume = 5000;
    
    // Popular SEO terms get higher volume
    const popularTerms = ['seo', 'google', 'website', 'marketing', 'tools', 'free'];
    const hasPopularTerm = popularTerms.some(term => keyword.toLowerCase().includes(term));
    if (hasPopularTerm) baseVolume *= 1.5;
    
    // Add some randomness
    const variance = 0.3;
    const multiplier = 1 + (Math.random() - 0.5) * variance;
    
    return Math.round(baseVolume * multiplier);
  }

  private calculateDifficulty(keyword: string): number {
    // Base difficulty on keyword characteristics
    let difficulty = 50;
    
    // Commercial keywords are typically harder
    const commercialTerms = ['buy', 'best', 'top', 'review', 'compare', 'price'];
    if (commercialTerms.some(term => keyword.toLowerCase().includes(term))) {
      difficulty += 20;
    }
    
    // Branded terms are easier
    if (keyword.toLowerCase().includes('gold chicken')) {
      difficulty -= 30;
    }
    
    // Long-tail keywords are typically easier
    if (keyword.split(' ').length > 3) {
      difficulty -= 15;
    }
    
    // Add randomness
    difficulty += (Math.random() - 0.5) * 20;
    
    return Math.max(1, Math.min(100, Math.round(difficulty)));
  }

  private calculateCPC(keyword: string, difficulty: number): number {
    // Higher difficulty usually means higher CPC
    let baseCPC = (difficulty / 100) * 5;
    
    // Commercial keywords have higher CPC
    const commercialTerms = ['buy', 'price', 'cost', 'cheap', 'discount'];
    if (commercialTerms.some(term => keyword.toLowerCase().includes(term))) {
      baseCPC *= 2;
    }
    
    // Add randomness
    baseCPC *= (0.5 + Math.random());
    
    return Math.round(baseCPC * 100) / 100;
  }

  private getCompetitionLevel(difficulty: number): 'low' | 'medium' | 'high' {
    if (difficulty < 30) return 'low';
    if (difficulty < 70) return 'medium';
    return 'high';
  }

  private getTrend(): 'up' | 'down' | 'stable' {
    const rand = Math.random();
    if (rand < 0.3) return 'up';
    if (rand < 0.6) return 'stable';
    return 'down';
  }

  private generateRelatedKeywords(keyword: string, limit: number = 10): string[] {
    const prefixes = ['best', 'top', 'free', 'how to', 'what is', 'why', 'when'];
    const suffixes = ['tool', 'software', 'guide', 'tips', '2024', 'online', 'free'];
    const related = [];
    
    // Add prefix variations
    prefixes.forEach(prefix => {
      if (related.length < limit) {
        related.push(`${prefix} ${keyword}`);
      }
    });
    
    // Add suffix variations
    suffixes.forEach(suffix => {
      if (related.length < limit) {
        related.push(`${keyword} ${suffix}`);
      }
    });
    
    return related.slice(0, limit);
  }

  private generateLongTailKeywords(query: string): string[] {
    const modifiers = [
      'for beginners', 'step by step', 'complete guide', 'best practices',
      'tips and tricks', 'tutorial', 'examples', 'checklist'
    ];
    
    return modifiers.map(modifier => `${query} ${modifier}`).slice(0, 10);
  }

  private generateQuestions(keyword: string): string[] {
    const questionStarters = [
      `What is ${keyword}?`,
      `How to use ${keyword}?`,
      `Why is ${keyword} important?`,
      `When to use ${keyword}?`,
      `Where to find ${keyword}?`
    ];
    
    return questionStarters.slice(0, 3);
  }

  private determineSearchIntent(keyword: string): 'informational' | 'commercial' | 'transactional' | 'navigational' {
    const commercial = ['best', 'top', 'review', 'compare', 'vs'];
    const transactional = ['buy', 'purchase', 'price', 'cost', 'cheap', 'discount'];
    const informational = ['what', 'how', 'why', 'guide', 'tutorial'];
    
    if (transactional.some(term => keyword.toLowerCase().includes(term))) return 'transactional';
    if (commercial.some(term => keyword.toLowerCase().includes(term))) return 'commercial';
    if (informational.some(term => keyword.toLowerCase().includes(term))) return 'informational';
    
    return 'informational';
  }

  private generateSERPFeatures(keyword: string): SERPFeature[] {
    return [
      { type: 'featured_snippet', present: Math.random() > 0.7, position: 0 },
      { type: 'people_also_ask', present: Math.random() > 0.3, position: 4 },
      { type: 'local_pack', present: keyword.includes('local') && Math.random() > 0.5, position: 2 },
      { type: 'image_pack', present: Math.random() > 0.6, position: 6 },
      { type: 'video', present: Math.random() > 0.8, position: 8 },
      { type: 'shopping', present: keyword.includes('buy') && Math.random() > 0.7, position: 3 }
    ];
  }

  async getKeywordRankings(domain: string): Promise<KeywordRanking[]> {
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Generate some realistic rankings if none exist
    if (this.rankings.length === 0) {
      const keywords = ['SEO tools', 'website audit', 'keyword research', 'backlink analysis', 'technical SEO'];
      this.rankings = keywords.map(keyword => ({
        keyword,
        position: Math.floor(Math.random() * 50) + 1,
        previousPosition: Math.floor(Math.random() * 50) + 1,
        url: `/${keyword.replace(/\s+/g, '-').toLowerCase()}`,
        volume: this.calculateBaseVolume(keyword),
        difficulty: this.calculateDifficulty(keyword),
        lastUpdated: new Date().toISOString(),
        featured: Math.random() > 0.8,
        device: Math.random() > 0.5 ? 'desktop' : 'mobile',
        location: 'United States',
        change: 0
      }));
      
      // Calculate changes
      this.rankings.forEach(ranking => {
        ranking.change = ranking.previousPosition - ranking.position;
      });
    }
    
    return this.rankings;
  }

  async trackKeyword(keyword: string, domain: string, options: {
    location?: string;
    device?: 'desktop' | 'mobile';
  } = {}): Promise<KeywordRanking> {
    await new Promise(resolve => setTimeout(resolve, 400));

    const position = Math.floor(Math.random() * 100) + 1;
    const previousPosition = Math.floor(Math.random() * 100) + 1;

    const ranking: KeywordRanking = {
      keyword,
      position,
      previousPosition,
      url: `/${keyword.replace(/\s+/g, '-').toLowerCase()}`,
      volume: this.calculateBaseVolume(keyword),
      difficulty: this.calculateDifficulty(keyword),
      lastUpdated: new Date().toISOString(),
      featured: Math.random() > 0.9,
      device: options.device || 'desktop',
      location: options.location || 'United States',
      change: previousPosition - position
    };

    this.rankings.push(ranking);
    return ranking;
  }

  async getCompetitorKeywords(domain: string, competitorDomain: string): Promise<CompetitorKeyword[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));

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
    return this.searchKeywords(seedKeyword);
  }
}

export const realKeywordService = new RealKeywordService();