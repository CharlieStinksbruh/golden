export interface CrawlResult {
  id: string;
  url: string;
  status: 'running' | 'completed' | 'failed';
  progress: number;
  pagesFound: number;
  pagesCrawled: number;
  errors: CrawlError[];
  warnings: CrawlWarning[];
  technicalIssues: TechnicalIssue[];
  startTime: string;
  endTime?: string;
  estimatedCompletion?: string;
}

export interface CrawlError {
  type: 'broken_link' | 'server_error' | 'timeout' | 'redirect_loop';
  url: string;
  message: string;
  statusCode?: number;
}

export interface CrawlWarning {
  type: 'missing_meta' | 'duplicate_content' | 'large_image' | 'slow_response';
  url: string;
  message: string;
  value?: string;
}

export interface TechnicalIssue {
  type: 'missing_title' | 'missing_meta_description' | 'duplicate_title' | 'broken_internal_link' | 'missing_alt_text';
  severity: 'high' | 'medium' | 'low';
  count: number;
  urls: string[];
  description: string;
  recommendation: string;
}

class CrawlerService {
  private crawls: Map<string, CrawlResult> = new Map();

  async startCrawl(url: string, options: {
    depth?: number;
    includeExternal?: boolean;
    followRedirects?: boolean;
  } = {}): Promise<string> {
    const crawlId = `crawl_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const crawlResult: CrawlResult = {
      id: crawlId,
      url,
      status: 'running',
      progress: 0,
      pagesFound: 0,
      pagesCrawled: 0,
      errors: [],
      warnings: [],
      technicalIssues: [],
      startTime: new Date().toISOString(),
      estimatedCompletion: new Date(Date.now() + 5 * 60 * 1000).toISOString()
    };

    this.crawls.set(crawlId, crawlResult);
    
    // Simulate crawling process
    this.simulateCrawl(crawlId, url, options);
    
    return crawlId;
  }

  private async simulateCrawl(crawlId: string, url: string, options: any) {
    const crawl = this.crawls.get(crawlId);
    if (!crawl) return;

    // Simulate progressive crawling
    const totalPages = Math.floor(Math.random() * 1000) + 100;
    crawl.pagesFound = totalPages;

    for (let i = 0; i <= 100; i += 2) {
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const updatedCrawl = this.crawls.get(crawlId);
      if (!updatedCrawl) return;

      updatedCrawl.progress = i;
      updatedCrawl.pagesCrawled = Math.floor((i / 100) * totalPages);

      // Add some random errors and warnings
      if (Math.random() < 0.1) {
        updatedCrawl.errors.push({
          type: 'broken_link',
          url: `${url}/page-${Math.floor(Math.random() * 100)}`,
          message: '404 Not Found',
          statusCode: 404
        });
      }

      if (Math.random() < 0.2) {
        updatedCrawl.warnings.push({
          type: 'missing_meta',
          url: `${url}/page-${Math.floor(Math.random() * 100)}`,
          message: 'Missing meta description'
        });
      }
    }

    // Complete the crawl
    crawl.status = 'completed';
    crawl.progress = 100;
    crawl.endTime = new Date().toISOString();
    crawl.pagesCrawled = totalPages;

    // Add technical issues summary
    crawl.technicalIssues = [
      {
        type: 'missing_title',
        severity: 'high',
        count: Math.floor(Math.random() * 20) + 5,
        urls: Array.from({ length: 5 }, (_, i) => `${url}/page-${i + 1}`),
        description: 'Pages missing title tags',
        recommendation: 'Add unique, descriptive title tags to all pages'
      },
      {
        type: 'missing_meta_description',
        severity: 'medium',
        count: Math.floor(Math.random() * 50) + 10,
        urls: Array.from({ length: 5 }, (_, i) => `${url}/page-${i + 6}`),
        description: 'Pages missing meta descriptions',
        recommendation: 'Add compelling meta descriptions to improve click-through rates'
      },
      {
        type: 'broken_internal_link',
        severity: 'high',
        count: Math.floor(Math.random() * 15) + 3,
        urls: Array.from({ length: 3 }, (_, i) => `${url}/broken-${i + 1}`),
        description: 'Broken internal links found',
        recommendation: 'Fix or remove broken internal links to improve user experience'
      }
    ];
  }

  getCrawlStatus(crawlId: string): CrawlResult | null {
    return this.crawls.get(crawlId) || null;
  }

  getAllCrawls(): CrawlResult[] {
    return Array.from(this.crawls.values()).sort((a, b) => 
      new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
    );
  }

  deleteCrawl(crawlId: string): boolean {
    return this.crawls.delete(crawlId);
  }
}

export const crawlerService = new CrawlerService();