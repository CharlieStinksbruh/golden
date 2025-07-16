import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Eye, 
  Star, 
  MapPin, 
  Image, 
  Video, 
  ShoppingBag, 
  Calendar,
  Globe,
  Smartphone,
  Monitor,
  Download,
  Play,
  BarChart3,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Target,
  Filter
} from 'lucide-react';

const SERPPage = () => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('us');
  const [device, setDevice] = useState('desktop');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const serpFeatures = [
    {
      name: 'Featured Snippet',
      present: true,
      position: 0,
      type: 'paragraph',
      url: 'https://example.com/seo-guide',
      title: 'Complete SEO Guide for Beginners',
      description: 'SEO (Search Engine Optimization) is the practice of optimizing websites to rank higher in search engine results...'
    },
    {
      name: 'People Also Ask',
      present: true,
      position: 4,
      questions: [
        'What is SEO and how does it work?',
        'How long does SEO take to work?',
        'What are the best SEO tools?',
        'How much does SEO cost?'
      ]
    },
    {
      name: 'Local Pack',
      present: false,
      position: null
    },
    {
      name: 'Image Pack',
      present: true,
      position: 6,
      count: 8
    },
    {
      name: 'Video Results',
      present: true,
      position: 8,
      count: 3
    },
    {
      name: 'Shopping Results',
      present: false,
      position: null
    },
    {
      name: 'Knowledge Panel',
      present: false,
      position: null
    },
    {
      name: 'Site Links',
      present: true,
      position: 1,
      url: 'https://goldchicken.com'
    }
  ];

  const organicResults = [
    {
      position: 1,
      title: 'Gold Chicken - Advanced SEO Tool Platform',
      url: 'https://goldchicken.com',
      description: 'The most powerful cloud-based SEO tool that makes Screaming Frog look outdated. Analyze, optimize, and dominate search rankings.',
      sitelinks: [
        { title: 'Features', url: '/features' },
        { title: 'Pricing', url: '/pricing' },
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Support', url: '/support' }
      ],
      domain: 'goldchicken.com',
      favicon: '🐔'
    },
    {
      position: 2,
      title: 'SEO Tools Comparison: Best Tools for 2024',
      url: 'https://seoexpert.com/tools-comparison',
      description: 'Compare the top SEO tools including Ahrefs, SEMrush, and Gold Chicken. Find the best tool for your needs and budget.',
      domain: 'seoexpert.com',
      favicon: '🔍'
    },
    {
      position: 3,
      title: 'How to Choose the Right SEO Tool',
      url: 'https://marketingblog.com/seo-tool-guide',
      description: 'A comprehensive guide to selecting the perfect SEO tool for your business. Learn about features, pricing, and more.',
      domain: 'marketingblog.com',
      favicon: '📊'
    }
  ];

  const competitorAnalysis = [
    {
      domain: 'goldchicken.com',
      position: 1,
      title: 'Gold Chicken - Advanced SEO Tool Platform',
      features: ['Featured Snippet', 'Site Links'],
      visibility: 95
    },
    {
      domain: 'ahrefs.com',
      position: 4,
      title: 'Ahrefs - SEO Tools & Resources',
      features: ['Image Pack'],
      visibility: 78
    },
    {
      domain: 'semrush.com',
      position: 7,
      title: 'SEMrush - All-in-one Marketing Toolkit',
      features: ['Video Results'],
      visibility: 65
    },
    {
      domain: 'moz.com',
      position: 12,
      title: 'Moz - SEO Software and Data',
      features: [],
      visibility: 42
    }
  ];

  const serpHistory = [
    { date: '2024-01-20', position: 1, features: 3, visibility: 95 },
    { date: '2024-01-19', position: 2, features: 2, visibility: 87 },
    { date: '2024-01-18', position: 1, features: 3, visibility: 95 },
    { date: '2024-01-17', position: 1, features: 2, features: 89 },
    { date: '2024-01-16', position: 3, features: 1, visibility: 72 }
  ];

  const getFeatureIcon = (featureName) => {
    switch (featureName) {
      case 'Featured Snippet': return <Star className="w-4 h-4 text-yellow-500" />;
      case 'People Also Ask': return <Search className="w-4 h-4 text-blue-500" />;
      case 'Local Pack': return <MapPin className="w-4 h-4 text-red-500" />;
      case 'Image Pack': return <Image className="w-4 h-4 text-green-500" />;
      case 'Video Results': return <Video className="w-4 h-4 text-purple-500" />;
      case 'Shopping Results': return <ShoppingBag className="w-4 h-4 text-orange-500" />;
      case 'Knowledge Panel': return <Eye className="w-4 h-4 text-indigo-500" />;
      case 'Site Links': return <Globe className="w-4 h-4 text-gray-500" />;
      default: return <Search className="w-4 h-4 text-gray-500" />;
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">SERP Analysis</h1>
            <p className="text-gray-600">
              Analyze search engine results pages and track SERP features
            </p>
          </motion.div>
        </div>

        {/* Analysis Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-end">
            <div className="lg:col-span-2">
              <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 mb-2">
                Keyword
              </label>
              <input
                type="text"
                id="keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Enter keyword to analyze"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Device</label>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setDevice('desktop')}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    device === 'desktop'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Monitor className="w-4 h-4 mr-1" />
                  Desktop
                </button>
                <button
                  onClick={() => setDevice('mobile')}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    device === 'mobile'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Smartphone className="w-4 h-4 mr-1" />
                  Mobile
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mt-4">
            <div className="flex gap-3">
              <button
                onClick={handleAnalyze}
                disabled={!keyword || isAnalyzing}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Play className="w-5 h-5 mr-2" />
                {isAnalyzing ? 'Analyzing...' : 'Analyze SERP'}
              </button>
              <button className="flex items-center px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Export
              </button>
            </div>
          </div>
        </motion.div>

        {/* SERP Features Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">SERP Features Present</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {serpFeatures.map((feature, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  feature.present 
                    ? 'border-green-200 bg-green-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getFeatureIcon(feature.name)}
                    <span className="font-medium text-gray-900">{feature.name}</span>
                  </div>
                  {feature.present ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                  )}
                </div>
                
                {feature.present && (
                  <div className="text-sm text-gray-600">
                    {feature.position !== null && (
                      <div>Position: {feature.position === 0 ? 'Top' : feature.position}</div>
                    )}
                    {feature.count && <div>Count: {feature.count}</div>}
                    {feature.questions && <div>Questions: {feature.questions.length}</div>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured Snippet Details */}
        {serpFeatures.find(f => f.name === 'Featured Snippet' && f.present) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              Featured Snippet Analysis
            </h3>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🐔</div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">
                    Complete SEO Guide for Beginners
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    SEO (Search Engine Optimization) is the practice of optimizing websites to rank higher in search engine results...
                  </p>
                  <div className="text-xs text-gray-500">
                    https://example.com/seo-guide
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h5 className="font-medium text-blue-800 mb-2">Optimization Opportunity</h5>
              <p className="text-sm text-blue-700">
                Your content could potentially capture this featured snippet by providing a more comprehensive answer 
                with better structure and relevant keywords.
              </p>
            </div>
          </motion.div>
        )}

        {/* Organic Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Organic Results</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {organicResults.map((result, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-lg font-bold text-orange-600 min-w-[24px]">
                      {result.position}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-lg">{result.favicon}</span>
                        <h4 className="text-lg font-medium text-blue-600 hover:underline cursor-pointer">
                          {result.title}
                        </h4>
                      </div>
                      
                      <div className="text-sm text-green-700 mb-2">{result.url}</div>
                      <p className="text-sm text-gray-600 mb-3">{result.description}</p>
                      
                      {result.sitelinks && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {result.sitelinks.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href="#"
                              className="text-sm text-blue-600 hover:underline"
                            >
                              {link.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Competitor Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Competitor SERP Analysis</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Domain</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SERP Features</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Visibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {competitorAnalysis.map((competitor, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{competitor.domain}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        competitor.position <= 3 ? 'bg-green-100 text-green-800' :
                        competitor.position <= 10 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        #{competitor.position}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs truncate">
                        {competitor.title}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {competitor.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                          >
                            {feature}
                          </span>
                        ))}
                        {competitor.features.length === 0 && (
                          <span className="text-xs text-gray-500">None</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full"
                            style={{ width: `${competitor.visibility}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{competitor.visibility}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* SERP History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">SERP History</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Features</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Visibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {serpHistory.map((entry, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(entry.date).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        entry.position <= 3 ? 'bg-green-100 text-green-800' :
                        entry.position <= 10 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        #{entry.position}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {entry.features} features
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {entry.visibility}%
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

export default SERPPage;