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
  Gauge
} from 'lucide-react';

const TechnicalSEOPage = () => {
  const [url, setUrl] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const auditResults = [
    {
      category: "Core Web Vitals",
      icon: <Gauge className="w-6 h-6 text-blue-500" />,
      score: 85,
      status: "good",
      issues: [
        { type: "warning", title: "Largest Contentful Paint", value: "2.8s", threshold: "< 2.5s" },
        { type: "success", title: "First Input Delay", value: "45ms", threshold: "< 100ms" },
        { type: "error", title: "Cumulative Layout Shift", value: "0.15", threshold: "< 0.1" }
      ]
    },
    {
      category: "Mobile Optimization",
      icon: <Smartphone className="w-6 h-6 text-green-500" />,
      score: 92,
      status: "excellent",
      issues: [
        { type: "success", title: "Mobile-Friendly Test", value: "Passed", threshold: "Pass" },
        { type: "success", title: "Viewport Configuration", value: "Correct", threshold: "Required" },
        { type: "warning", title: "Touch Elements", value: "2 issues", threshold: "0 issues" }
      ]
    },
    {
      category: "Page Speed",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      score: 78,
      status: "needs-improvement",
      issues: [
        { type: "error", title: "Server Response Time", value: "1.2s", threshold: "< 0.6s" },
        { type: "warning", title: "Image Optimization", value: "15 unoptimized", threshold: "0" },
        { type: "success", title: "Text Compression", value: "Enabled", threshold: "Required" }
      ]
    },
    {
      category: "Security",
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      score: 95,
      status: "excellent",
      issues: [
        { type: "success", title: "HTTPS", value: "Enabled", threshold: "Required" },
        { type: "success", title: "SSL Certificate", value: "Valid", threshold: "Required" },
        { type: "warning", title: "Mixed Content", value: "1 issue", threshold: "0 issues" }
      ]
    },
    {
      category: "Crawlability",
      icon: <Search className="w-6 h-6 text-indigo-500" />,
      score: 88,
      status: "good",
      issues: [
        { type: "success", title: "Robots.txt", value: "Valid", threshold: "Required" },
        { type: "success", title: "XML Sitemap", value: "Found", threshold: "Required" },
        { type: "error", title: "Blocked Resources", value: "3 blocked", threshold: "0 blocked" }
      ]
    },
    {
      category: "Structured Data",
      icon: <Globe className="w-6 h-6 text-pink-500" />,
      score: 72,
      status: "needs-improvement",
      issues: [
        { type: "warning", title: "Schema Markup", value: "Partial", threshold: "Complete" },
        { type: "error", title: "Rich Snippets", value: "2 errors", threshold: "0 errors" },
        { type: "success", title: "Open Graph", value: "Implemented", threshold: "Required" }
      ]
    }
  ];

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBackground = (score) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'needs-improvement': return 'text-yellow-600 bg-yellow-100';
      case 'poor': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getIssueIcon = (type) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning': return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'error': return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const handleStartAudit = () => {
    setIsRunning(true);
    // Simulate audit process
    setTimeout(() => {
      setIsRunning(false);
    }, 3000);
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
                <Play className="w-5 h-5 mr-2" />
                {isRunning ? 'Running...' : 'Start Audit'}
              </button>
              <button className="flex items-center px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Export
              </button>
            </div>
          </div>
        </motion.div>

        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overall Technical SEO Score</h2>
          <div className="flex justify-center items-center mb-6">
            <div className={`w-32 h-32 rounded-full flex items-center justify-center ${getScoreBackground(85)}`}>
              <span className={`text-4xl font-bold ${getScoreColor(85)}`}>85</span>
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your website has good technical SEO fundamentals but there are several areas that need improvement 
            to maximize your search engine visibility.
          </p>
        </motion.div>

        {/* Audit Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {auditResults.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-2 bg-gray-50 rounded-lg mr-3">
                    {result.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{result.category}</h3>
                </div>
                <div className="flex items-center">
                  <span className={`text-2xl font-bold mr-2 ${getScoreColor(result.score)}`}>
                    {result.score}
                  </span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(result.status)}`}>
                    {result.status.replace('-', ' ')}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {result.issues.map((issue, issueIndex) => (
                  <div key={issueIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      {getIssueIcon(issue.type)}
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{issue.title}</div>
                        <div className="text-xs text-gray-500">Target: {issue.threshold}</div>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      {issue.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Priority Recommendations</h2>
          
          <div className="space-y-6">
            <div className="flex items-start p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-500 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">High Priority</h3>
                <p className="text-red-700 mb-3">
                  Fix Cumulative Layout Shift issues and optimize server response time to improve Core Web Vitals scores.
                </p>
                <ul className="list-disc list-inside text-red-600 space-y-1">
                  <li>Add size attributes to images and videos</li>
                  <li>Optimize server configuration and caching</li>
                  <li>Minimize render-blocking resources</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Medium Priority</h3>
                <p className="text-yellow-700 mb-3">
                  Improve image optimization and implement complete schema markup for better search visibility.
                </p>
                <ul className="list-disc list-inside text-yellow-600 space-y-1">
                  <li>Compress and optimize images</li>
                  <li>Add structured data markup</li>
                  <li>Fix touch element spacing on mobile</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <CheckCircle className="w-6 h-6 text-blue-500 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Low Priority</h3>
                <p className="text-blue-700 mb-3">
                  Fine-tune existing implementations and monitor for ongoing optimization opportunities.
                </p>
                <ul className="list-disc list-inside text-blue-600 space-y-1">
                  <li>Monitor Core Web Vitals regularly</li>
                  <li>Update schema markup as needed</li>
                  <li>Review and update robots.txt</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnicalSEOPage;