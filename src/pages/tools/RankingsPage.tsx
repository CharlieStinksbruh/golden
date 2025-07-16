import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Search, 
  BarChart3, 
  Globe, 
  Calendar,
  Filter,
  Download,
  Plus,
  Eye,
  ArrowUp,
  ArrowDown,
  Minus,
  MapPin,
  Smartphone,
  Monitor,
  Clock,
  Star,
  AlertTriangle
} from 'lucide-react';

const RankingsPage = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedLocation, setSelectedLocation] = useState('us');
  const [selectedDevice, setSelectedDevice] = useState('all');

  const rankingData = [
    {
      keyword: "SEO tools",
      currentPosition: 3,
      previousPosition: 5,
      change: 2,
      volume: 49500,
      difficulty: 65,
      url: "/seo-tools",
      device: "desktop",
      location: "United States",
      lastUpdated: "2 hours ago",
      featured: true
    },
    {
      keyword: "website audit",
      currentPosition: 7,
      previousPosition: 6,
      change: -1,
      volume: 18100,
      difficulty: 42,
      url: "/website-audit",
      device: "mobile",
      location: "United States",
      lastUpdated: "4 hours ago",
      featured: false
    },
    {
      keyword: "keyword research",
      currentPosition: 12,
      previousPosition: 15,
      change: 3,
      volume: 27400,
      difficulty: 58,
      url: "/keyword-research",
      device: "desktop",
      location: "United States",
      lastUpdated: "6 hours ago",
      featured: false
    },
    {
      keyword: "backlink analysis",
      currentPosition: 5,
      previousPosition: 4,
      change: -1,
      volume: 12300,
      difficulty: 71,
      url: "/backlink-analysis",
      device: "mobile",
      location: "United States",
      lastUpdated: "1 hour ago",
      featured: true
    },
    {
      keyword: "technical SEO",
      currentPosition: 9,
      previousPosition: 11,
      change: 2,
      volume: 8900,
      difficulty: 55,
      url: "/technical-seo",
      device: "desktop",
      location: "United States",
      lastUpdated: "3 hours ago",
      featured: false
    }
  ];

  const positionDistribution = [
    { range: "1-3", count: 45, percentage: 15 },
    { range: "4-10", count: 120, percentage: 40 },
    { range: "11-20", count: 90, percentage: 30 },
    { range: "21-50", count: 30, percentage: 10 },
    { range: "51-100", count: 15, percentage: 5 }
  ];

  const competitorData = [
    { name: "Your Site", position: 3, change: 2, color: "#f97316" },
    { name: "Competitor A", position: 1, change: 0, color: "#ef4444" },
    { name: "Competitor B", position: 2, change: -1, color: "#3b82f6" },
    { name: "Competitor C", position: 4, change: 1, color: "#10b981" },
    { name: "Competitor D", position: 5, change: -2, color: "#8b5cf6" }
  ];

  const topGainers = [
    { keyword: "SEO audit tool", change: 15, from: 23, to: 8 },
    { keyword: "website crawler", change: 12, from: 19, to: 7 },
    { keyword: "keyword tracker", change: 8, from: 16, to: 8 },
    { keyword: "backlink checker", change: 7, from: 14, to: 7 },
    { keyword: "rank tracker", change: 6, from: 13, to: 7 }
  ];

  const topLosers = [
    { keyword: "free SEO tools", change: -8, from: 4, to: 12 },
    { keyword: "SEO analysis", change: -5, from: 6, to: 11 },
    { keyword: "website optimizer", change: -4, from: 8, to: 12 },
    { keyword: "SEO checker", change: -3, from: 9, to: 12 },
    { keyword: "site audit", change: -3, from: 10, to: 13 }
  ];

  const getPositionColor = (position) => {
    if (position <= 3) return 'text-green-600 bg-green-100';
    if (position <= 10) return 'text-yellow-600 bg-yellow-100';
    if (position <= 20) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const getChangeIcon = (change) => {
    if (change > 0) return <ArrowUp className="w-4 h-4 text-green-500" />;
    if (change < 0) return <ArrowDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-500" />;
  };

  const getChangeColor = (change) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getDifficultyColor = (difficulty) => {
    if (difficulty < 30) return 'text-green-600 bg-green-100';
    if (difficulty < 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Rank Tracking</h1>
            <p className="text-gray-600">
              Monitor your keyword rankings and track performance over time
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
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
                <option value="de">Germany</option>
              </select>
            </div>
            
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Device
              </label>
              <select
                value={selectedDevice}
                onChange={(e) => setSelectedDevice(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="all">All Devices</option>
                <option value="desktop">Desktop</option>
                <option value="mobile">Mobile</option>
              </select>
            </div>
            
            <div className="flex gap-3">
              <button className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 transition-all duration-200">
                <Plus className="w-5 h-5 mr-2" />
                Add Keywords
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
            { icon: <Target className="w-6 h-6 text-blue-500" />, label: "Tracked Keywords", value: "1,247", change: "+24" },
            { icon: <TrendingUp className="w-6 h-6 text-green-500" />, label: "Avg. Position", value: "8.3", change: "-2.1" },
            { icon: <Eye className="w-6 h-6 text-purple-500" />, label: "Top 10 Rankings", value: "165", change: "+12" },
            { icon: <BarChart3 className="w-6 h-6 text-orange-500" />, label: "Visibility Score", value: "76%", change: "+5%" }
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
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Position Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Position Distribution</h3>
          <div className="space-y-4">
            {positionDistribution.map((range, index) => (
              <div key={index} className="flex items-center">
                <div className="w-16 text-sm font-medium text-gray-700">
                  {range.range}
                </div>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 h-3 rounded-full"
                      style={{ width: `${range.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-16 text-sm text-gray-600 text-right">
                  {range.count} keywords
                </div>
                <div className="w-12 text-sm text-gray-500 text-right">
                  {range.percentage}%
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Gainers and Losers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Top Gainers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-200 bg-green-50">
              <h3 className="text-lg font-semibold text-green-800 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Top Gainers
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topGainers.map((keyword, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{keyword.keyword}</div>
                      <div className="text-sm text-gray-600">
                        {keyword.from} → {keyword.to}
                      </div>
                    </div>
                    <div className="flex items-center text-green-600 font-semibold">
                      <ArrowUp className="w-4 h-4 mr-1" />
                      +{keyword.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Top Losers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-200 bg-red-50">
              <h3 className="text-lg font-semibold text-red-800 flex items-center">
                <TrendingDown className="w-5 h-5 mr-2" />
                Top Losers
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topLosers.map((keyword, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{keyword.keyword}</div>
                      <div className="text-sm text-gray-600">
                        {keyword.from} → {keyword.to}
                      </div>
                    </div>
                    <div className="flex items-center text-red-600 font-semibold">
                      <ArrowDown className="w-4 h-4 mr-1" />
                      {keyword.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Competitor Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Competitor Comparison</h3>
          <div className="space-y-4">
            {competitorData.map((competitor, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: competitor.color }}
                  ></div>
                  <span className="font-medium text-gray-900">{competitor.name}</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">#{competitor.position}</div>
                    <div className="text-sm text-gray-600">Position</div>
                  </div>
                  
                  <div className={`flex items-center ${getChangeColor(competitor.change)}`}>
                    {getChangeIcon(competitor.change)}
                    <span className="ml-1 font-medium">
                      {competitor.change === 0 ? 'No change' : Math.abs(competitor.change)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Keywords Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Keyword Rankings</h3>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Keyword
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Change
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Volume
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Difficulty
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    URL
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Updated
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rankingData.map((keyword, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900 flex items-center">
                            {keyword.keyword}
                            {keyword.featured && (
                              <Star className="w-4 h-4 text-yellow-500 ml-2" />
                            )}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            {keyword.device === 'mobile' ? (
                              <Smartphone className="w-3 h-3 mr-1" />
                            ) : (
                              <Monitor className="w-3 h-3 mr-1" />
                            )}
                            {keyword.device}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPositionColor(keyword.currentPosition)}`}>
                        #{keyword.currentPosition}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`flex items-center ${getChangeColor(keyword.change)}`}>
                        {getChangeIcon(keyword.change)}
                        <span className="ml-1 text-sm font-medium">
                          {keyword.change === 0 ? '0' : Math.abs(keyword.change)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {keyword.volume.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(keyword.difficulty)}`}>
                        {keyword.difficulty}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {keyword.url}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {keyword.lastUpdated}
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

export default RankingsPage;