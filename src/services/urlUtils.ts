export const normalizeUrl = (url: string): string => {
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
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(normalizeUrl(url));
    return true;
  } catch {
    return false;
  }
};

export const getDomainFromUrl = (url: string): string => {
  try {
    const normalizedUrl = normalizeUrl(url);
    const urlObj = new URL(normalizedUrl);
    return urlObj.hostname;
  } catch {
    return '';
  }
};