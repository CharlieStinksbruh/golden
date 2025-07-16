import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, Tablet, CheckCircle, XCircle, AlertTriangle, Eye, Touchpad as Touch, Wifi, Battery, Signal, Globe, Search, Download, Play, BarChart3, Settings, Zap, Clock, Target } from 'lucide-react';

const MobileSEOPage = () => {
  const [url, setUrl] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState('mobile');

  const mobileResults = {
    mobileFriendly: true,
    score: 92,
    viewport: true,
    touchElements: 2,
    readableText: true,
    pageSpeed: 78,
    usability: 94
  };

  const deviceTests = [
    {
      device: 'iPhone 14 Pro',
      screen: '393x852',
      status: 'passed',
      issues: 1,
      score: 94
    },
    {
      device: 'Samsung Galaxy S23',
      screen: '360x780',
      status: 'passed',
      issues: 2,
      score: 91
    },
    {
      device: 'iPad Pro',
      screen: '834x1194',
      status: 'passed',
      issues: 0,
      score: 98
    },
    {
      device: 'Pixel 7',
      screen: '412x915',
      status: 'warning',
      issues: 3,
      score: 87
    }
  ];

  const usabilityIssues = [
    {
      type: 'error',
      title: 'Touch elements too close',
      count: 2,
      description: 'Some touch elements are too close to each other',
      locations: ['Navigation menu', 'Footer links'],
      fix: 'Increase spacing between clickable elements to at least 48px'
    },
    {
      type: 'warning',
      title: 'Small font size',
      count: 1,
      description: 'Text is too small to read comfortably on mobile',
      locations: ['Footer copyright text'],
      fix: 'Use minimum 16px font size for body text'
    },
    {
      type: 'info',
      title: 'Horizontal scrolling',
      count: 1,
      description: 'Content extends beyond viewport width',
      locations: ['Product comparison table'],
      fix: 'Make tables responsive or use horizontal scroll containers'
    }
  ];

  const coreWebVitals = [
    {
      name: 'Largest Contentful Paint',
      mobile: 3.2,
      desktop: 2.1,
      threshold: 2.5,
      unit: 's'
    },
    {
      name: 'First Input Delay',
      mobile: 78,
      desktop: 45,
      threshold: 100,
      unit: 'ms'
    },
    {
      name: 'Cumulative Layout Shift',
      mobile: 0.12,
      desktop: 0.08,
      threshold: 0.1,
      unit: ''
    }
  ];

  const mobileFeatures = [
    {
      name: 'Mobile-Friendly Test',
      status: mobileResults.mobileFriendly ? 'passed' : 'failed',
      description: 'Page is easy to use on a mobile device'
    },
    {
      name: 'Viewport Configuration',
      status: mobileResults.viewport ? 'passed' : 'failed',
      description: 'Page has a viewport meta tag with proper configuration'
    },
    {
      name: 'Readable Text',
      status: mobileResults.readableText ? 'passed' : 'failed',
      description: 'Text is readable without zooming'
    },
    {
      name: 'Touch Elements',
      status: mobileResults.touchElements === 0 ? 'passed' : 'warning',
      description: `${mobileResults.touchElements} touch elements are too close together`
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'passed': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'failed': return <XCircle className="w-5 h-5 text-red-500" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default: return <AlertTriangle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'passed': return 'text-green-600 bg-green-100';
      case 'failed': return 'text-red-600 bg-red-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Mobile SEO Analyzer</h1>
            <p className="text-gray-600">
              Test your website's mobile-friendliness and mobile SEO performance
            </p>
          </motion.div>
        </div>

        {/* Test Controls */}
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
                onClick={handleStartTest}
                disabled={!url || isRunning}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Play className="w-5 h-5 mr-2" />
                {isRunning ? 'Testing...' : 'Test Mobile'}
              </button>
              <button className="flex items-center px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Export
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mobile-Friendly Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
              mobileResults.mobileFriendly ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {mobileResults.mobileFriendly ? (
                <CheckCircle className="w-10 h-10 text-green-600" />
              ) : (
                <XCircle className="w-10 h-10 text-red-600" />
              )}
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {mobileResults.mobileFriendly ? 'Mobile-Friendly' : 'Not Mobile-Friendly'}
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            {mobileResults.mobileFriendly 
              ? "Great! Your page is mobile-friendly and provides a good user experience on mobile devices."
              : "Your page has mobile usability issues that may affect user experience on mobile devices."
            }
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">{mobileResults.score}</div>
              <div className="text-sm text-gray-600">Mobile Score</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">{mobileResults.usability}</div>
              <div className="text-sm text-gray-600">Usability Score</div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-600">{mobileResults.pageSpeed}</div>
              <div className="text-sm text-gray-600">Speed Score</div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Features Check */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Mobile Features Check</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mobileFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
                {getStatusIcon(feature.status)}
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{feature.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(feature.status)}`}>
                  {feature.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Device Testing Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Device Testing Results</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Device</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Screen Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Issues</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {deviceTests.map((test, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Smartphone className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-900">{test.device}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {test.screen}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(test.status)}`}>
                        {test.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {test.issues} issues
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-semibold ${getScoreColor(test.score)}`}>
                        {test.score}/100
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Core Web Vitals Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Core Web Vitals: Mobile vs Desktop</h3>
          <div className="space-y-6">
            {coreWebVitals.map((vital, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{vital.name}</h4>
                  <span className="text-sm text-gray-600">Threshold: {vital.threshold}{vital.unit}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className={`text-2xl font-bold mb-1 ${
                      vital.mobile <= vital.threshold ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {vital.mobile}{vital.unit}
                    </div>
                    <div className="text-sm text-gray-600 flex items-center justify-center">
                      <Smartphone className="w-4 h-4 mr-1" />
                      Mobile
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-2xl font-bold mb-1 ${
                      vital.desktop <= vital.threshold ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {vital.desktop}{vital.unit}
                    </div>
                    <div className="text-sm text-gray-600 flex items-center justify-center">
                      <Monitor className="w-4 h-4 mr-1" />
                      Desktop
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Usability Issues */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Mobile Usability Issues</h3>
          <div className="space-y-4">
            {usabilityIssues.map((issue, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className={`p-1 rounded-full ${
                    issue.type === 'error' ? 'bg-red-100' :
                    issue.type === 'warning' ? 'bg-yellow-100' :
                    'bg-blue-100'
                  }`}>
                    {issue.type === 'error' && <XCircle className="w-4 h-4 text-red-500" />}
                    {issue.type === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-500" />}
                    {issue.type === 'info' && <Eye className="w-4 h-4 text-blue-500" />}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{issue.title}</h4>
                      <span className="text-sm text-gray-600">{issue.count} instances</span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{issue.description}</p>
                    
                    <div className="mb-3">
                      <div className="text-sm font-medium text-gray-700 mb-1">Affected locations:</div>
                      <div className="flex flex-wrap gap-2">
                        {issue.locations.map((location, locationIndex) => (
                          <span key={locationIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded p-3">
                      <div className="text-sm font-medium text-blue-800 mb-1">Recommended fix:</div>
                      <div className="text-sm text-blue-700">{issue.fix}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile SEO Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mobile SEO Recommendations</h2>
          
          <div className="space-y-6">
            <div className="flex items-start p-4 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">What's Working Well</h3>
                <ul className="list-disc list-inside text-green-700 space-y-1">
                  <li>Page is mobile-friendly and passes Google's mobile-friendly test</li>
                  <li>Viewport meta tag is properly configured</li>
                  <li>Text is readable without zooming</li>
                  <li>Good mobile usability score of 94/100</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Areas for Improvement</h3>
                <ul className="list-disc list-inside text-yellow-700 space-y-1">
                  <li>Increase spacing between touch elements (minimum 48px)</li>
                  <li>Improve mobile page speed (currently 78/100)</li>
                  <li>Optimize images for mobile devices</li>
                  <li>Consider implementing AMP for faster mobile loading</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <Target className="w-6 h-6 text-blue-500 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Advanced Mobile SEO</h3>
                <ul className="list-disc list-inside text-blue-700 space-y-1">
                  <li>Implement structured data for mobile-specific features</li>
                  <li>Optimize for voice search queries</li>
                  <li>Consider Progressive Web App (PWA) features</li>
                  <li>Test with Google's Mobile-Friendly Test tool regularly</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileSEOPage;