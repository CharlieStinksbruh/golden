import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  Upload, 
  Download, 
  Trash2, 
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  Search,
  Filter,
  BarChart3,
  TrendingDown,
  ExternalLink,
  Plus
} from 'lucide-react';

const DisavowPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  const toxicLinks = [
    {
      id: 1,
      url: 'https://spammy-site.com/link-farm',
      domain: 'spammy-site.com',
      anchorText: 'cheap SEO tools',
      toxicityScore: 95,
      reasons: ['Link farm', 'Low quality content', 'Suspicious anchor text'],
      firstSeen: '2024-01-10',
      lastSeen: '2024-01-20',
      status: 'pending',
      action: 'disavow'
    },
    {
      id: 2,
      url: 'https://bad-directory.net/seo-tools',
      domain: 'bad-directory.net',
      anchorText: 'Gold Chicken SEO',
      toxicityScore: 87,
      reasons: ['Low DR', 'Irrelevant content', 'Paid directory'],
      firstSeen: '2024-01-05',
      lastSeen: '2024-01-18',
      status: 'disavowed',
      action: 'disavow'
    },
    {
      id: 3,
      url: 'https://questionable-blog.org/seo-review',
      domain: 'questionable-blog.org',
      anchorText: 'best SEO software',
      toxicityScore: 72,
      reasons: ['Thin content', 'Multiple outbound links'],
      firstSeen: '2023-12-20',
      lastSeen: '2024-01-15',
      status: 'monitoring',
      action: 'monitor'
    },
    {
      id: 4,
      url: 'https://spam-network.com/page123',
      domain: 'spam-network.com',
      anchorText: 'click here',
      toxicityScore: 98,
      reasons: ['PBN network', 'Exact match anchor', 'Hidden links'],
      firstSeen: '2024-01-12',
      lastSeen: '2024-01-19',
      status: 'pending',
      action: 'disavow'
    },
    {
      id: 5,
      url: 'https://low-quality.net/tools-list',
      domain: 'low-quality.net',
      anchorText: 'SEO tools comparison',
      toxicityScore: 65,
      reasons: ['Low quality score', 'Duplicate content'],
      firstSeen: '2023-11-30',
      lastSeen: '2024-01-10',
      status: 'reviewed',
      action: 'keep'
    }
  ];

  const disavowHistory = [
    {
      id: 1,
      date: '2024-01-20',
      fileName: 'disavow-jan-2024.txt',
      domains: 23,
      urls: 156,
      status: 'submitted',
      googleResponse: 'Processing'
    },
    {
      id: 2,
      date: '2023-12-15',
      fileName: 'disavow-dec-2023.txt',
      domains: 18,
      urls: 89,
      status: 'processed',
      googleResponse: 'Completed'
    },
    {
      id: 3,
      date: '2023-11-10',
      fileName: 'disavow-nov-2023.txt',
      domains: 12,
      urls: 67,
      status: 'processed',
      googleResponse: 'Completed'
    }
  ];

  const stats = [
    { name: 'Toxic Links Found', value: '234', change: '+12', icon: <AlertTriangle className="w-6 h-6 text-red-500" /> },
    { name: 'Links Disavowed', value: '89', change: '+23', icon: <Shield className="w-6 h-6 text-green-500" /> },
    { name: 'Domains Blocked', value: '45', change: '+8', icon: <XCircle className="w-6 h-6 text-orange-500" /> },
    { name: 'Risk Reduction', value: '67%', change: '+15%', icon: <TrendingDown className="w-6 h-6 text-blue-500" /> }
  ];

  const getToxicityColor = (score) => {
    if (score >= 80) return 'text-red-600 bg-red-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-green-600 bg-green-100';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'disavowed': return 'text-red-600 bg-red-100';
      case 'monitoring': return 'text-blue-600 bg-blue-100';
      case 'reviewed': return 'text-green-600 bg-green-100';
      case 'submitted': return 'text-purple-600 bg-purple-100';
      case 'processed': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getActionColor = (action) => {
    switch (action) {
      case 'disavow': return 'text-red-600 bg-red-100';
      case 'monitor': return 'text-yellow-600 bg-yellow-100';
      case 'keep': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
      }, 3000);
    }
  };

  const generateDisavowFile = () => {
    const disavowLinks = toxicLinks.filter(link => link.action === 'disavow');
    const content = disavowLinks.map(link => link.url).join('\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `disavow-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredLinks = filterStatus === 'all' 
    ? toxicLinks 
    : toxicLinks.filter(link => link.status === filterStatus);

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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Disavow Tool</h1>
            <p className="text-gray-600">
              Identify and disavow toxic backlinks that could harm your search rankings
            </p>
          </motion.div>
        </div>

        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Backlink Data</h3>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".csv,.txt,.xlsx"
              onChange={handleFileUpload}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <div className="text-lg font-medium text-gray-900 mb-2">
                Upload your backlink data
              </div>
              <div className="text-sm text-gray-600 mb-4">
                Supports CSV, TXT, and Excel files from popular SEO tools
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200">
                Choose File
              </div>
            </label>
          </div>
          
          {selectedFile && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-blue-900">{selectedFile.name}</div>
                  <div className="text-sm text-blue-700">
                    {isAnalyzing ? 'Analyzing for toxic links...' : 'Analysis complete'}
                  </div>
                </div>
                {isAnalyzing && (
                  <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                )}
              </div>
            </div>
          )}
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
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
              <div className="text-sm text-gray-600">{stat.name}</div>
            </motion.div>
          ))}
        </div>

        {/* Toxic Links Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Toxic Links Analysis</h3>
              <div className="flex items-center space-x-4">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="disavowed">Disavowed</option>
                  <option value="monitoring">Monitoring</option>
                  <option value="reviewed">Reviewed</option>
                </select>
                <button
                  onClick={generateDisavowFile}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Generate Disavow File
                </button>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Link</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Toxicity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Anchor Text</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reasons</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tools</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredLinks.map((link) => (
                  <tr key={link.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900">{link.domain}</div>
                        <div className="text-sm text-gray-600 max-w-xs truncate">{link.url}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          First seen: {new Date(link.firstSeen).toLocaleDateString()}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getToxicityColor(link.toxicityScore)}`}>
                          {link.toxicityScore}
                        </span>
                        <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              link.toxicityScore >= 80 ? 'bg-red-500' :
                              link.toxicityScore >= 60 ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`}
                            style={{ width: `${link.toxicityScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs truncate">
                        {link.anchorText}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        {link.reasons.slice(0, 2).map((reason, index) => (
                          <span key={index} className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs rounded mr-1">
                            {reason}
                          </span>
                        ))}
                        {link.reasons.length > 2 && (
                          <span className="text-xs text-gray-500">
                            +{link.reasons.length - 2} more
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(link.status)}`}>
                        {link.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={link.action}
                        onChange={(e) => {
                          // Handle action change
                        }}
                        className={`px-2 py-1 text-xs font-semibold rounded-full border-0 ${getActionColor(link.action)}`}
                      >
                        <option value="disavow">Disavow</option>
                        <option value="monitor">Monitor</option>
                        <option value="keep">Keep</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Disavow History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Disavow File History</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">File Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Domains</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">URLs</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Google Response</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {disavowHistory.map((entry) => (
                  <tr key={entry.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(entry.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-900">{entry.fileName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {entry.domains}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {entry.urls}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(entry.status)}`}>
                        {entry.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {entry.googleResponse}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          <Eye className="w-4 h-4" />
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

export default DisavowPage;