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
    
    // Generate realistic simulated data
    const simulatedIssues: SEOIssue[] = [
      {
        type: 'warning',
        category: 'title',
        message: 'Title tag could be more descriptive',
        recommendation: 'Consider adding more specific keywords to your title tag'
      },
      {
        type: 'error',
        category: 'images',
        message: '3 images missing alt text',
        recommendation: 'Add descriptive alt text to all images for accessibility and SEO'
      },
      {
        type: 'info',
        category: 'meta',
        message: 'Meta description is well optimized',
        recommendation: 'Continue using compelling meta descriptions'
      }
    ];

    return {
      url,
      title: `${domain} - Home Page`,
      metaDescription: `Welcome to ${domain}. Discover our products and services.`,
      h1Tags: [`Welcome to ${domain}`],
      h2Tags: ['Our Services', 'About Us', 'Contact'],
      h3Tags: ['Service 1', 'Service 2', 'Our Mission', 'Our Vision'],
      images: Math.floor(Math.random() * 20) + 5,
      imagesWithoutAlt: Math.floor(Math.random() * 5),
      internalLinks: Math.floor(Math.random() * 50) + 10,
      externalLinks: Math.floor(Math.random() * 10) + 2,
      wordCount: Math.floor(Math.random() * 1000) + 300,
      loadTime: Math.floor(Math.random() * 2000) + 500,
      statusCode: 200,
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