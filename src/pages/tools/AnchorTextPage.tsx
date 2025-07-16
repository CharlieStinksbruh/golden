import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Link as LinkIcon, 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Search,
  Filter,
  Download,
  Eye,
  Target,
  Globe,
  Users,
  Clock
} from 'lucide-react';

const AnchorTextPage = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const anchorTextData = [
    {
      anchorText: 'Gold Chicken',
      type: 'branded',
      count: 245,
      percentage: 35.2,
      domains: 89,
      firstSeen: '2023-08-15',
      lastSeen: '2024-01-20',
      trend: 'up',
      risk: 'low'
    },
    {
      anchorText: 'SEO tools',
      type: 'exact-match',
      count: 156,
      percentage: 22.4,
      domains: 67,
      firstSeen: '2023-09-10',
      lastSeen: '2024-01-19',
      trend: 'up',
      risk: 'medium'
    },
    {
      anchorText: 'best SEO software',
      type: 'partial-match',
      count: 89,
      percentage: 12.8,
      domains: 45,
      firstSeen: '2023-10-05',
      lastSeen: '2024-01-18',
      trend: 'stable',
      risk: 'medium'
    },
    {
      anchorText: 'click here',
      type: 'generic',
      count: 67,
      percentage: 9.6,
      domains: 34,
      firstSeen: '2023-07-20',
      lastSeen: '2024-01-17',
      trend: 'down',
      risk: 'low'
    },
    {
      anchorText: 'https://goldchicken.com',
      type: 'naked-url',
      count: 78,
      percentage: 11.2,
      domains: 52,
      firstSeen: '2023-06-12',
      lastSeen: '2024-01-16',
      trend: 'up',
      risk: 'low'
    },
    {
      anchorText: 'cheap SEO tools',
      type: 'exact-match',
      count: 34,
      percentage: 4.9,
      domains: 23,
      firstSeen: '2023-11-08',
      lastSeen: '2024-01-15',
      trend: 'up',
      risk: 'high'
    },
    {
      anchorText: 'website analysis tool',
      type: 'partial-match',
      count: 23,
      percentage: 3.3,
      domains: 18,
      firstSeen: '2023-12-01',
      lastSeen: '2024-01-14',
      trend: 'stable',
      risk: 'low'
    }
  ];

  const anchorDistribution = [
    { type: 'Branded', count: 245, percentage: 35.2, color: '#10b981', recommended: '30-40%' },
    { type: 'Exact Match', count: 190, percentage: 27.3, color: '#f59e0b', recommended: '5-10%' },
    { type: 'Partial Match', count: 112, percentage: 16.1, color: '#3b82f6', recommended: '15-25%' },
    { type: 'Generic', count: 89, percentage: 12.8, color: '#8b5cf6', recommended: '20-30%' },
    { type: 'Naked URL', count: 78, percentage: 11.2, color: '#ef4444', recommended: '10-20%' },
    { type: 'Image', count: 12, percentage: 1.7, color: '#6b7280', recommended: '5-10%' }
  ];

  const competitorComparison = [
    {
      domain: 'goldchicken.com',
      branded: 35.2,
      exactMatch: 27.3,
      partialMatch: 16.1,
      generic: 12.8,
      nakedUrl: 11.2,
      riskScore: 'low'
    },
    {
      domain: 'competitor1.com',
      branded: 28.5,
      exactMatch: 45.2,
      partialMatch: 12.3,
      generic: 8.9,
      nakedUrl: 5.1,
      riskScore: 'high'
    },
    {
      domain: 'competitor2.com',
      branded: 42.1,
      exactMatch: 15.6,
      partialMatch: 18.7,
      generic: 14.2,
      nakedUrl: 9.4,
      riskScore: 'low'
    },
    {
      domain: 'competitor3.com',
      branded: 31.8,
      exactMatch: 32.4,
      partialMatch: 15.9,
      generic: 11.3,
      nakedUrl: 8.6,
      riskScore: 'medium'
    }
  ];

  const riskAnalysis = [
    {
      risk: 'High Risk Anchors',
      count: 34,
      percentage: 4.9,
      description: 'Over-optimized exact match anchors that could trigger penalties',
      examples: ['cheap SEO tools', 'best SEO software 2024'],
      recommendation: 'Diversify with more branded and generic anchors'
    },
    {
      risk: 'Suspicious Patterns',
      count: 12,
      percentage: 1.7,
      description: 'Unusual anchor text patterns that may indicate manipulation',
      examples: ['SEO tools review', 'top SEO platform'],
      recommendation: 'Monitor closely and consider disavowing if from low-quality sites'
    },
    {
      risk: 'Keyword Stuffing',
      count: 8,
      percentage: 1.1,
      description: 'Anchors with excessive keyword repetition',
      examples: ['SEO SEO tools best SEO'],
      recommendation: 'Request anchor text changes or disavow these links'
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'branded': return 'text-green-600 bg-green-100';
      case 'exact-match': return 'text-red-600 bg-red-100';
      case 'partial-match': return 'text-blue-600 bg-blue-100';
      case 'generic': return 'text-purple-600 bg-purple-100';
      case 'naked-url': return 'text-gray-600 bg-gray-100';
      case 'image': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-500" />;
      case 'stable': return <div className="w-4 h-4 bg-gray-400 rounded-full"></div>;
      default: return <div className="w-4 h-4 bg-gray-400 rounded-full"></div>;
    }
  };

  const filteredData = selectedFilter === 'all' 
    ? anchorTextData 
    : anchorTextData.filter(item => item.type === selectedFilter);

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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Anchor Text Analysis</h1>
            <p className="text-gray-600">
              Analyze your backlink anchor text distribution and identify potential risks
            </p>
          </motion.div>
        </div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Period
              </label>
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
            </div>
            
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Type
              </label>
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="all">All Types</option>
                <option value="branded">Branded</option>
                <option value="exact-match">Exact Match</option>
                <option value="partial-match">Partial Match</option>
                <option value="generic">Generic</option>
                <option value="naked-url">Naked URL</option>
              </select>
            </div>
            
            <div className="flex gap-3">
              <button className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 transition-all duration-200">
                <Search className="w-5 h-5 mr-2" />
                Analyze
              </button>
              <button className="flex items-center px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Export
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: <LinkIcon className="w-6 h-6 text-blue-500" />, label: "Total Anchors", value: "696", change: "+23" },
            { icon: <Target className="w-6 h-6 text-green-500" />, label: "Unique Anchors", value: "234", change: "+12" },
            { icon: <Globe className="w-6 h-6 text-purple-500" />, label: "Referring Domains", value: "156", change: "+8" },
            { icon: <AlertTriangle className="w-6 h-6 text-red-500" />, label: "Risk Score", value: "Low", change: "Stable" }
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
                <div className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 
                  stat.change === 'Stable' ? 'text-blue-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Anchor Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Anchor Text Distribution</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Current Distribution</h4>
              <div className="space-y-4">
                {anchorDistribution.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm font-medium text-gray-900">{item.type}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm font-semibold text-gray-900">{item.count}</div>
                        <div className="text-xs text-gray-600">{item.percentage}%</div>
                      </div>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full"
                          style={{ 
                            width: `${item.percentage}%`,
                            backgroundColor: item.color
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Recommended Distribution</h4>
              <div className="space-y-4">
                {anchorDistribution.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm font-medium text-gray-900">{item.type}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {item.recommended}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Anchor Text Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Anchor Text Details</h3>
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Filter & Sort</span>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Anchor Text</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Count</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Percentage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Domains</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trend</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Risk</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredData.map((anchor, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900 max-w-xs truncate">
                        {anchor.anchorText}
                      </div>
                      <div className="text-sm text-gray-500">
                        First seen: {new Date(anchor.firstSeen).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(anchor.type)}`}>
                        {anchor.type.replace('-', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {anchor.count}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full"
                            style={{ width: `${anchor.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{anchor.percentage}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {anchor.domains}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getTrendIcon(anchor.trend)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRiskColor(anchor.risk)}`}>
                        {anchor.risk}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-orange-600 hover:text-orange-900">
                          <BarChart3 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Risk Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Risk Analysis</h3>
          <div className="space-y-6">
            {riskAnalysis.map((risk, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <h4 className="font-medium text-gray-900">{risk.risk}</h4>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">{risk.count}</div>
                    <div className="text-sm text-gray-600">{risk.percentage}%</div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{risk.description}</p>
                
                <div className="mb-3">
                  <div className="text-sm font-medium text-gray-700 mb-1">Examples:</div>
                  <div className="flex flex-wrap gap-2">
                    {risk.examples.map((example, exampleIndex) => (
                      <span key={exampleIndex} className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <div className="text-sm font-medium text-blue-800 mb-1">Recommendation:</div>
                  <div className="text-sm text-blue-700">{risk.recommendation}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Competitor Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Competitor Anchor Text Comparison</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Domain</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Branded</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Exact Match</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Partial Match</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Generic</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Naked URL</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Risk Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {competitorComparison.map((competitor, index) => (
                  <tr key={index} className={`hover:bg-gray-50 ${index === 0 ? 'bg-orange-50' : ''}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{competitor.domain}</div>
                      {index === 0 && <div className="text-sm text-orange-600">Your site</div>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {competitor.branded}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {competitor.exactMatch}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {competitor.partialMatch}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {competitor.generic}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {competitor.nakedUrl}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRiskColor(competitor.riskScore)}`}>
                        {competitor.riskScore}
                      </span>
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

export default AnchorTextPage;