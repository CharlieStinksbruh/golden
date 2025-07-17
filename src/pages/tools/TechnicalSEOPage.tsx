import { RealDataError } from './realDataService';

export interface ScannedPage {
  url: string;
  title: string;
  metaDescription: string;
  h1Tags: string[];
  h2Tags: string[];
  h3Tags: string[];
  images: number;
  imagesWithoutAlt: number;
  internalLinks: number;
  externalLinks: number;
  wordCount: number;
  loadTime: number;
  statusCode: number;
  contentType: string;
  responseSize: number;
  issues: SEOIssue[];
  error?: RealDataError;
}

export interface ImageInfo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  hasAlt: boolean;
  fileSize?: number;
}

export interface LinkInfo {
  href: string;
  text: string;
  isInternal: boolean;
  isExternal: boolean;
  statusCode?: number;
  isWorking: boolean;
}

export interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  category: 'title' | 'meta' | 'headings' | 'images' | 'links' | 'content' | 'performance';
  message: string;
  element?: string;
  recommendation: string;
}

export interface ScanResult {
  url: string;
  pages: ScannedPage[];
  totalPages: number;
  errors: string[];
  scanTime: number;
  domain: string;
  error?: RealDataError;
}

class RealWebsiteScanner {
  private normalizeUrl(url: string): string {
    if (!url) return '';
    
    // Remove whitespace
    url = url.trim();
    
    // Add https:// if no protocol is specified
    if (!url.match(/^https?:\/\//)) {
      url = 'https://' + url;
    }
    
    // Remove trailing slash
    url = url.replace(/\/$/, '');
    
    return url;
  }

  private generateSimulatedScanData(url: string): ScannedPage {
    const domain = new URL(url).hostname;
    const path = new URL(url).pathname;
    const isHomePage = path === '' || path === '/';
    const isBlogPost = path.includes('/blog/') || path.includes('/news/');
    const isAboutPage = path.includes('/about');
    const isContactPage = path.includes('/contact');
    
    // Generate realistic simulated data
    const simulatedIssues: SEOIssue[] = this.generateRealisticIssues(url, isHomePage, isBlogPost);
    
    // Generate page-specific content
    const pageTitle = this.generatePageTitle(domain, path, isHomePage, isBlogPost, isAboutPage, isContactPage);
    const metaDescription = Math.random() > 0.2 ? this.generateMetaDescription(domain, path) : '';
    const h1Tags = this.generateH1Tags(domain, path, isHomePage, isBlogPost);
    const h2Tags = this.generateH2Tags(isHomePage, isBlogPost, isAboutPage);

    return {
      url,
      title: pageTitle,
      metaDescription,
      h1Tags,
      h2Tags,
      h3Tags: ['Service 1', 'Service 2', 'Our Mission', 'Our Vision'],
      images: Math.floor(Math.random() * 20) + 5,
      imagesWithoutAlt: Math.floor(Math.random() * 5),
      internalLinks: Math.floor(Math.random() * 50) + 10,
      externalLinks: Math.floor(Math.random() * 10) + 2,
      wordCount: this.generateWordCount(isHomePage, isBlogPost),
      loadTime: Math.floor(Math.random() * 2000) + 500,
      statusCode: Math.random() > 0.95 ? 404 : 200, // Occasionally simulate 404s
      contentType: 'text/html; charset=utf-8',
      responseSize: Math.floor(Math.random() * 50000) + 10000,
      issues: simulatedIssues,
      error: {
        type: 'cors',
        message: 'Cannot scan external websites directly from the browser due to CORS security restrictions. This is simulated data for demonstration purposes.',
        url: url,
        details: 'Browser security policies prevent direct cross-origin requests. In a production environment, this would be handled by a backend service.'
      }
    };
  }
  
  private generatePageTitle(domain: string, path: string, isHomePage: boolean, isBlogPost: boolean, isAboutPage: boolean, isContactPage: boolean): string {
    const companyName = domain.split('.')[0].charAt(0).toUpperCase() + domain.split('.')[0].slice(1);
    
    if (isHomePage) {
      return `${companyName} - Professional Services & Solutions`;
    }
    
    if (isBlogPost) {
      const blogTitles = [
        'How to Improve Your Business Performance',
        'Best Practices for Digital Transformation',
        'Complete Guide to Modern Solutions',
        'Advanced Strategies for Growth',
        'Industry Trends and Insights'
      ];
      return `${blogTitles[Math.floor(Math.random() * blogTitles.length)]} | ${companyName} Blog`;
    }
    
    if (isAboutPage) {
      return `About Us - ${companyName} Company Information`;
    }
    
    if (isContactPage) {
      return `Contact ${companyName} - Get in Touch`;
    }
    
    // Generate title based on path
    const pathSegment = path.split('/').filter(Boolean).pop() || 'page';
    const title = pathSegment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return `${title} | ${companyName}`;
  }
  
  private generateMetaDescription(domain: string, path: string): string {
    const descriptions = [
      `Discover professional solutions and services at ${domain}. Expert guidance for your business needs.`,
      `Learn more about our comprehensive services and how we can help you achieve your goals.`,
      `Professional expertise and proven results. Find out why businesses choose ${domain}.`,
      `Get the latest insights, tips, and strategies from industry experts.`
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  }
  
  private generateH1Tags(domain: string, path: string, isHomePage: boolean, isBlogPost: boolean): string[] {
    if (isHomePage) {
      return [`Welcome to ${domain.split('.')[0].charAt(0).toUpperCase() + domain.split('.')[0].slice(1)}`];
    }
    
    if (isBlogPost) {
      const topics = [
        'Complete Guide to Digital Transformation',
        'Best Practices for Modern Business',
        'How to Optimize Your Workflow',
        'Advanced Strategies for Growth'
      ];
      return [topics[Math.floor(Math.random() * topics.length)]];
    }
    
    // Sometimes pages have no H1 (which is an issue)
    if (Math.random() < 0.1) return [];
    
    // Sometimes pages have multiple H1s (also an issue)
    if (Math.random() < 0.05) {
      return ['Main Heading', 'Another Main Heading'];
    }
    
    const pathSegment = path.split('/').filter(Boolean).pop() || 'page';
    const title = pathSegment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return [title];
  }
  
  private generateH2Tags(isHomePage: boolean, isBlogPost: boolean, isAboutPage: boolean): string[] {
    if (isHomePage) {
      return ['Our Services', 'Why Choose Us', 'Get Started Today'];
    }
    
    if (isBlogPost) {
      return [
        'Introduction',
        'Key Benefits and Features',
        'Step-by-Step Implementation',
        'Best Practices and Tips',
        'Conclusion'
      ].slice(0, Math.floor(Math.random() * 3) + 2);
    }
    
    if (isAboutPage) {
      return ['Our Story', 'Our Mission', 'Our Team'];
    }
    
    return ['Overview', 'Details'].slice(0, Math.floor(Math.random() * 2) + 1);
  }
  
  private generateWordCount(isHomePage: boolean, isBlogPost: boolean): number {
    if (isHomePage) return Math.floor(Math.random() * 800) + 400;
    if (isBlogPost) return Math.floor(Math.random() * 2000) + 800;
    return Math.floor(Math.random() * 600) + 200;
  }
  
  private generateRealisticIssues(url: string, isHomePage: boolean, isBlogPost: boolean): SEOIssue[] {
    const issues: SEOIssue[] = [];
    
    // Randomly add various types of issues
    const possibleIssues = [
      {
        type: 'warning' as const,
        category: 'title' as const,
        message: 'Title tag could be more descriptive',
        recommendation: 'Consider adding more specific keywords to your title tag'
      },
      {
        type: 'error' as const,
        category: 'images' as const,
        message: 'Images missing alt text',
        recommendation: 'Add descriptive alt text to all images for accessibility and SEO'
      },
      {
        type: 'warning' as const,
        category: 'meta' as const,
        message: 'Meta description too long',
        recommendation: 'Keep meta descriptions under 160 characters'
      },
      {
        type: 'error' as const,
        category: 'headings' as const,
        message: 'Multiple H1 tags found',
        recommendation: 'Use only one H1 tag per page'
      },
      {
        type: 'warning' as const,
        category: 'performance' as const,
        message: 'Page load time could be improved',
        recommendation: 'Optimize images and enable compression'
      },
      {
        type: 'info' as const,
        category: 'content' as const,
        message: 'Good content length detected',
        recommendation: 'Continue creating comprehensive content'
      }
    ];
    
    // Add 2-4 random issues per page
    const numIssues = Math.floor(Math.random() * 3) + 2;
    for (let i = 0; i < numIssues; i++) {
      const randomIssue = possibleIssues[Math.floor(Math.random() * possibleIssues.length)];
      if (!issues.some(issue => issue.message === randomIssue.message)) {
        issues.push(randomIssue);
      }
    }
    
  }

  async scanWebsite(inputUrl: string, options: {
    maxPages?: number;
    includeSubdomains?: boolean;
  } = {}): Promise<ScanResult> {
    const startTime = Date.now();
    const normalizedUrl = this.normalizeUrl(inputUrl);
    const domain = new URL(normalizedUrl).hostname;
    const maxPages = options.maxPages || 50;
    
    // Simulate scanning delay for multiple pages
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000));
    
    const result: ScanResult = {
      url: normalizedUrl,
      pages: [],
      totalPages: 0,
      errors: [],
      scanTime: Date.now() - startTime,
      domain,
      error: {
        type: 'cors',
        message: 'Cannot scan external websites directly from the browser due to CORS security restrictions. This is simulated data for demonstration purposes.',
        url: normalizedUrl,
        details: 'Browser security policies prevent direct cross-origin requests. In a production environment, this would be handled by a backend service.'
      }
    };
    
    // Generate simulated page data for multiple pages
    const pagesToScan = Math.min(maxPages, Math.floor(Math.random() * 15) + 5); // 5-20 pages
    result.totalPages = pagesToScan;
    
    // Generate common page URLs for the domain
    const commonPaths = [
      '', // home page
      '/about',
      '/contact',
      '/services',
      '/products',
      '/blog',
      '/privacy',
      '/terms',
      '/support',
      '/faq',
      '/pricing',
      '/features',
      '/team',
      '/careers',
      '/news'
    ];
    
    // Add blog/article pages
    for (let i = 1; i <= 10; i++) {
      commonPaths.push(`/blog/article-${i}`);
      commonPaths.push(`/news/post-${i}`);
    }
    
    // Generate pages up to the limit
    for (let i = 0; i < pagesToScan && i < commonPaths.length; i++) {
      const pageUrl = normalizedUrl + commonPaths[i];
      const simulatedPage = this.generateSimulatedScanData(pageUrl);
      result.pages.push(simulatedPage);
    }
    
    return result;
  }

  async scanSinglePage(inputUrl: string): Promise<ScannedPage | null> {
    const normalizedUrl = this.normalizeUrl(inputUrl);
    
    try {
      // Simulate scanning delay
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
      
      // Generate simulated scan data
      const scannedPage = this.generateSimulatedScanData(normalizedUrl);
      
      return scannedPage;
      
    } catch (error) {
      console.error('Error scanning page:', error);
      return null;
    }
  }
}

export const realWebsiteScanner = new RealWebsiteScanner();