import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as LinkIcon, TrendingUp, TrendingDown, Shield, AlertTriangle, Eye, Download, Search } from 'lucide-react';

const BacklinkPage = () => {
  const [domain, setDomain] = useState('');

  const backlinks = [
    {
      url: "https://techcrunch.com/seo-tools-review",
      domain: "techcrunch.com",
      dr: 92,
      traffic: 45000,
      anchor: "best SEO tools",
      type: "dofollow",
      status: "live",
      firstSeen: "2024-01-15",
      lastSeen: "2024-01-20"
    },
    {
      url: "https://searchengineland.com/gold-chicken-review",
      domain: "searchengineland.com",
      dr: 88,
      traffic: 32000,
      anchor: "Gold Chicken",
      type: "dofollow",
      status: "live",
      firstSeen: "2024-01-10",
      lastSeen: "2024-01-19"
    },
    {
      url: "https://moz.com/blog/seo-tool-comparison",
      domain: "moz.com",
      dr: 91,
      traffic: 28000,
      anchor: "SEO analysis tool",
      type: "dofollow",
      status: "live",
      firstSeen: "2024-01-08",
      lastSeen: "2024-01-18"
    },
    {
      url: "https://example-blog.com/seo-tools",
      domain: "example-blog.com",
      dr: 45,
      traffic: 5200,
      anchor: "click here",
      type: "nofollow",
      status: "lost",
      firstSeen: "2023-12-20",
      lastSeen: "2024-01-05"
    },
    {
      url: "https://spammy-site.com/links",
      domain: "spammy-site.com",
      dr: 12,
      traffic: 100,
      anchor: "cheap SEO tools",
      type: "dofollow",
      status: "toxic",
      firstSeen: "2024-01-12",
      lastSeen: "2024-01-17"
    }
  ];

  const referringDomains = [
    {
      domain: "techcrunch.com",
      dr: 92,
      backlinks: 3,
      traffic: 45000,
      type: "News",
      status: "strong"
    },
    {
      domain: "searchengineland.com",
      dr: 88,
      backlinks: 2,
      traffic: 32000,
      type: "Industry",
      status: "strong"
    },
    {
      domain: "moz.com",
      dr: 91,
      backlinks: 1,
      traffic: 28000,
      type: "Industry",
      status: "strong"
    },
    {
      domain: "example-blog.com",
      dr: 45,
      backlinks: 1,
      traffic: 5200,
      type: "Blog",
      status: "moderate"
    },
    {
      domain: "spammy-site.com",
      dr: 12,
      backlinks: 1,
      traffic: 100,
      type: "Spam",
      status: "toxic"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'live': return 'text-green-600 bg-green-100';
      case 'lost': return 'text-red-600 bg-red-100';
      case 'toxic': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeColor = (type) => {
    return type === 'dofollow' ? 'text-green-600 bg-green-100' : 'text-gray-600 bg-gray-100';
  };

  const getDRColor = (dr) => {
    if (dr >= 80) return 'text-green-600';
    if (dr >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getDomainStatusColor = (status) => {
    switch (status) {
      case 'strong': return 'text-green-600 bg-green-100';
      case 'moderate': return 'text-yellow-600 bg-yellow-100';
      case 'toxic': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Backlink Analysis</h1>
            <p className="text-gray-600">
              Monitor and analyze your backlink profile with our comprehensive database
            </p>
          </motion.div>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            <div className="flex-1">
              <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-2">
                Analyze Domain
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="Enter domain (e.g., example.com)"
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
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
            { icon: <LinkIcon className="w-6 h-6 text-blue-500" />, label: "Total Backlinks", value: "12,456" },
            { icon: <Shield className="w-6 h-6 text-green-500" />, label: "Referring Domains", value: "3,247" },
            { icon: <TrendingUp className="w-6 h-6 text-purple-500" />, label: "Domain Rating", value: "78" },
            { icon: <AlertTriangle className="w-6 h-6 text-red-500" />, label: "Toxic Links", value: "23" }
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Backlinks Table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Recent Backlinks</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Source
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      DR
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Anchor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {backlinks.map((backlink, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{backlink.domain}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">{backlink.url}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm font-semibold ${getDRColor(backlink.dr)}`}>
                          {backlink.dr}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 truncate max-w-xs">{backlink.anchor}</div>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(backlink.type)}`}>
                          {backlink.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(backlink.status)}`}>
                          {backlink.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Referring Domains */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Top Referring Domains</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Domain
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      DR
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Links
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quality
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {referringDomains.map((domain, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{domain.domain}</div>
                        <div className="text-sm text-gray-500">{domain.type}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm font-semibold ${getDRColor(domain.dr)}`}>
                          {domain.dr}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {domain.backlinks}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getDomainStatusColor(domain.status)}`}>
                          {domain.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Toxic Links Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-red-50 border border-red-200 rounded-xl p-6 mt-8"
        >
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-red-500 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Toxic Links Detected</h3>
              <p className="text-red-700 mb-4">
                We've identified 23 potentially harmful backlinks that could negatively impact your search rankings.
              </p>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Review Toxic Links
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BacklinkPage;