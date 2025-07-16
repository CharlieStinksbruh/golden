import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Share2, 
  Calendar, 
  Eye, 
  BarChart3,
  TrendingUp,
  Users,
  Clock,
  Filter,
  Plus
} from 'lucide-react';

const ReportsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const reports = [
    {
      id: 1,
      name: "Monthly SEO Performance Report",
      type: "performance",
      client: "TechCorp Inc.",
      created: "2024-01-20",
      lastModified: "2024-01-22",
      status: "published",
      views: 45,
      pages: 24,
      format: "PDF"
    },
    {
      id: 2,
      name: "Technical SEO Audit - Q1 2024",
      type: "audit",
      client: "E-commerce Store",
      created: "2024-01-18",
      lastModified: "2024-01-19",
      status: "draft",
      views: 12,
      pages: 18,
      format: "PDF"
    },
    {
      id: 3,
      name: "Keyword Ranking Analysis",
      type: "keywords",
      client: "Local Business",
      created: "2024-01-15",
      lastModified: "2024-01-20",
      status: "published",
      views: 28,
      pages: 12,
      format: "PDF"
    },
    {
      id: 4,
      name: "Backlink Profile Assessment",
      type: "backlinks",
      client: "Digital Agency",
      created: "2024-01-12",
      lastModified: "2024-01-18",
      status: "published",
      views: 67,
      pages: 32,
      format: "PDF"
    },
    {
      id: 5,
      name: "Competitor Analysis Report",
      type: "competitor",
      client: "Startup Company",
      created: "2024-01-10",
      lastModified: "2024-01-15",
      status: "archived",
      views: 89,
      pages: 28,
      format: "PDF"
    }
  ];

  const templates = [
    {
      name: "SEO Performance Dashboard",
      description: "Comprehensive monthly performance overview",
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      type: "performance"
    },
    {
      name: "Technical SEO Audit",
      description: "Detailed technical analysis and recommendations",
      icon: <FileText className="w-8 h-8 text-green-500" />,
      type: "audit"
    },
    {
      name: "Keyword Tracking Report",
      description: "Keyword rankings and opportunities",
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      type: "keywords"
    },
    {
      name: "Backlink Analysis",
      description: "Comprehensive backlink profile review",
      icon: <Users className="w-8 h-8 text-orange-500" />,
      type: "backlinks"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'text-green-600 bg-green-100';
      case 'draft': return 'text-yellow-600 bg-yellow-100';
      case 'archived': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'performance': return 'text-blue-600 bg-blue-100';
      case 'audit': return 'text-green-600 bg-green-100';
      case 'keywords': return 'text-purple-600 bg-purple-100';
      case 'backlinks': return 'text-orange-600 bg-orange-100';
      case 'competitor': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredReports = selectedFilter === 'all' 
    ? reports 
    : reports.filter(report => report.type === selectedFilter);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
            <p className="text-gray-600">
              Create, manage, and share professional SEO reports
            </p>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 transition-all duration-200"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create Report
          </motion.button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: <FileText className="w-6 h-6 text-blue-500" />, label: "Total Reports", value: "127" },
            { icon: <Eye className="w-6 h-6 text-green-500" />, label: "Total Views", value: "2,456" },
            { icon: <Users className="w-6 h-6 text-purple-500" />, label: "Active Clients", value: "34" },
            { icon: <Clock className="w-6 h-6 text-orange-500" />, label: "Avg. Generation Time", value: "2.3min" }
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

        {/* Report Templates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Report Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template, index) => (
              <div
                key={index}
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-200">
                  {template.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{template.name}</h3>
                <p className="text-sm text-gray-600">{template.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter by type:</span>
              <div className="flex space-x-2">
                {['all', 'performance', 'audit', 'keywords', 'backlinks', 'competitor'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedFilter === filter
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reports Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Reports</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Report Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Views
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredReports.map((report) => (
                  <tr key={report.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{report.name}</div>
                      <div className="text-sm text-gray-500">
                        Created: {new Date(report.created).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(report.type)}`}>
                        {report.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {report.client}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 text-gray-400 mr-1" />
                        {report.views}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="text-purple-600 hover:text-purple-900">
                          <Share2 className="w-4 h-4" />
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

export default ReportsPage;