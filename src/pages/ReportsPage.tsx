import React, { useState, useEffect } from 'react';
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
  Plus,
  Search,
  AlertTriangle,
  CheckCircle,
  RefreshCw
} from 'lucide-react';
import { realDataService, RealDataError } from '../services/realDataService';
import DataErrorDisplay from '../components/DataErrorDisplay';

interface Report {
  id: string;
  name: string;
  type: string;
  client: string;
  created: string;
  lastModified: string;
  status: 'published' | 'draft' | 'archived';
  views: number;
  pages: number;
  format: string;
  url?: string;
  data?: any;
  error?: RealDataError;
}

const ReportsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [reports, setReports] = useState<Report[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newReportUrl, setNewReportUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    setIsLoading(true);
    
    // Simulate loading existing reports
    const existingReports: Report[] = [
      {
        id: '1',
        name: "Monthly SEO Performance Report",
        type: "performance",
        client: "TechCorp Inc.",
        created: "2024-01-20",
        lastModified: "2024-01-22",
        status: "published",
        views: 45,
        pages: 24,
        format: "PDF",
        url: "https://example.com"
      },
      {
        id: '2',
        name: "Technical SEO Audit - Q1 2024",
        type: "audit",
        client: "E-commerce Store",
        created: "2024-01-18",
        lastModified: "2024-01-19",
        status: "draft",
        views: 12,
        pages: 18,
        format: "PDF",
        url: "https://shopify.com"
      }
    ];

    // Try to fetch real data for each report
    for (const report of existingReports) {
      if (report.url) {
        try {
          const siteData = await realDataService.fetchSiteData(report.url);
          report.data = siteData;
          if (siteData.error) {
            report.error = siteData.error;
          }
        } catch (error) {
          report.error = {
            type: 'network',
            message: error.message,
            url: report.url
          };
        }
      }
    }

    setReports(existingReports);
    setIsLoading(false);
  };

  const generateNewReport = async () => {
    if (!newReportUrl.trim()) return;
    
    setIsGenerating(true);
    
    try {
      const siteData = await realDataService.fetchSiteData(newReportUrl);
      
      const newReport: Report = {
        id: Date.now().toString(),
        name: `SEO Report for ${siteData.url}`,
        type: "audit",
        client: "New Client",
        created: new Date().toISOString().split('T')[0],
        lastModified: new Date().toISOString().split('T')[0],
        status: "draft",
        views: 0,
        pages: 1,
        format: "PDF",
        url: siteData.url,
        data: siteData,
        error: siteData.error
      };
      
      setReports(prev => [newReport, ...prev]);
      setNewReportUrl('');
    } catch (error) {
      console.error('Failed to generate report:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const retryReportData = async (reportId: string) => {
    const report = reports.find(r => r.id === reportId);
    if (!report || !report.url) return;

    try {
      const siteData = await realDataService.fetchSiteData(report.url);
      setReports(prev => prev.map(r => 
        r.id === reportId 
          ? { ...r, data: siteData, error: siteData.error }
          : r
      ));
    } catch (error) {
      console.error('Failed to retry report data:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'text-green-600 bg-green-100';
      case 'draft': return 'text-yellow-600 bg-yellow-100';
      case 'archived': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeColor = (type: string) => {
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
              Create, manage, and share professional SEO reports with real data
            </p>
          </motion.div>
        </div>

        {/* Create New Report */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Generate New Report</h3>
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={newReportUrl}
                onChange={(e) => setNewReportUrl(e.target.value)}
                placeholder="Enter website URL (e.g., example.com)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button
              onClick={generateNewReport}
              disabled={!newReportUrl.trim() || isGenerating}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5 mr-2" />
                  Generate Report
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: <FileText className="w-6 h-6 text-blue-500" />, label: "Total Reports", value: reports.length.toString() },
            { icon: <Eye className="w-6 h-6 text-green-500" />, label: "Total Views", value: reports.reduce((sum, r) => sum + r.views, 0).toString() },
            { icon: <Users className="w-6 h-6 text-purple-500" />, label: "Active Clients", value: new Set(reports.map(r => r.client)).size.toString() },
            { icon: <Clock className="w-6 h-6 text-orange-500" />, label: "Reports This Month", value: reports.filter(r => new Date(r.created).getMonth() === new Date().getMonth()).length.toString() }
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
            <h3 className="text-lg font-semibold text-gray-900">Reports</h3>
          </div>
          
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto"></div>
              <p className="text-gray-600 mt-2">Loading reports...</p>
            </div>
          ) : filteredReports.length === 0 ? (
            <div className="p-8 text-center">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No reports found. Generate your first report above.</p>
            </div>
          ) : (
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
                      Data Status
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
                        {report.url && (
                          <div className="text-xs text-blue-600">{report.url}</div>
                        )}
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
                      <td className="px-6 py-4 whitespace-nowrap">
                        {report.error ? (
                          <div className="flex items-center">
                            <AlertTriangle className="w-4 h-4 text-red-500 mr-1" />
                            <span className="text-xs text-red-600">Error</span>
                            <button
                              onClick={() => retryReportData(report.id)}
                              className="ml-2 text-xs text-blue-600 hover:text-blue-800"
                            >
                              Retry
                            </button>
                          </div>
                        ) : report.data ? (
                          <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                            <span className="text-xs text-green-600">Data Available</span>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-yellow-500 mr-1" />
                            <span className="text-xs text-yellow-600">Loading...</span>
                          </div>
                        )}
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
          )}
        </motion.div>

        {/* Error Display for Reports with Errors */}
        {filteredReports.some(r => r.error) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Fetch Issues</h3>
            <div className="space-y-4">
              {filteredReports.filter(r => r.error).map((report) => (
                <DataErrorDisplay
                  key={report.id}
                  error={report.error!}
                  onRetry={() => retryReportData(report.id)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ReportsPage;