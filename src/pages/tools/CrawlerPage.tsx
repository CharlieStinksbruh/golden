import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Play, Pause, Download, AlertTriangle, CheckCircle, Clock, Globe, BarChart3, Link as LinkIcon } from 'lucide-react';

const CrawlerPage = () => {
  const [url, setUrl] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const crawlData = {
    totalPages: 1247,
    crawledPages: 892,
    errors: 23,
    warnings: 156,
    timeElapsed: '15:32',
    crawlSpeed: '12.5 pages/sec'
  };

  const recentIssues = [
    {
      type: 'error',
      title: 'Broken Internal Links',
      count: 15,
      description: 'Internal links returning 404 errors',
      severity: 'high'
    },
    {
      type: 'warning',
      title: 'Missing Meta Descriptions',
      count: 89,
      description: 'Pages without meta descriptions',
      severity: 'medium'
    },
    {
      type: 'error',
      title: 'Duplicate Title Tags',
      count: 8,
      description: 'Multiple pages with identical title tags',
      severity: 'high'
    },
    {
      type: 'warning',
      title: 'Large Image Files',
      count: 67,
      description: 'Images over 1MB affecting load times',
      severity: 'low'
    }
  ];

  const handleStartCrawl = () => {
    setIsRunning(true);
    // Simulate crawl progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsRunning(false);
          return 100;
        }
        return prev + 2;
      });
    }, 200);
  };

  const handleStopCrawl = () => {
    setIsRunning(false);
    setProgress(0);
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Site Crawler</h1>
            <p className="text-gray-600">
              Comprehensive website crawling and analysis tool
            </p>
          </motion.div>
        </div>

        {/* Crawler Controls */}
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
              {!isRunning ? (
                <button
                  onClick={handleStartCrawl}
                  disabled={!url}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Crawl
                </button>
              ) : (
                <button
                  onClick={handleStopCrawl}
                  className="flex items-center px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
                >
                  <Pause className="w-5 h-5 mr-2" />
                  Stop Crawl
                </button>
              )}
              <button className="flex items-center px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Export
              </button>
            </div>
          </div>
        </motion.div>

        {/* Progress Bar */}
        {isRunning && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Crawling Progress</h3>
              <span className="text-sm text-gray-600">{progress}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div
                className="bg-gradient-to-r from-orange-500 to-yellow-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">{crawlData.crawledPages}</div>
                <div className="text-gray-600">Pages Crawled</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{crawlData.crawlSpeed}</div>
                <div className="text-gray-600">Crawl Speed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">{crawlData.errors}</div>
                <div className="text-gray-600">Errors Found</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">{crawlData.timeElapsed}</div>
                <div className="text-gray-600">Time Elapsed</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: <Globe className="w-6 h-6 text-blue-500" />, label: "Total Pages", value: crawlData.totalPages.toLocaleString() },
            { icon: <AlertTriangle className="w-6 h-6 text-red-500" />, label: "Errors", value: crawlData.errors },
            { icon: <Clock className="w-6 h-6 text-yellow-500" />, label: "Warnings", value: crawlData.warnings },
            { icon: <CheckCircle className="w-6 h-6 text-green-500" />, label: "Success Rate", value: "92%" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-gray-50 rounded-lg">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Issues Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Issues</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Issue
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Count
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Severity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentIssues.map((issue, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {issue.type === 'error' ? (
                          <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                        ) : (
                          <Clock className="w-5 h-5 text-yellow-500 mr-2" />
                        )}
                        <span className="text-sm font-medium text-gray-900">{issue.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {issue.count}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        issue.severity === 'high' ? 'bg-red-100 text-red-800' :
                        issue.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {issue.severity}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {issue.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-orange-600 hover:text-orange-900">
                        View Details
                      </button>
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