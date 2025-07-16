// Real Data Service - Handles fetching real data from websites
// Note: Due to CORS restrictions in browsers, we cannot directly fetch data from external websites
// In a production environment, this would be handled by a backend server

export interface RealDataError {
  type: 'cors' | 'network' | 'parsing' | 'timeout';
  message: string;
  url: string;
}

export interface RealSiteData {
  url: string;
  title?: string;
  metaDescription?: string;
  h1Tags?: string[];
  h2Tags?: string[];
  images?: number;
  links?: number;
  loadTime?: number;
  statusCode?: number;
  error?: RealDataError;
}

class RealDataService {
  private cache: Map<string, RealSiteData> = new Map();

  async fetchSiteData(url: string): Promise<RealSiteData> {
    const normalizedUrl = this.normalizeUrl(url);
    
    // Check cache first
    if (this.cache.has(normalizedUrl)) {
      return this.cache.get(normalizedUrl)!;
    }

    try {
      // IMPORTANT: Due to CORS restrictions, we cannot fetch external websites directly
      // This would need to be handled by a backend proxy server in production
      
      const result: RealSiteData = {
        url: normalizedUrl,
        error: {
          type: 'cors',
          message: 'Cannot fetch real data due to browser CORS restrictions. In production, this would be handled by a backend server.',
          url: normalizedUrl
        }
      };

      this.cache.set(normalizedUrl, result);
      return result;
      
    } catch (error) {
      const result: RealSiteData = {
        url: normalizedUrl,
        error: {
          type: 'network',
          message: `Failed to fetch data: ${error.message}`,
          url: normalizedUrl
        }
      };
      
      this.cache.set(normalizedUrl, result);
      return result;
    }
  }

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

  clearCache(): void {
    this.cache.clear();
  }
}

export const realDataService = new RealDataService();