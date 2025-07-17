import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Zap, 
  Shield, 
  Globe, 
  Smartphone,
  Search,
  Download,
  Play,
  Gauge,
  RefreshCw
} from 'lucide-react';
import { realWebsiteScanner, ScannedPage, SEOIssue } from '../../services/realWebsiteScanner';
import DataErrorDisplay from '../../components/DataErrorDisplay';

const TechnicalSEOPage = () => {
  const [url, setUrl] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [scanResults, setScanResults] = useState<ScannedPage[]>([]);
  const [scanErrors, setScanErrors] = useState<string[]>([]);
  const [overallScore, setOverallScore] = useState<number>(0);

  const handleStartAudit = async () => {
    if (!url.trim()) return;
    
    setIsRunning(true);
    setScanResults([]);
    setScanErrors([]);
    setOverallScore(0);

    try {
      // For demo purposes, we'll scan just the single page
      // In production, this could scan multiple pages
      const result = await realWebsiteScanner.scanSinglePage(url);
      
      if (result) {
        setScanResults([result]);
        setOverallScore(calculateOverallScore([result]));
      } else {
        setScanErrors(['Failed to scan the website. Please check the URL and try again.']);
      }
    } catch (error) {
      setScanErrors([`Scan failed: ${error.message}`]);
    } finally {
      setIsRunning(false);
    }
  };

  const calculateOverallScore = (pages: ScannedPage[]): number => {
    if (pages.length === 0) return 0;
    
    let totalScore = 0;
    
    pages.forEach(page => {
      let pageScore = 100;
      
      // Deduct points for issues
      page.issues.forEach(issue => {
        switch (issue.type) {
          case 'error':
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
      
      // Performance penalties
      if (page.loadTime > 3000) pageScore -= 10;
      if (page.loadTime > 5000) pageScore -= 15;
      
      totalScore += Math.max(0, pageScore);
    });
    
    return Math.round(totalScore / pages.length);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBackground = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error': return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'warning': return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'info': return <CheckCircle className="w-4 h-4 text-blue-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const groupIssuesByCategory = (issues: SEOIssue[]) => {
    const grouped: { [key: string]: SEOIssue[] } = {};
    issues.forEach(issue => {
      if (!grouped[issue.category]) {
        grouped[issue.category] = [];
      }
      grouped[issue.category].push(issue);
    });
    return grouped;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'title': return <Zap className="w-6 h-6 text-blue-500" />;
      case 'meta': return <Globe className="w-6 h-6 text-green-500" />;
      case 'headings': return <BarChart3 className="w-6 h-6 text-purple-500" />;
      case 'images': return <Smartphone className="w-6 h-6 text-orange-500" />;
      case 'content': return <FileText className="w-6 h-6 text-indigo-500" />;
      case 'performance': return <Gauge className="w-6 h-6 text-red-500" />;
      default: return <Shield className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Technical SEO Audit</h1>
            <p className="text-gray-600">
              Comprehensive technical analysis to optimize your site's performance
            </p>
          </motion.div>
        </div>

        {/* Audit Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            <div className="flex-1">
              <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                Website URL
              </label>
              <input
                type="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleStartAudit}
                disabled={!url || isRunning}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isRunning ? (
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Play className="w-5 h-5 mr-2" />
                )}
                {isRunning ? 'Scanning...' : 'Start Audit'}
              </button>
              <button 
                className="flex items-center px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors"
                disabled={scanResults.length === 0}
              >
                <Download className="w-5 h-5 mr-2" />
                Export
              </button>
            </div>
          </div>
        </motion.div>

        {/* Error Display */}
        {scanErrors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <DataErrorDisplay
              error={{
                type: 'network',
                message: scanErrors.join(', '),
                url: url
              }}
              onRetry={handleStartAudit}
            />
          </motion.div>
        )}

        {/* Overall Score */}
        {scanResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overall Technical SEO Score</h2>
            <div className="flex justify-center items-center mb-6">
              <div className={`w-32 h-32 rounded-full flex items-center justify-center ${getScoreBackground(overallScore)}`}>
                <span className={`text-4xl font-bold ${getScoreColor(overallScore)}`}>{overallScore}</span>
              </div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {overallScore >= 90 
                ? "Excellent! Your website has strong technical SEO fundamentals."
                : overallScore >= 70
                ? "Good technical SEO foundation with some areas for improvement."
                : "Your website needs significant technical SEO improvements to maximize search engine visibility."
              }
            </p>
          </motion.div>
        )}

        {/* Scan Results */}
        {scanResults.map((page, pageIndex) => (
          <motion.div
            key={pageIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + pageIndex * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Page Analysis</h3>
              <div className="text-sm text-gray-600 break-all">{page.url}</div>
            </div>

            {/* Page Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Title</div>
                <div className="font-medium text-gray-900 truncate" title={page.title}>
                  {page.title || 'Missing'}
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Word Count</div>
                <div className="font-medium text-gray-900">{page.wordCount}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Load Time</div>
                <div className={`font-medium ${page.loadTime > 3000 ? 'text-red-600' : 'text-green-600'}`}>
                  {page.loadTime}ms
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Status Code</div>
                <div className={`font-medium ${page.statusCode === 200 ? 'text-green-600' : 'text-red-600'}`}>
                  {page.statusCode}
                </div>
              </div>
            </div>

            {/* Issues by Category */}
            {page.issues.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Issues Found</h4>
                {Object.entries(groupIssuesByCategory(page.issues)).map(([category, issues]) => (
                  <div key={category} className="mb-6">
                    <div className="flex items-center mb-3">
                      {getCategoryIcon(category)}
                      <h5 className="text-md font-medium text-gray-900 ml-2 capitalize">
                        {category} ({issues.length})
                      </h5>
                    </div>
                    <div className="space-y-3">
                      {issues.map((issue, issueIndex) => (
                        <div key={issueIndex} className="flex items-start p-3 bg-gray-50 rounded-lg">
                          {getIssueIcon(issue.type)}
                          <div className="ml-3 flex-1">
                            <div className="text-sm font-medium text-gray-900">{issue.message}</div>
                            <div className="text-sm text-gray-600 mt-1">{issue.recommendation}</div>
                            {issue.element && (
                              <div className="text-xs text-gray-500 mt-1 font-mono bg-gray-100 px-2 py-1 rounded">
                                {issue.element}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Technical Details */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Technical Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">H1 Tags</div>
                  <div className="text-sm text-gray-900">{page.h1Tags.length} found</div>
                  {page.h1Tags.length > 0 && (
                    <div className="text-xs text-gray-500 mt-1 truncate">
                      {page.h1Tags[0]}
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Images</div>
                  <div className="text-sm text-gray-900">
                    {page.images} total, {page.imagesWithoutAlt} without alt
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Links</div>
                  <div className="text-sm text-gray-900">
                    {page.internalLinks} internal, {page.externalLinks} external
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Meta Description</div>
                  <div className="text-sm text-gray-900">
                    {page.metaDescription ? `${page.metaDescription.length} chars` : 'Missing'}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Content Type</div>
                  <div className="text-sm text-gray-900">{page.contentType}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Response Size</div>
                  <div className="text-sm text-gray-900">{(page.responseSize / 1024).toFixed(1)} KB</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* No Results State */}
        {!isRunning && scanResults.length === 0 && scanErrors.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Scan</h3>
            <p className="text-gray-600">Enter a website URL above and click "Start Audit" to begin your technical SEO analysis.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TechnicalSEOPage;