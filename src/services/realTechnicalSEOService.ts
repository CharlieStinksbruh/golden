export interface TechnicalSEOResult {
  id: string;
  url: string;
  status: 'running' | 'completed' | 'failed';
  progress: number;
  pagesDiscovered: string[];
  pagesAnalyzed: AnalyzedPage[];
  overallScore: number;
  issuesSummary: IssuesSummary;
  startTime: string;
  endTime?: string;
  errors: string[];
}

export interface AnalyzedPage {
  url: string;
  title: string;
  metaDescription: string;
  h1Tags: string[];
  h2Tags: string[];
  h3Tags: string[];
  images: ImageAnalysis[];
  links: LinkAnalysis[];
  technicalIssues: TechnicalIssue[];
  performance: PerformanceMetrics;
  statusCode: number;
  contentLength: number;
  wordCount: number;
  htmlContent?: string;
  responseTime: number;
  lastModified?: string;
  contentType: string;
}

export interface ImageAnalysis {
  src: string;
  alt: string;
  hasAlt: boolean;
  width?: number;
  height?: number;
  fileSize?: number;
  format?: string;
  isOptimized: boolean;
}

export interface LinkAnalysis {
  href: string;
  text: string;
  isInternal: boolean;
  isExternal: boolean;
  isBroken: boolean;
  statusCode?: number;
  rel?: string;
  target?: string;
}

export interface TechnicalIssue {
  type: 'critical' | 'warning' | 'info';
  category: 'meta' | 'headings' | 'images' | 'links' | 'performance' | 'structure' | 'accessibility';
  title: string;
  description: string;
  recommendation: string;
  element?: string;
  line?: number;
}

export interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
  timeToInteractive?: number;
}

export interface IssuesSummary {
  critical: number;
  warnings: number;
  info: number;
  totalIssues: number;
  categoryCounts: { [category: string]: number };
}

class RealTechnicalSEOService {
  private scans: Map<string, TechnicalSEOResult> = new Map();

