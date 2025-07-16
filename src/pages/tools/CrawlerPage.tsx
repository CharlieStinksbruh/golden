import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Play, Pause, Download, AlertTriangle, CheckCircle, Clock, Globe, BarChart3, Link as LinkIcon, Trash2, Eye, RefreshCw } from 'lucide-react';
import { crawlerService, CrawlResult } from '../../services/crawlerService';

const CrawlerPage = () => {
  const [url, setUrl] = useState('');
  const [currentCrawl, setCurrentCrawl] = useState<CrawlResult | null>(null);
  const [crawlHistory, setCrawlHistory] = useState<CrawlResult[]>([]);
  const [crawlOptions, setCrawlOptions] = useState({
    depth: 3,
    includeExternal: false,
    followRedirects: true
  });

  useEffect(() => {
    // Load crawl history on component mount
    setCrawlHistory(crawlerService.getAllCrawls());
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (currentCrawl && currentCrawl.status === 'running') {
      interval = setInterval(() => {
        const updated = crawlerService.getCrawlStatus(currentCrawl.id);
        if (updated) {
          setCurrentCrawl(updated);
          if (updated.status !== 'running') {
            setCrawlHistory(crawlerService.getAllCrawls());
          }
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentCrawl]);

  const handleStartCrawl = async () => {
    if (!url) return;
    
    try {
      const crawlId = await crawlerService.startCrawl(url, crawlOptions);
      const crawlResult = crawlerService.getCrawlStatus(crawlId);
      setCurrentCrawl(crawlResult);
    } catch (error) {
      console.error('Failed to start crawl:', error);
    }
  };

  const handleStopCrawl = () => {
    if (currentCrawl) {
      // In a real implementation, you would call an API to stop the crawl
      setCurrentCrawl(null);
    }
  };

  const deleteCrawl = (crawlId: string) => {
    crawlerService.deleteCrawl(crawlId);
    setCrawlHistory(crawlerService.getAllCrawls());
    if (currentCrawl?.id === crawlId) {
      setCurrentCrawl(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'running': return 'text-blue-600 bg-blue-100';
      case 'failed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Site Crawler</h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Comprehensive website crawling and analysis tool
            </p>
          </motion.div>
        </div>

        {/* Crawler Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                Website URL
              </label>
              <input
                type="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            {/* Crawl Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Crawl Depth
                </label>
                <select
                  value={crawlOptions.depth}
                  onChange={(e) => setCrawlOptions({...crawlOptions, depth: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                >
                  <option value={1}>1 level</option>
                  <option value={2}>2 levels</option>
                  <option value={3}>3 levels</option>
                  <option value={5}>5 levels</option>
                  <option value={-1}>Unlimited</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="includeExternal"
                  checked={crawlOptions.includeExternal}
                  onChange={(e) => setCrawlOptions({...crawlOptions, includeExternal: e.target.checked})}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="includeExternal" className="ml-2 block text-sm text-gray-900">
                  Include external links
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="followRedirects"
                  checked={crawlOptions.followRedirects}
                  onChange={(e) => setCrawlOptions({...crawlOptions, followRedirects: e.target.checked})}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="followRedirects" className="ml-2 block text-sm text-gray-900">
                  Follow redirects
                </label>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              {!currentCrawl || currentCrawl.status !== 'running' ? (
                <button
                  onClick={handleStartCrawl}
                  disabled={!url}
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-sm sm:text-base"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Start Crawl
                </button>
              ) : (
                <button
                  onClick={handleStopCrawl}
                  className="flex items-center justify-center px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors text-sm sm:text-base"
                >
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Stop Crawl
                </button>
              )}
              <button className="flex items-center justify-center px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors text-sm sm:text-base">
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Export
              </button>
            </div>
          </div>
        </motion.div>

        {/* Current Crawl Progress */}
        {currentCrawl && currentCrawl.status === 'running' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Crawling Progress</h3>
              <span className="text-sm text-gray-600">{currentCrawl.progress}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div
                className="bg-gradient-to-r from-orange-500 to-yellow-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${currentCrawl.progress}%` }}
              ></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-orange-600">{currentCrawl.pagesCrawled}</div>
                <div className="text-gray-600">Pages Crawled</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">{currentCrawl.pagesFound}</div>
                <div className="text-gray-600">Pages Found</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-600">{currentCrawl.errors.length}</div>
                <div className="text-gray-600">Errors</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-yellow-600">{currentCrawl.warnings.length}</div>
                <div className="text-gray-600">Warnings</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Completed Crawl Results */}
        {currentCrawl && currentCrawl.status === 'completed' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Technical Issues Found</h3>
            <div className="space-y-4">
              {currentCrawl.technicalIssues.map((issue, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      <h4 className="font-medium text-gray-900">{issue.description}</h4>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSeverityColor(issue.severity)}`}>
                        {issue.severity}
                      </span>
                      <span className="text-sm text-gray-600">{issue.count} instances</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{issue.recommendation}</p>
                  
                  <div className="bg-gray-50 rounded p-3">
                    <div className="text-sm font-medium text-gray-700 mb-2">Affected URLs (showing first 5):</div>
                    <div className="space-y-1">
                      {issue.urls.slice(0, 5).map((url, urlIndex) => (
                        <div key={urlIndex} className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                          {url}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Crawl History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="px-4 sm:px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Crawl History</h3>
            <button
              onClick={() => setCrawlHistory(crawlerService.getAllCrawls())}
              className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <RefreshCw className="w-4 h-4 mr-1" />
              Refresh
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Website
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pages
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Issues
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {crawlHistory.map((crawl) => (
                  <tr key={crawl.id} className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-4">
                      <div className="text-sm font-medium text-gray-900 truncate max-w-xs">{crawl.url}</div>
                      <div className="text-sm text-gray-500">
                        {crawl.endTime ? 
                          `Completed in ${Math.round((new Date(crawl.endTime).getTime() - new Date(crawl.startTime).getTime()) / 1000)}s` :
                          'In progress'
                        }
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(crawl.status)}`}>
                        {crawl.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">
                      {crawl.pagesCrawled.toLocaleString()}
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <div className="text-sm text-gray-900">{crawl.errors.length} errors</div>
                      <div className="text-sm text-gray-500">{crawl.warnings.length} warnings</div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm text-gray-500">
                      {new Date(crawl.startTime).toLocaleDateString()}
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => setCurrentCrawl(crawl)}
                          className="text-orange-600 hover:text-orange-900"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-blue-600 hover:text-blue-900">
                          <Download className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => deleteCrawl(crawl.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CrawlerPage;