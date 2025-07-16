export interface ScannedPage {
  url: string;
  title: string;
  metaDescription: string;
  h1Tags: string[];
  h2Tags: string[];
  h3Tags: string[];
  images: ImageInfo[];
  links: LinkInfo[];
  wordCount: number;
  loadTime: number;
  statusCode: number;
  contentType: string;
  responseSize: number;
  issues: SEOIssue[];
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

  private async fetchWithTimeout(url: string, timeout = 10000): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        mode: 'cors',
        headers: {
          'User-Agent': 'Gold Chicken SEO Scanner/1.0'
        }
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  private parseHTML(html: string): Document {
    const parser = new DOMParser();
    return parser.parseFromString(html, 'text/html');
  }

  private extractTitle(doc: Document): string {
    const titleElement = doc.querySelector('title');
    return titleElement ? titleElement.textContent?.trim() || '' : '';
  }

  private extractMetaDescription(doc: Document): string {
    const metaDesc = doc.querySelector('meta[name="description"]');
    return metaDesc ? metaDesc.getAttribute('content')?.trim() || '' : '';
  }

  private extractHeadings(doc: Document, tag: string): string[] {
    const headings = doc.querySelectorAll(tag);
    return Array.from(headings).map(h => h.textContent?.trim() || '').filter(text => text.length > 0);
  }

  private extractImages(doc: Document, baseUrl: string): ImageInfo[] {
    const images = doc.querySelectorAll('img');
    return Array.from(images).map(img => {
      const src = img.getAttribute('src') || '';
      const alt = img.getAttribute('alt') || '';
      
      return {
        src: this.resolveUrl(src, baseUrl),
        alt,
        width: img.width || undefined,
        height: img.height || undefined,
        hasAlt: alt.length > 0
      };
    });
  }

  private extractLinks(doc: Document, baseUrl: string): LinkInfo[] {
    const links = doc.querySelectorAll('a[href]');
    const domain = new URL(baseUrl).hostname;
    
    return Array.from(links).map(link => {
      const href = link.getAttribute('href') || '';
      const text = link.textContent?.trim() || '';
      const resolvedUrl = this.resolveUrl(href, baseUrl);
      
      let isInternal = false;
      let isExternal = false;
      
      try {
        const linkUrl = new URL(resolvedUrl);
        isInternal = linkUrl.hostname === domain;
        isExternal = !isInternal && linkUrl.protocol.startsWith('http');
      } catch (e) {
        // Invalid URL
      }
      
      return {
        href: resolvedUrl,
        text,
        isInternal,
        isExternal,
        isWorking: true // We'll check this separately if needed
      };
    });
  }

  private resolveUrl(url: string, baseUrl: string): string {
    try {
      return new URL(url, baseUrl).href;
    } catch (e) {
      return url;
    }
  }

  private countWords(doc: Document): number {
    // Remove script and style elements
    const scripts = doc.querySelectorAll('script, style');
    scripts.forEach(el => el.remove());
    
    const text = doc.body?.textContent || '';
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
  }

  private analyzePageIssues(page: Partial<ScannedPage>): SEOIssue[] {
    const issues: SEOIssue[] = [];
    
    // Title issues
    if (!page.title) {
      issues.push({
        type: 'error',
        category: 'title',
        message: 'Missing title tag',
        recommendation: 'Add a unique, descriptive title tag (50-60 characters recommended)'
      });
    } else if (page.title.length > 60) {
      issues.push({
        type: 'warning',
        category: 'title',
        message: `Title tag too long (${page.title.length} characters)`,
        recommendation: 'Keep title tags under 60 characters for better display in search results'
      });
    } else if (page.title.length < 30) {
      issues.push({
        type: 'warning',
        category: 'title',
        message: `Title tag too short (${page.title.length} characters)`,
        recommendation: 'Title tags should be 30-60 characters for optimal SEO'
      });
    }
    
    // Meta description issues
    if (!page.metaDescription) {
      issues.push({
        type: 'warning',
        category: 'meta',
        message: 'Missing meta description',
        recommendation: 'Add a compelling meta description (150-160 characters) to improve click-through rates'
      });
    } else if (page.metaDescription.length > 160) {
      issues.push({
        type: 'warning',
        category: 'meta',
        message: `Meta description too long (${page.metaDescription.length} characters)`,
        recommendation: 'Keep meta descriptions under 160 characters'
      });
    }
    
    // Heading issues
    if (!page.h1Tags || page.h1Tags.length === 0) {
      issues.push({
        type: 'error',
        category: 'headings',
        message: 'Missing H1 tag',
        recommendation: 'Add a single, descriptive H1 tag to establish page hierarchy'
      });
    } else if (page.h1Tags.length > 1) {
      issues.push({
        type: 'warning',
        category: 'headings',
        message: `Multiple H1 tags found (${page.h1Tags.length})`,
        recommendation: 'Use only one H1 tag per page and use H2-H6 for subheadings'
      });
    }
    
    // Image issues
    if (page.images) {
      const imagesWithoutAlt = page.images.filter(img => !img.hasAlt);
      if (imagesWithoutAlt.length > 0) {
        issues.push({
          type: 'warning',
          category: 'images',
          message: `${imagesWithoutAlt.length} images missing alt text`,
          recommendation: 'Add descriptive alt text to all images for accessibility and SEO'
        });
      }
    }
    
    // Content issues
    if (page.wordCount && page.wordCount < 300) {
      issues.push({
        type: 'warning',
        category: 'content',
        message: `Low word count (${page.wordCount} words)`,
        recommendation: 'Consider adding more valuable content (300+ words recommended)'
      });
    }
    
    // Performance issues
    if (page.loadTime && page.loadTime > 3000) {
      issues.push({
        type: 'warning',
        category: 'performance',
        message: `Slow page load time (${page.loadTime}ms)`,
        recommendation: 'Optimize images, enable compression, and improve server response time'
      });
    }
    
    return issues;
  }

  private async discoverPages(startUrl: string, maxPages = 50): Promise<string[]> {
    const pages = new Set([startUrl]);
    const domain = new URL(startUrl).hostname;
    
    try {
      const response = await this.fetchWithTimeout(startUrl);
      if (!response.ok) {
        return [startUrl];
      }
      
      const html = await response.text();
      const doc = this.parseHTML(html);
      
      // Extract internal links
      const links = doc.querySelectorAll('a[href]');
      
      for (const link of Array.from(links)) {
        if (pages.size >= maxPages) break;
        
        const href = link.getAttribute('href');
        if (!href) continue;
        
        try {
          const resolvedUrl = new URL(href, startUrl);
          
          // Only include same-domain links
          if (resolvedUrl.hostname === domain && 
              resolvedUrl.protocol.startsWith('http') &&
              !resolvedUrl.href.includes('#') &&
              !resolvedUrl.href.match(/\.(pdf|jpg|jpeg|png|gif|zip|doc|docx)$/i)) {
            pages.add(resolvedUrl.href);
          }
        } catch (e) {
          // Invalid URL, skip
        }
      }
    } catch (error) {
      console.warn('Could not discover additional pages:', error);
    }
    
    return Array.from(pages).slice(0, maxPages);
  }

  async scanWebsite(inputUrl: string, options: {
    maxPages?: number;
    includeSubdomains?: boolean;
  } = {}): Promise<ScanResult> {
    const startTime = Date.now();
    const normalizedUrl = this.normalizeUrl(inputUrl);
    const domain = new URL(normalizedUrl).hostname;
    const maxPages = options.maxPages || 50;
    
    const result: ScanResult = {
      url: normalizedUrl,
      pages: [],
      totalPages: 0,
      errors: [],
      scanTime: 0,
      domain
    };
    
    try {
      // Discover pages to scan
      const pagesToScan = await this.discoverPages(normalizedUrl, maxPages);
      result.totalPages = pagesToScan.length;
      
      // Scan each page
      for (const pageUrl of pagesToScan) {
        try {
          const pageStartTime = Date.now();
          const response = await this.fetchWithTimeout(pageUrl);
          const loadTime = Date.now() - pageStartTime;
          
          if (!response.ok) {
            result.errors.push(`Failed to fetch ${pageUrl}: ${response.status} ${response.statusText}`);
            continue;
          }
          
          const html = await response.text();
          const doc = this.parseHTML(html);
          
          const scannedPage: ScannedPage = {
            url: pageUrl,
            title: this.extractTitle(doc),
            metaDescription: this.extractMetaDescription(doc),
            h1Tags: this.extractHeadings(doc, 'h1'),
            h2Tags: this.extractHeadings(doc, 'h2'),
            h3Tags: this.extractHeadings(doc, 'h3'),
            images: this.extractImages(doc, pageUrl),
            links: this.extractLinks(doc, pageUrl),
            wordCount: this.countWords(doc),
            loadTime,
            statusCode: response.status,
            contentType: response.headers.get('content-type') || '',
            responseSize: html.length,
            issues: []
          };
          
          // Analyze issues
          scannedPage.issues = this.analyzePageIssues(scannedPage);
          
          result.pages.push(scannedPage);
          
        } catch (error) {
          result.errors.push(`Error scanning ${pageUrl}: ${error.message}`);
        }
      }
      
    } catch (error) {
      result.errors.push(`Failed to scan website: ${error.message}`);
    }
    
    result.scanTime = Date.now() - startTime;
    return result;
  }

  async scanSinglePage(inputUrl: string): Promise<ScannedPage | null> {
    const normalizedUrl = this.normalizeUrl(inputUrl);
    
    try {
      const startTime = Date.now();
      const response = await this.fetchWithTimeout(normalizedUrl);
      const loadTime = Date.now() - startTime;
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const html = await response.text();
      const doc = this.parseHTML(html);
      
      const scannedPage: ScannedPage = {
        url: normalizedUrl,
        title: this.extractTitle(doc),
        metaDescription: this.extractMetaDescription(doc),
        h1Tags: this.extractHeadings(doc, 'h1'),
        h2Tags: this.extractHeadings(doc, 'h2'),
        h3Tags: this.extractHeadings(doc, 'h3'),
        images: this.extractImages(doc, normalizedUrl),
        links: this.extractLinks(doc, normalizedUrl),
        wordCount: this.countWords(doc),
        loadTime,
        statusCode: response.status,
        contentType: response.headers.get('content-type') || '',
        responseSize: html.length,
        issues: []
      };
      
      scannedPage.issues = this.analyzePageIssues(scannedPage);
      
      return scannedPage;
      
    } catch (error) {
      console.error('Error scanning page:', error);
      return null;
    }
  }
}

export const realWebsiteScanner = new RealWebsiteScanner();