  async startScan(url: string, options: {
    maxPages?: number;
    includeSubdomains?: boolean;
    followRedirects?: boolean;
    timeout?: number;
  } = {}): Promise<string> {
    const scanId = `scan_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const scanResult: TechnicalSEOResult = {
      id: scanId,
      url: this.normalizeUrl(url),
      status: 'running',
      progress: 0,
      pagesDiscovered: [],
      pagesAnalyzed: [],
      overallScore: 0,
      issuesSummary: {
        critical: 0,
        warnings: 0,
        info: 0,
        totalIssues: 0,
        categoryCounts: {}
      },
      startTime: new Date().toISOString(),
      errors: []
    };

    this.scans.set(scanId, scanResult);
    
    // Start the real scanning process
    this.performRealScan(scanId, scanResult.url, options);
    
    return scanId;
  }

  private async performRealScan(scanId: string, startUrl: string, options: any) {
    const scan = this.scans.get(scanId);
    if (!scan) return;

    try {
      console.log(`🔍 Starting real technical SEO scan for: ${startUrl}`);
      
      // Phase 1: Discover pages
      scan.progress = 5;
      this.scans.set(scanId, { ...scan });
      
      const discoveredPages = await this.discoverPages(startUrl, options);
      scan.pagesDiscovered = discoveredPages;
      scan.progress = 20;
      this.scans.set(scanId, { ...scan });
      
      console.log(`📄 Discovered ${discoveredPages.length} pages to analyze`);
      
      // Phase 2: Analyze each page
      const maxPages = Math.min(discoveredPages.length, options.maxPages || 50);
      
      for (let i = 0; i < maxPages; i++) {
        const pageUrl = discoveredPages[i];
        scan.progress = 20 + ((i / maxPages) * 75);
        
        try {
          console.log(`🔬 Analyzing page ${i + 1}/${maxPages}: ${pageUrl}`);
          const analyzedPage = await this.analyzePage(pageUrl, options);
          scan.pagesAnalyzed.push(analyzedPage);
          
        } catch (error) {
          console.error(`❌ Failed to analyze ${pageUrl}:`, error);
          scan.errors.push(`Failed to analyze ${pageUrl}: ${error.message}`);
        }
        
        this.scans.set(scanId, { ...scan });
        
        // Small delay to prevent overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      // Phase 3: Calculate final results
      scan.progress = 95;
      scan.issuesSummary = this.calculateIssuesSummary(scan.pagesAnalyzed);
      scan.overallScore = this.calculateOverallScore(scan.pagesAnalyzed);
      
      scan.status = 'completed';
      scan.progress = 100;
      scan.endTime = new Date().toISOString();
      
      console.log(`✅ Scan completed! Score: ${scan.overallScore}/100`);
      
    } catch (error) {
      console.error(`💥 Scan failed:`, error);
      scan.status = 'failed';
      scan.errors.push(`Scan failed: ${error.message}`);
    }
    
    this.scans.set(scanId, scan);
  }

  private async discoverPages(startUrl: string, options: any): Promise<string[]> {
    const pages = new Set<string>([startUrl]);
    const baseUrl = new URL(startUrl);
    const domain = baseUrl.hostname;
    
    try {
      // Try to fetch the main page to discover links
      const response = await this.fetchWithTimeout(startUrl, options.timeout || 10000);
      const html = await response.text();
      
      // Parse HTML to find links
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const links = doc.querySelectorAll('a[href]');
      
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
          const absoluteUrl = this.resolveUrl(href, startUrl);
          const linkUrl = new URL(absoluteUrl);
          
          // Check if we should include this link
          if (this.shouldIncludeUrl(linkUrl, domain, options.includeSubdomains)) {
            pages.add(absoluteUrl);
          }
        }
      });
      
      // Also try common page patterns
      const commonPaths = [
        '/about', '/contact', '/services', '/products', '/blog',
        '/privacy', '/terms', '/support', '/faq', '/pricing',
        '/features', '/team', '/careers', '/news', '/resources'
      ];
      
      commonPaths.forEach(path => {
        pages.add(baseUrl.origin + path);
      });
      
    } catch (error) {
      console.warn(`Could not discover pages from ${startUrl}, using common patterns:`, error.message);
      
      // Fallback to common page patterns
      const commonPaths = [
        '', '/about', '/contact', '/services', '/products', '/blog',
        '/privacy', '/terms', '/support', '/faq', '/pricing'
      ];
      
      commonPaths.forEach(path => {
        pages.add(baseUrl.origin + path);
      });
    }
    
    return Array.from(pages).slice(0, options.maxPages || 50);
  }

  private async analyzePage(url: string, options: any): Promise<AnalyzedPage> {
    const startTime = Date.now();
    
    try {
      // Fetch the page
      const response = await this.fetchWithTimeout(url, options.timeout || 10000);
      const html = await response.text();
      const responseTime = Date.now() - startTime;
      
      // Parse HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Analyze page elements
      const analysis: AnalyzedPage = {
        url,
        title: this.extractTitle(doc),
        metaDescription: this.extractMetaDescription(doc),
        h1Tags: this.extractHeadings(doc, 'h1'),
        h2Tags: this.extractHeadings(doc, 'h2'),
        h3Tags: this.extractHeadings(doc, 'h3'),
        images: this.analyzeImages(doc, url),
        links: this.analyzeLinks(doc, url),
        technicalIssues: [],
        performance: {
          loadTime: responseTime,
          domContentLoaded: responseTime,
        },
        statusCode: response.status,
        contentLength: html.length,
        wordCount: this.countWords(doc),
        htmlContent: html,
        responseTime,
        lastModified: response.headers.get('last-modified') || undefined,
        contentType: response.headers.get('content-type') || 'text/html'
      };
      
      // Perform technical SEO analysis
      analysis.technicalIssues = this.performTechnicalAnalysis(analysis, doc);
      
      return analysis;
      
    } catch (error) {
      console.error(`Failed to analyze ${url}:`, error);
      
      // Return minimal analysis with error
      return {
        url,
        title: '',
        metaDescription: '',
        h1Tags: [],
        h2Tags: [],
        h3Tags: [],
        images: [],
        links: [],
        technicalIssues: [{
          type: 'critical',
          category: 'structure',
          title: 'Page Analysis Failed',
          description: `Could not analyze page: ${error.message}`,
          recommendation: 'Check if the page is accessible and returns valid HTML'
        }],
        performance: {
          loadTime: 0,
          domContentLoaded: 0,
        },
        statusCode: 0,
        contentLength: 0,
        wordCount: 0,
        responseTime: 0,
        contentType: 'unknown'
      };
    }
  }

  private async fetchWithTimeout(url: string, timeout: number): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        mode: 'cors',
        headers: {
          'User-Agent': 'Gold Chicken SEO Bot/1.0'
        }
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
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

  private analyzeImages(doc: Document, baseUrl: string): ImageAnalysis[] {
    const images = doc.querySelectorAll('img');
    return Array.from(images).map(img => {
      const src = img.getAttribute('src') || '';
      const alt = img.getAttribute('alt') || '';
      
      return {
        src: this.resolveUrl(src, baseUrl),
        alt,
        hasAlt: alt.length > 0,
        width: img.width || undefined,
        height: img.height || undefined,
        isOptimized: this.isImageOptimized(src, img)
      };
    });
  }

  private analyzeLinks(doc: Document, baseUrl: string): LinkAnalysis[] {
    const links = doc.querySelectorAll('a[href]');
    const baseDomain = new URL(baseUrl).hostname;
    
    return Array.from(links).map(link => {
      const href = link.getAttribute('href') || '';
      const absoluteUrl = this.resolveUrl(href, baseUrl);
      const linkDomain = this.extractDomain(absoluteUrl);
      
      return {
        href: absoluteUrl,
        text: link.textContent?.trim() || '',
        isInternal: linkDomain === baseDomain,
        isExternal: linkDomain !== baseDomain && linkDomain !== '',
        isBroken: false, // Would need additional requests to check
        rel: link.getAttribute('rel') || undefined,
        target: link.getAttribute('target') || undefined
      };
    });
  }

  private performTechnicalAnalysis(page: AnalyzedPage, doc: Document): TechnicalIssue[] {
    const issues: TechnicalIssue[] = [];
    
    // Title analysis
    if (!page.title) {
      issues.push({
        type: 'critical',
        category: 'meta',
        title: 'Missing Title Tag',
        description: 'This page does not have a title tag',
        recommendation: 'Add a unique, descriptive title tag (50-60 characters recommended)'
      });
    } else if (page.title.length > 60) {
      issues.push({
        type: 'warning',
        category: 'meta',
        title: 'Title Tag Too Long',
        description: `Title tag is ${page.title.length} characters (recommended: 50-60)`,
        recommendation: 'Shorten the title tag to improve display in search results'
      });
    } else if (page.title.length < 30) {
      issues.push({
        type: 'warning',
        category: 'meta',
        title: 'Title Tag Too Short',
        description: `Title tag is ${page.title.length} characters (recommended: 50-60)`,
        recommendation: 'Expand the title tag to be more descriptive'
      });
    }
    
    // Meta description analysis
    if (!page.metaDescription) {
      issues.push({
        type: 'warning',
        category: 'meta',
        title: 'Missing Meta Description',
        description: 'This page does not have a meta description',
        recommendation: 'Add a compelling meta description (150-160 characters) to improve click-through rates'
      });
    } else if (page.metaDescription.length > 160) {
      issues.push({
        type: 'warning',
        category: 'meta',
        title: 'Meta Description Too Long',
        description: `Meta description is ${page.metaDescription.length} characters (recommended: 150-160)`,
        recommendation: 'Shorten the meta description to prevent truncation in search results'
      });
    }
    
    // Heading structure analysis
    if (page.h1Tags.length === 0) {
      issues.push({
        type: 'critical',
        category: 'headings',
        title: 'Missing H1 Tag',
        description: 'This page does not have an H1 tag',
        recommendation: 'Add a single, descriptive H1 tag that summarizes the page content'
      });
    } else if (page.h1Tags.length > 1) {
      issues.push({
        type: 'warning',
        category: 'headings',
        title: 'Multiple H1 Tags',
        description: `Found ${page.h1Tags.length} H1 tags (recommended: 1)`,
        recommendation: 'Use only one H1 tag per page and use H2-H6 for subheadings'
      });
    }
    
    // Image analysis
    const imagesWithoutAlt = page.images.filter(img => !img.hasAlt);
    if (imagesWithoutAlt.length > 0) {
      issues.push({
        type: 'warning',
        category: 'images',
        title: 'Images Missing Alt Text',
        description: `${imagesWithoutAlt.length} images are missing alt text`,
        recommendation: 'Add descriptive alt text to all images for accessibility and SEO'
      });
    }
    
    const unoptimizedImages = page.images.filter(img => !img.isOptimized);
    if (unoptimizedImages.length > 0) {
      issues.push({
        type: 'info',
        category: 'images',
        title: 'Unoptimized Images',
        description: `${unoptimizedImages.length} images may not be optimized`,
        recommendation: 'Consider using modern image formats (WebP, AVIF) and appropriate compression'
      });
    }
    
    // Performance analysis
    if (page.performance.loadTime > 3000) {
      issues.push({
        type: 'warning',
        category: 'performance',
        title: 'Slow Page Load Time',
        description: `Page loaded in ${page.performance.loadTime}ms (recommended: <3000ms)`,
        recommendation: 'Optimize images, enable compression, and improve server response time'
      });
    }
    
    // Content analysis
    if (page.wordCount < 300) {
      issues.push({
        type: 'warning',
        category: 'structure',
        title: 'Thin Content',
        description: `Page has only ${page.wordCount} words (recommended: 300+)`,
        recommendation: 'Add more valuable, relevant content to improve page quality'
      });
    }
    
    // Link analysis
    const externalLinksWithoutNofollow = page.links.filter(link => 
      link.isExternal && (!link.rel || !link.rel.includes('nofollow'))
    );
    if (externalLinksWithoutNofollow.length > 10) {
      issues.push({
        type: 'info',
        category: 'links',
        title: 'Many External Links Without Nofollow',
        description: `${externalLinksWithoutNofollow.length} external links without nofollow`,
        recommendation: 'Consider adding rel="nofollow" to external links to preserve link equity'
      });
    }
    
    // HTML structure analysis
    const viewport = doc.querySelector('meta[name="viewport"]');
    if (!viewport) {
      issues.push({
        type: 'warning',
        category: 'structure',
        title: 'Missing Viewport Meta Tag',
        description: 'Page is missing viewport meta tag for mobile optimization',
        recommendation: 'Add <meta name="viewport" content="width=device-width, initial-scale=1"> for mobile responsiveness'
      });
    }
    
    const charset = doc.querySelector('meta[charset]');
    if (!charset) {
      issues.push({
        type: 'info',
        category: 'structure',
        title: 'Missing Charset Declaration',
        description: 'Page is missing charset meta tag',
        recommendation: 'Add <meta charset="UTF-8"> to ensure proper character encoding'
      });
    }
    
    // Check for schema markup
    const schemaScripts = doc.querySelectorAll('script[type="application/ld+json"]');
    if (schemaScripts.length === 0) {
      issues.push({
        type: 'info',
        category: 'structure',
        title: 'No Structured Data Found',
        description: 'Page does not contain structured data markup',
        recommendation: 'Consider adding JSON-LD structured data to help search engines understand your content'
      });
    }
    
    return issues;
  }

  private calculateIssuesSummary(pages: AnalyzedPage[]): IssuesSummary {
    const summary: IssuesSummary = {
      critical: 0,
      warnings: 0,
      info: 0,
      totalIssues: 0,
      categoryCounts: {}
    };
    
    pages.forEach(page => {
      page.technicalIssues.forEach(issue => {
        summary.totalIssues++;
        
        switch (issue.type) {
          case 'critical':
            summary.critical++;
            break;
          case 'warning':
            summary.warnings++;
            break;
          case 'info':
            summary.info++;
            break;
        }
        
        summary.categoryCounts[issue.category] = (summary.categoryCounts[issue.category] || 0) + 1;
      });
    });
    
    return summary;
  }

  private calculateOverallScore(pages: AnalyzedPage[]): number {
    if (pages.length === 0) return 0;
    
    let totalScore = 0;
    
    pages.forEach(page => {
      let pageScore = 100;
      
      page.technicalIssues.forEach(issue => {
        switch (issue.type) {
          case 'critical':
            pageScore -= 15;
            break;
          case 'warning':
            pageScore -= 8;
            break;
          case 'info':
            pageScore -= 3;
            break;
        }
      });
      
      totalScore += Math.max(0, pageScore);
    });
    
    return Math.round(totalScore / pages.length);
  }

  private normalizeUrl(url: string): string {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    return url.replace(/\/$/, '');
  }

  private resolveUrl(href: string, baseUrl: string): string {
    try {
      return new URL(href, baseUrl).href;
    } catch {
      return href;
    }
  }

  private extractDomain(url: string): string {
    try {
      return new URL(url).hostname;
    } catch {
      return '';
    }
  }

  private shouldIncludeUrl(url: URL, baseDomain: string, includeSubdomains: boolean): boolean {
    if (includeSubdomains) {
      return url.hostname.endsWith(baseDomain);
    }
    return url.hostname === baseDomain;
  }

  private isImageOptimized(src: string, img: HTMLImageElement): boolean {
    const modernFormats = ['.webp', '.avif'];
    const hasModernFormat = modernFormats.some(format => src.toLowerCase().includes(format));
    const hasReasonableSize = !img.width || img.width <= 1920;
    return hasModernFormat && hasReasonableSize;
  }

  private countWords(doc: Document): number {
    const textContent = doc.body?.textContent || '';
    return textContent.trim().split(/\s+/).filter(word => word.length > 0).length;
  }

  getScanStatus(scanId: string): TechnicalSEOResult | null {
    return this.scans.get(scanId) || null;
  }

  getAllScans(): TechnicalSEOResult[] {
    return Array.from(this.scans.values()).sort((a, b) => 
      new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
    );
  }

  deleteScan(scanId: string): boolean {
    return this.scans.delete(scanId);
  }
}

export const realTechnicalSEOService = new RealTechnicalSEOService();