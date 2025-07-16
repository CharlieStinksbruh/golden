import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Gauge, 
  Zap, 
  Smartphone, 
  Monitor, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Image, 
  Code, 
  Database,
  Globe,
  Download,
  Play,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Activity
} from 'lucide-react';

const PageSpeedPage = () => {
  const [url, setUrl] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState('desktop');

  const speedResults = {
    desktop: {
      score: 87,
      fcp: 1.2,
      lcp: 2.1,
      fid: 45,
      cls: 0.08,
      ttfb: 0.6,
      si: 2.3
    },
    mobile: {
      score: 72,
      fcp: 1.8,
      lcp: 3.2,
      fid: 78,
      cls: 0.12,
      ttfb: 0.9,
      si: 3.1
    }
  };

  const currentResults = speedResults[selectedDevice];

  const opportunities = [
    {
      title: "Eliminate render-blocking resources",
      impact: "High",
      savings: "1.2s",
      description: "Resources are blocking the first paint of your page",
      type: "critical"
    },
    {
      title: "Properly size images",
      impact: "Medium",
      savings: "0.8s",
      description: "Serve images that are appropriately-sized",
      type: "warning"
    },
    {
      title: "Enable text compression",
      impact: "Medium",
      savings: "0.5s",
      description: "Text-based resources should be served with compression",
      type: "warning"
    },
    {
      title: "Reduce unused CSS",
      impact: "Low",
      savings: "0.3s",
      description: "Reduce unused rules from stylesheets",
      type: "info"
    },
    {
      title: "Minify JavaScript",
      impact: "Low",
      savings: "0.2s",
      description: "Minifying JavaScript files can reduce payload sizes",
      type: "info"
    }
  ];

  const diagnostics = [
    {
      title: "Avoid enormous network payloads",
      value: "2.1 MB",
      status: "warning",
      description: "Large network payloads cost users real money"
    },
    {
      title: "Serve images in next-gen formats",
      value: "15 images",
      status: "info",
      description: "WebP and AVIF provide better compression"
    },
    {
      title: "Efficiently encode images",
      value: "8 images",
      status: "warning",
      description: "Optimized images load faster and consume less data"
    },
    {
      title: "Preload key requests",
      value: "3 resources",
      status: "info",
      description: "Consider using <link rel=preload> for key resources"
    }
  ];

  const coreWebVitals = [
    {
      name: "First Contentful Paint",
      value: currentResults.fcp,
      unit: "s",
      threshold: 1.8,
      status: currentResults.fcp <= 1.8 ? "good" : currentResults.fcp <= 3.0 ? "needs-improvement" : "poor",
      description: "Time until first text or image is painted"
    },
    {
      name: "Largest Contentful Paint",
      value: currentResults.lcp,
      unit: "s",
      threshold: 2.5,
      status: currentResults.lcp <= 2.5 ? "good" : currentResults.lcp <= 4.0 ? "needs-improvement" : "poor",
      description: "Time until largest text or image is painted"
    },
    {
      name: "First Input Delay",
      value: currentResults.fid,
      unit: "ms",
      threshold: 100,
      status: currentResults.fid <= 100 ? "good" : currentResults.fid <= 300 ? "needs-improvement" : "poor",
      description: "Time from first user interaction to browser response"
    },
    {
      name: "Cumulative Layout Shift",
      value: currentResults.cls,
      unit: "",
      threshold: 0.1,
      status: currentResults.cls <= 0.1 ? "good" : currentResults.cls <= 0.25 ? "needs-improvement" : "poor",
      description: "Measure of visual stability during page load"
    }
  ];

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBackground = (score) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 50) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'good': return 'text-green-600 bg-green-100';
      case 'needs-improvement': return 'text-yellow-600 bg-yellow-100';
      case 'poor': return 'text-red-600 bg-red-100';
      case 'critical': return 'text-red-600 bg-red-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'info': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleStartTest = () => {
    setIsRunning(true);
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Page Speed Analyzer</h1>
            <p className="text-gray-600">
              Analyze your website's performance and get actionable recommendations
            </p>
          </motion.div>
        </div>

        {/* Speed Test Controls */}
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
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Device</label>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setSelectedDevice('desktop')}
                  className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedDevice === 'desktop'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Monitor className="w-4 h-4 mr-2" />
                  Desktop
                </button>
                <button
                  onClick={() => setSelectedDevice('mobile')}
                  className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedDevice === 'mobile'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Mobile
                </button>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={handleStartTest}
                disabled={!url || isRunning}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Play className="w-5 h-5 mr-2" />
                {isRunning ? 'Testing...' : 'Analyze'}
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Performance Score</h2>
          <div className="flex justify-center items-center mb-6">
            <div className={`w-32 h-32 rounded-full flex items-center justify-center ${getScoreBackground(currentResults.score)}`}>
              <span className={`text-4xl font-bold ${getScoreColor(currentResults.score)}`}>
                {currentResults.score}
              </span>
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {currentResults.score >= 90 
              ? "Excellent! Your page loads fast and provides a great user experience."
              : currentResults.score >= 50
              ? "Good performance, but there are opportunities for improvement."
              : "Poor performance. Your page needs significant optimization to improve user experience."
            }
          </p>
        </motion.div>

        {/* Core Web Vitals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Core Web Vitals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreWebVitals.map((vital, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${
                  vital.status === 'good' ? 'bg-green-100' :
                  vital.status === 'needs-improvement' ? 'bg-yellow-100' :
                  'bg-red-100'
                }`}>
                  <span className={`text-xl font-bold ${
                    vital.status === 'good' ? 'text-green-600' :
                    vital.status === 'needs-improvement' ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {vital.value}{vital.unit}
                  </span>
                </div>
                <h4 className="font-medium text-gray-900 mb-1">{vital.name}</h4>
                <p className="text-xs text-gray-600">{vital.description}</p>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full mt-2 ${getStatusColor(vital.status)}`}>
                  {vital.status.replace('-', ' ')}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Opportunities and Diagnostics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                Opportunities
              </h3>
            </div>
            <div className="p-6 space-y-4">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{opportunity.title}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getImpactColor(opportunity.impact)}`}>
                        {opportunity.impact}
                      </span>
                      <span className="text-sm font-semibold text-green-600">
                        {opportunity.savings}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{opportunity.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Diagnostics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-blue-500" />
                Diagnostics
              </h3>
            </div>
            <div className="p-6 space-y-4">
              {diagnostics.map((diagnostic, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{diagnostic.title}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(diagnostic.status)}`}>
                        {diagnostic.status}
                      </span>
                      <span className="text-sm font-semibold text-gray-700">
                        {diagnostic.value}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{diagnostic.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Performance Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Performance Timeline</h3>
          
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 rounded-full"></div>
            
            <div className="space-y-6 ml-8">
              {[
                { time: '0.6s', event: 'Time to First Byte (TTFB)', status: 'good' },
                { time: '1.2s', event: 'First Contentful Paint (FCP)', status: 'good' },
                { time: '2.1s', event: 'Largest Contentful Paint (LCP)', status: 'good' },
                { time: '2.3s', event: 'Speed Index (SI)', status: 'needs-improvement' },
                { time: '45ms', event: 'First Input Delay (FID)', status: 'good' },
                { time: '0.08', event: 'Cumulative Layout Shift (CLS)', status: 'good' }
              ].map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`absolute -left-10 w-4 h-4 rounded-full border-2 border-white ${
                    item.status === 'good' ? 'bg-green-500' :
                    item.status === 'needs-improvement' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}></div>
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <div className="font-medium text-gray-900">{item.event}</div>
                      <div className="text-sm text-gray-600">{item.time}</div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                      {item.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Optimization Recommendations</h2>
          
          <div className="space-y-6">
            <div className="flex items-start p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-500 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">High Priority</h3>
                <p className="text-red-700 mb-3">
                  Eliminate render-blocking resources to improve First Contentful Paint by 1.2 seconds.
                </p>
                <ul className="list-disc list-inside text-red-600 space-y-1">
                  <li>Defer non-critical CSS and JavaScript</li>
                  <li>Inline critical CSS in the HTML head</li>
                  <li>Use async or defer attributes for scripts</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Medium Priority</h3>
                <p className="text-yellow-700 mb-3">
                  Optimize images to reduce payload size and improve loading times.
                </p>
                <ul className="list-disc list-inside text-yellow-600 space-y-1">
                  <li>Serve images in WebP or AVIF format</li>
                  <li>Implement responsive images with srcset</li>
                  <li>Use lazy loading for below-the-fold images</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <CheckCircle className="w-6 h-6 text-blue-500 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Low Priority</h3>
                <p className="text-blue-700 mb-3">
                  Fine-tune existing optimizations for marginal performance gains.
                </p>
                <ul className="list-disc list-inside text-blue-600 space-y-1">
                  <li>Minify CSS and JavaScript files</li>
                  <li>Enable browser caching</li>
                  <li>Optimize font loading strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PageSpeedPage;