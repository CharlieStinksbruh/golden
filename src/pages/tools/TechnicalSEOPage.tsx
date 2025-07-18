import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Info, 
  Clock, 
  Globe, 
  Download, 
  Play, 
  Pause,
  Eye,
  BarChart3,
  FileText,
  Image,
  Link as LinkIcon,
  Code,
  Smartphone,
  Monitor,
  Zap,
  Target,
  Settings,
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import { realTechnicalSEOService, TechnicalSEOResult, AnalyzedPage } from '../../services/realTechnicalSEOService';

const TechnicalSEOPage = () => {
  const [url, setUrl] = useState('');
  const [currentScan, setCurrentScan] = useState<TechnicalSEOResult | null>(null);
  const [scanHistory, setScanHistory] = useState<TechnicalSEOResult[]>([]);
  const [selectedPage, setSelectedPage] = useState<AnalyzedPage | null>(null);
  const [scanOptions, setScanOptions] = useState({
    maxPages: 25,
    includeSubdomains: false,
    followRedirects: true,
    timeout: 10000
  });

  useEffect(() => {
    // Load scan history on component mount
    setScanHistory(realTechnicalSEOService.getAllScans());
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (currentScan && currentScan.status === 'running') {
      interval = setInterval(() => {
        const updated = realTechnicalSEOService.getScanStatus(currentScan.id);
        if (updated) {
          setCurrentScan(updated);
          if (updated.status !== 'running') {
            setScanHistory(realTechnicalSEOService.getAllScans());
          }
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentScan]);

  const handleStartScan = async () => {
    if (!url.trim()) return;
    
    try {
      console.log('🚀 Starting real technical SEO scan...');
      const scanId = await realTechnicalSEOService.startScan(url, scanOptions);
      const scanResult = realTechnicalSEOService.getScanStatus(scanId);
      setCurrentScan(scanResult);
      setSelectedPage(null);
    } catch (error) {
      console.error('Failed to start scan:', error);
      alert(`Failed to start scan: ${error.message}`);
    }
  };

  const handleStopScan = () => {
    if (currentScan) {
      setCurrentScan(null);
    }
  };

  const deleteScan = (scanId: string) => {
    realTechnicalSEOService.deleteScan(scanId);
    setScanHistory(realTechnicalSEOService.getAllScans());
    if (currentScan?.id === scanId) {
      setCurrentScan(null);
    }
  };

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'critical':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'info':
        return <Info className="w-4 h-4 text-blue-500" />;
      default:
        return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
  };

  const getIssueColor = (type: string) => {
    switch (type) {
      case 'critical':
        return 'text-red-600 bg-red-100 border-red-200';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'info':
        return 'text-blue-600 bg-blue-100 border-blue-200';
      default:
        return 'text-green-600 bg-green-100 border-green-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'meta': return <Code className="w-4 h-4" />;
      case 'headings': return <BarChart3 className="w-4 h-4" />;
      case 'images': return <Image className="w-4 h-4" />;
      case 'links': return <LinkIcon className="w-4 h-4" />;
      case 'performance': return <Zap className="w-4 h-4" />;
      case 'structure': return <FileText className="w-4 h-4" />;
      case 'accessibility': return <Eye className="w-4 h-4" />;
      default: return <Settings className="w-4 h-4" />;
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

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCurrentScanPhase = () => {
    if (!currentScan) return '';
    
    if (currentScan.progress < 20) {
      return `Discovering pages... (${currentScan.pagesDiscovered.length} found)`;
    } else if (currentScan.progress < 95) {
      return `Analyzing pages... (${currentScan.pagesAnalyzed.length}/${currentScan.pagesDiscovered.length})`;
    } else {
      return 'Finalizing results...';
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
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Technical SEO Audit</h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Real website analysis - discovers pages and performs comprehensive technical SEO checks
            </p>
          </motion.div>
        </div>

        {/* Scan Controls */}
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

            {/* Scan Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Pages
                </label>
                <select
                  value={scanOptions.maxPages}
                  onChange={(e) => setScanOptions({...scanOptions, maxPages: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                >
                  <option value={10}>10 pages</option>
                  <option value={25}>25 pages</option>
                  <option value={50}>50 pages</option>
                  <option value={100}>100 pages</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeout (ms)
                </label>
                <select
                  value={scanOptions.timeout}
                  onChange={(e) => setScanOptions({...scanOptions, timeout: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                >
                  <option value={5000}>5 seconds</option>
                  <option value={10000}>10 seconds</option>
                  <option value={15000}>15 seconds</option>
                  <option value={30000}>30 seconds</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="includeSubdomains"
                  checked={scanOptions.includeSubdomains}
                  onChange={(e) => setScanOptions({...scanOptions, includeSubdomains: e.target.checked})}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="includeSubdomains" className="ml-2 block text-sm text-gray-900">
                  Include subdomains
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="followRedirects"
                  checked={scanOptions.followRedirects}
                  onChange={(e) => setScanOptions({...scanOptions, followRedirects: e.target.checked})}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="followRedirects" className="ml-2 block text-sm text-gray-900">
                  Follow redirects
                </label>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              {!currentScan || currentScan.status !== 'running' ? (
                <button
                  onClick={handleStartScan}
                  disabled={!url.trim()}
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-sm sm:text-base"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Start Real Technical Audit
                </button>
              ) : (
                <button
                  onClick={handleStopScan}
                  className="flex items-center justify-center px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors text-sm sm:text-base"
                >
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Stop Scan
                </button>
              )}
              {currentScan && currentScan.status === 'completed' && (
                <button className="flex items-center justify-center px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors text-sm sm:text-base">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Export Report
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Scanning Progress */}
        {currentScan && currentScan.status === 'running' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Real-Time Scanning Progress</h3>
              <span className="text-sm text-gray-600">{currentScan.progress}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div
                className="bg-gradient-to-r from-orange-500 to-yellow-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${currentScan.progress}%` }}
              ></div>
            </div>
            <div className="text-sm text-gray-600 mb-4">
              {getCurrentScanPhase()}
            </div>
            
            {/* Real-time stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">{currentScan.pagesDiscovered.length}</div>
                <div className="text-gray-600">Pages Found</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-green-600">{currentScan.pagesAnalyzed.length}</div>
                <div className="text-gray-600">Pages Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-600">{currentScan.issuesSummary.critical}</div>
                <div className="text-gray-600">Critical Issues</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-yellow-600">{currentScan.issuesSummary.warnings}</div>
                <div className="text-gray-600">Warnings</div>
              </div>
            </div>
            
            {/* Show errors if any */}
            {currentScan.errors.length > 0 && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-medium text-red-800 mb-2">Scan Errors:</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  {currentScan.errors.map((error, index) => (
                    <li key={index}>• {error}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}

        {/* Completed Scan Results */}
        {currentScan && currentScan.status === 'completed' && (
          <>
            {/* Overview Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8"
            >
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{currentScan.pagesAnalyzed.length}</div>
                <div className="text-sm text-gray-600">Pages Analyzed</div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                  </div>
                </div>
                <div className={`text-xl sm:text-2xl font-bold mb-1 ${getScoreColor(currentScan.overallScore)}`}>
                  {currentScan.overallScore}/100
                </div>
                <div className="text-sm text-gray-600">Overall Score</div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-red-50 rounded-lg">
                    <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-red-600 mb-1">{currentScan.issuesSummary.critical}</div>
                <div className="text-sm text-gray-600">Critical Issues</div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-yellow-600 mb-1">{currentScan.issuesSummary.warnings}</div>
                <div className="text-sm text-gray-600">Warnings</div>
              </div>
            </motion.div>

            {/* Issues by Category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">Issues by Category</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(currentScan.issuesSummary.categoryCounts).map(([category, count]) => (
                  <div key={category} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      {getCategoryIcon(category)}
                      <h4 className="font-medium text-gray-900 capitalize">{category}</h4>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-1">{count}</div>
                    <div className="text-sm text-gray-600">Issues found</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pages Analysis Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 sm:mb-8"
            >
              <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Analyzed Pages</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Page
                      </th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Load Time
                      </th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Issues
                      </th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Word Count
                      </th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentScan.pagesAnalyzed.map((page, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 sm:px-6 py-4">
                          <div>
                            <div className="font-medium text-gray-900 truncate max-w-xs text-sm sm:text-base">
                              {page.title || 'No title'}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500 truncate max-w-xs">
                              {page.url}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            page.statusCode >= 200 && page.statusCode < 300 ? 'text-green-600 bg-green-100' :
                            page.statusCode >= 300 && page.statusCode < 400 ? 'text-yellow-600 bg-yellow-100' :
                            'text-red-600 bg-red-100'
                          }`}>
                            {page.statusCode}
                          </span>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <span className={`text-sm font-medium ${
                            page.performance.loadTime < 1000 ? 'text-green-600' :
                            page.performance.loadTime < 3000 ? 'text-yellow-600' :
                            'text-red-600'
                          }`}>
                            {page.performance.loadTime}ms
                          </span>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-1 sm:space-y-0">
                            {page.technicalIssues.filter(i => i.type === 'critical').length > 0 && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                {page.technicalIssues.filter(i => i.type === 'critical').length} critical
                              </span>
                            )}
                            {page.technicalIssues.filter(i => i.type === 'warning').length > 0 && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                {page.technicalIssues.filter(i => i.type === 'warning').length} warnings
                              </span>
                            )}
                            {page.technicalIssues.length === 0 && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                No issues
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {page.wordCount.toLocaleString()}
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => setSelectedPage(page)}
                              className="text-orange-600 hover:text-orange-900"
                              title="View details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <a
                              href={page.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-900"
                              title="Open page"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </>
        )}

        {/* Page Details Modal */}
        {selectedPage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="px-4 sm:px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Page Analysis Details</h3>
                <button
                  onClick={() => setSelectedPage(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-4 sm:p-6">
                {/* Page Information */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Page Information</h4>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                    <div><strong>URL:</strong> <a href={selectedPage.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{selectedPage.url}</a></div>
                    <div><strong>Title:</strong> {selectedPage.title || 'No title'}</div>
                    <div><strong>Meta Description:</strong> {selectedPage.metaDescription || 'No meta description'}</div>
                    <div><strong>Status Code:</strong> {selectedPage.statusCode}</div>
                    <div><strong>Content Type:</strong> {selectedPage.contentType}</div>
                    <div><strong>Response Time:</strong> {selectedPage.responseTime}ms</div>
                    <div><strong>Content Length:</strong> {selectedPage.contentLength.toLocaleString()} bytes</div>
                    <div><strong>Word Count:</strong> {selectedPage.wordCount.toLocaleString()}</div>
                    <div><strong>H1 Tags:</strong> {selectedPage.h1Tags.length > 0 ? selectedPage.h1Tags.join(', ') : 'None'}</div>
                    <div><strong>H2 Tags:</strong> {selectedPage.h2Tags.length > 0 ? selectedPage.h2Tags.slice(0, 3).join(', ') + (selectedPage.h2Tags.length > 3 ? '...' : '') : 'None'}</div>
                    <div><strong>Images:</strong> {selectedPage.images.length} total, {selectedPage.images.filter(img => !img.hasAlt).length} without alt text</div>
                    <div><strong>Links:</strong> {selectedPage.links.filter(l => l.isInternal).length} internal, {selectedPage.links.filter(l => l.isExternal).length} external</div>
                  </div>
                </div>

                {/* Technical Issues */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Technical Issues Found ({selectedPage.technicalIssues.length})</h4>
                  <div className="space-y-3">
                    {selectedPage.technicalIssues.map((issue, index) => (
                      <div key={index} className={`border rounded-lg p-4 ${getIssueColor(issue.type)}`}>
                        <div className="flex items-start space-x-3">
                          {getIssueIcon(issue.type)}
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getIssueColor(issue.type)}`}>
                                {issue.type}
                              </span>
                              <span className="text-xs text-gray-600 capitalize flex items-center">
                                {getCategoryIcon(issue.category)}
                                <span className="ml-1">{issue.category}</span>
                              </span>
                            </div>
                            <h5 className="font-medium text-gray-900 mb-1">{issue.title}</h5>
                            <p className="text-sm text-gray-700 mb-2">{issue.description}</p>
                            <div className="bg-white bg-opacity-50 border border-current rounded p-2">
                              <div className="text-xs font-medium mb-1">Recommendation:</div>
                              <div className="text-sm">{issue.recommendation}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {selectedPage.technicalIssues.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-500" />
                        <p>No technical issues found on this page!</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Scan History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="px-4 sm:px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Scan History</h3>
            <button
              onClick={() => setScanHistory(realTechnicalSEOService.getAllScans())}
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
                    Score
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
                {scanHistory.map((scan) => (
                  <tr key={scan.id} className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-4">
                      <div className="text-sm font-medium text-gray-900 truncate max-w-xs">{scan.url}</div>
                      <div className="text-xs sm:text-sm text-gray-500">
                        {scan.endTime ? 
                          `Completed in ${Math.round((new Date(scan.endTime).getTime() - new Date(scan.startTime).getTime()) / 1000)}s` :
                          'In progress'
                        }
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(scan.status)}`}>
                        {scan.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <span className={`text-sm font-semibold ${getScoreColor(scan.overallScore)}`}>
                        {scan.overallScore}/100
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">
                      {scan.pagesAnalyzed.length}
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <div className="text-sm text-gray-900">{scan.issuesSummary.critical} critical</div>
                      <div className="text-xs sm:text-sm text-gray-500">{scan.issuesSummary.warnings} warnings</div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                      {new Date(scan.startTime).toLocaleDateString()}
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => setCurrentScan(scan)}
                          className="text-orange-600 hover:text-orange-900"
                          title="View results"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          className="text-blue-600 hover:text-blue-900"
                          title="Download report"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => deleteScan(scan.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete scan"
                        >
                          <XCircle className="w-4 h-4" />
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

export default TechnicalSEOPage;