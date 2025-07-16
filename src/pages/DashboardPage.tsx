import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  BarChart3, 
  Link as LinkIcon, 
  AlertTriangle,
  TrendingUp,
  Globe,
  Users,
  Clock,
  ArrowUp,
  ArrowDown,
  Eye,
  Target,
  Shield,
  Database,
  Gauge,
  FileText,
  Settings,
  Zap,
  Activity,
  CheckCircle,
  XCircle,
  Plus,
  Filter,
  Download,
  Share2,
  Bell,
  Calendar,
  Smartphone,
  Server,
  Code,
  Layers,
  PieChart,
  TrendingDown
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Cell, AreaChart, Area } from 'recharts';

const DashboardPage = () => {
  const { user } = useAuth();
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');
  const [selectedProject, setSelectedProject] = useState('all');

  // Enhanced data with more comprehensive metrics
  const trafficData = [
    { name: 'Jan', organic: 4000, paid: 2400, direct: 1800, social: 600, referral: 800 },
    { name: 'Feb', organic: 3000, paid: 1398, direct: 2100, social: 800, referral: 900 },
    { name: 'Mar', organic: 2000, paid: 9800, direct: 1900, social: 700, referral: 1100 },
    { name: 'Apr', organic: 2780, paid: 3908, direct: 2200, social: 900, referral: 1200 },
    { name: 'May', organic: 1890, paid: 4800, direct: 2000, social: 1100, referral: 1000 },
    { name: 'Jun', organic: 2390, paid: 3800, direct: 2300, social: 1200, referral: 1300 },
    { name: 'Jul', organic: 3490, paid: 4300, direct: 2500, social: 1400, referral: 1500 },
  ];

  const keywordRankings = [
    { name: 'Week 1', top3: 45, top10: 120, top50: 280, total: 450 },
    { name: 'Week 2', top3: 48, top10: 125, top50: 290, total: 465 },
    { name: 'Week 3', top3: 52, top10: 130, top50: 295, total: 480 },
    { name: 'Week 4', top3: 55, top10: 135, top50: 300, total: 495 },
  ];

  const technicalIssues = [
    { name: 'Broken Links', value: 45, color: '#ef4444' },
    { name: 'Missing Meta', value: 32, color: '#f97316' },
    { name: 'Slow Pages', value: 28, color: '#eab308' },
    { name: 'Duplicate Content', value: 15, color: '#06b6d4' },
    { name: 'Images', value: 12, color: '#8b5cf6' },
  ];

  const competitorData = [
    { name: 'Jan', goldChicken: 85, competitor1: 78, competitor2: 72, competitor3: 69 },
    { name: 'Feb', goldChicken: 87, competitor1: 79, competitor2: 73, competitor3: 70 },
    { name: 'Mar', goldChicken: 89, competitor1: 80, competitor2: 74, competitor3: 71 },
    { name: 'Apr', goldChicken: 91, competitor1: 81, competitor2: 75, competitor3: 72 },
    { name: 'May', goldChicken: 93, competitor1: 82, competitor2: 76, competitor3: 73 },
    { name: 'Jun', goldChicken: 95, competitor1: 83, competitor2: 77, competitor3: 74 },
  ];

  const recentCrawls = [
    {
      id: 1,
      url: "https://example.com",
      status: "completed",
      pages: 1247,
      issues: 23,
      warnings: 156,
      score: 85,
      date: "2 hours ago",
      crawlTime: "15:32"
    },
    {
      id: 2,
      url: "https://mystore.com",
      status: "running",
      pages: 856,
      issues: 12,
      warnings: 89,
      score: 92,
      date: "Running now",
      crawlTime: "08:45"
    },
    {
      id: 3,
      url: "https://blog.example.com",
      status: "completed",
      pages: 324,
      issues: 8,
      warnings: 45,
      score: 78,
      date: "1 day ago",
      crawlTime: "05:23"
    }
  ];

  const quickActions = [
    {
      name: "Start New Crawl",
      description: "Crawl a website for SEO analysis",
      icon: <Search className="w-6 h-6 text-blue-500" />,
      path: "/tools/crawler",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
    },
    {
      name: "Keyword Research",
      description: "Find new keyword opportunities",
      icon: <Target className="w-6 h-6 text-green-500" />,
      path: "/tools/keywords",
      color: "bg-green-50 border-green-200 hover:bg-green-100"
    },
    {
      name: "Technical Audit",
      description: "Run comprehensive technical analysis",
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      path: "/tools/technical",
      color: "bg-orange-50 border-orange-200 hover:bg-orange-100"
    },
    {
      name: "Backlink Analysis",
      description: "Analyze your link profile",
      icon: <LinkIcon className="w-6 h-6 text-purple-500" />,
      path: "/tools/backlinks",
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100"
    },
    {
      name: "Generate Report",
      description: "Create professional SEO report",
      icon: <FileText className="w-6 h-6 text-indigo-500" />,
      path: "/reports",
      color: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100"
    },
    {
      name: "Page Speed Test",
      description: "Analyze page performance",
      icon: <Gauge className="w-6 h-6 text-red-500" />,
      path: "/tools/pagespeed",
      color: "bg-red-50 border-red-200 hover:bg-red-100"
    }
  ];

  const stats = [
    {
      name: "Total Pages Crawled",
      value: "12,456",
      change: "+12%",
      changeType: "increase",
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      description: "This month"
    },
    {
      name: "SEO Issues Found",
      value: "234",
      change: "-8%",
      changeType: "decrease",
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      description: "Critical & warnings"
    },
    {
      name: "Keywords Tracked",
      value: "1,847",
      change: "+24%",
      changeType: "increase",
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      description: "Across all projects"
    },
    {
      name: "Backlinks Monitored",
      value: "3,921",
      change: "+5%",
      changeType: "increase",
      icon: <LinkIcon className="w-6 h-6 text-purple-500" />,
      description: "Active backlinks"
    },
    {
      name: "Average Position",
      value: "8.3",
      change: "-2.1",
      changeType: "decrease",
      icon: <Target className="w-6 h-6 text-indigo-500" />,
      description: "Tracked keywords"
    },
    {
      name: "Organic Traffic",
      value: "45.2K",
      change: "+18%",
      changeType: "increase",
      icon: <Activity className="w-6 h-6 text-green-500" />,
      description: "Monthly visitors"
    },
    {
      name: "Page Speed Score",
      value: "87",
      change: "+3",
      changeType: "increase",
      icon: <Gauge className="w-6 h-6 text-blue-500" />,
      description: "Average score"
    },
    {
      name: "Mobile Usability",
      value: "94%",
      change: "+2%",
      changeType: "increase",
      icon: <Smartphone className="w-6 h-6 text-green-500" />,
      description: "Mobile-friendly pages"
    }
  ];

  const recentAlerts = [
    {
      type: "error",
      title: "Critical SEO Issue Detected",
      message: "15 pages have missing title tags on example.com",
      time: "2 hours ago",
      action: "Fix Now"
    },
    {
      type: "warning",
      title: "Ranking Drop Alert",
      message: "Keyword 'SEO tools' dropped 5 positions",
      time: "4 hours ago",
      action: "Investigate"
    },
    {
      type: "success",
      title: "Crawl Completed",
      message: "Successfully crawled 1,247 pages on mystore.com",
      time: "6 hours ago",
      action: "View Report"
    },
    {
      type: "info",
      title: "New Backlinks Found",
      message: "12 new high-quality backlinks discovered",
      time: "1 day ago",
      action: "Review"
    }
  ];

  const topKeywords = [
    { keyword: "SEO tools", position: 3, change: 2, volume: 49500, difficulty: 65 },
    { keyword: "website audit", position: 7, change: -1, volume: 18100, difficulty: 42 },
    { keyword: "keyword research", position: 12, change: 3, volume: 27400, difficulty: 58 },
    { keyword: "backlink analysis", position: 5, change: 1, volume: 12300, difficulty: 71 },
    { keyword: "technical SEO", position: 9, change: -2, volume: 8900, difficulty: 55 }
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Please log in to access the dashboard</h1>
          <Link to="/login" className="text-orange-600 hover:text-orange-500">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Controls */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {user.name}!
              </h1>
              <p className="text-gray-600">
                Here's your SEO performance overview for today.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
              
              <select
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="all">All Projects</option>
                <option value="example.com">example.com</option>
                <option value="mystore.com">mystore.com</option>
                <option value="blog.example.com">blog.example.com</option>
              </select>
              
              <button className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </button>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.path}
                className={`p-4 rounded-xl border-2 ${action.color} transition-all duration-200 transform hover:scale-105`}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {action.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{action.name}</h3>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-gray-50 rounded-lg">
                  {stat.icon}
                </div>
                <div className={`flex items-center text-sm ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.changeType === 'increase' ? (
                    <ArrowUp className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 mr-1" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 mb-1">{stat.name}</div>
              <div className="text-xs text-gray-500">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Traffic Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Traffic Overview</h3>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Organic</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Paid</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="organic" stackId="1" stroke="#f97316" fill="#f97316" fillOpacity={0.6} />
                <Area type="monotone" dataKey="paid" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Area type="monotone" dataKey="direct" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Keyword Rankings */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Keyword Rankings</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={keywordRankings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="top3" fill="#10b981" name="Top 3" />
                <Bar dataKey="top10" fill="#f59e0b" name="Top 10" />
                <Bar dataKey="top50" fill="#ef4444" name="Top 50" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Additional Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Technical Issues Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Issues</h3>
            <ResponsiveContainer width="100%" height={250}>
              <RechartsPieChart>
                <Tooltip />
                <RechartsPieChart data={technicalIssues} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
                  {technicalIssues.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </RechartsPieChart>
              </RechartsPieChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {technicalIssues.map((issue, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: issue.color }}></div>
                  <span className="text-sm text-gray-600">{issue.name}: {issue.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Competitor Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Competitor Analysis</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={competitorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="goldChicken" stroke="#f97316" strokeWidth={3} name="Gold Chicken" />
                <Line type="monotone" dataKey="competitor1" stroke="#6b7280" strokeWidth={2} name="Competitor 1" />
                <Line type="monotone" dataKey="competitor2" stroke="#9ca3af" strokeWidth={2} name="Competitor 2" />
                <Line type="monotone" dataKey="competitor3" stroke="#d1d5db" strokeWidth={2} name="Competitor 3" />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Recent Activity and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Alerts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Bell className="w-5 h-5 mr-2 text-orange-500" />
                Recent Alerts
              </h3>
              <button className="text-sm text-orange-600 hover:text-orange-700">View All</button>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {recentAlerts.map((alert, index) => (
                <div key={index} className="px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start space-x-3">
                    <div className={`p-1 rounded-full ${
                      alert.type === 'error' ? 'bg-red-100' :
                      alert.type === 'warning' ? 'bg-yellow-100' :
                      alert.type === 'success' ? 'bg-green-100' :
                      'bg-blue-100'
                    }`}>
                      {alert.type === 'error' && <XCircle className="w-4 h-4 text-red-500" />}
                      {alert.type === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-500" />}
                      {alert.type === 'success' && <CheckCircle className="w-4 h-4 text-green-500" />}
                      {alert.type === 'info' && <Eye className="w-4 h-4 text-blue-500" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{alert.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-500">{alert.time}</span>
                        <button className="text-xs text-orange-600 hover:text-orange-700 font-medium">
                          {alert.action}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Top Keywords */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Top Keywords</h3>
              <Link to="/tools/keywords" className="text-sm text-orange-600 hover:text-orange-700">
                View All
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Keyword</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Change</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Volume</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {topKeywords.map((keyword, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{keyword.keyword}</div>
                        <div className="text-sm text-gray-500">Difficulty: {keyword.difficulty}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          keyword.position <= 3 ? 'bg-green-100 text-green-800' :
                          keyword.position <= 10 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          #{keyword.position}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`flex items-center text-sm ${
                          keyword.change > 0 ? 'text-green-600' : keyword.change < 0 ? 'text-red-600' : 'text-gray-600'
                        }`}>
                          {keyword.change > 0 ? (
                            <ArrowUp className="w-4 h-4 mr-1" />
                          ) : keyword.change < 0 ? (
                            <ArrowDown className="w-4 h-4 mr-1" />
                          ) : null}
                          {Math.abs(keyword.change)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {keyword.volume.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Recent Crawls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Recent Crawls</h3>
            <Link to="/tools/crawler" className="text-sm text-orange-600 hover:text-orange-700">
              Start New Crawl
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Website
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pages
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Issues
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentCrawls.map((crawl) => (
                  <tr key={crawl.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{crawl.url}</div>
                      <div className="text-sm text-gray-500">Crawl time: {crawl.crawlTime}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        crawl.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {crawl.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {crawl.pages.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{crawl.issues} errors</div>
                      <div className="text-sm text-gray-500">{crawl.warnings} warnings</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm font-semibold ${
                        crawl.score >= 90 ? 'text-green-600' :
                        crawl.score >= 70 ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {crawl.score}/100
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {crawl.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-orange-600 hover:text-orange-900">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-blue-600 hover:text-blue-900">
                          <Download className="w-4 h-4" />
                        </button>
                        <Link to="/reports" className="text-green-600 hover:text-green-900">
                          <FileText className="w-4 h-4" />
                        </Link>
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

export default DashboardPage;