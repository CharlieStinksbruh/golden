import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  CreditCard, 
  BarChart3, 
  Settings, 
  Shield, 
  Database,
  Crown,
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  Download,
  Calendar,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Globe,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const AdminPage = () => {
  const { user, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddPlan, setShowAddPlan] = useState(false);
  const [showAddDiscount, setShowAddDiscount] = useState(false);

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Shield className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
          <p className="text-gray-600">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'users', name: 'User Management', icon: <Users className="w-5 h-5" /> },
    { id: 'plans', name: 'Plans & Pricing', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'discounts', name: 'Discounts', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'analytics', name: 'Analytics', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'system', name: 'System Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  const overviewStats = [
    { name: 'Total Users', value: '12,456', change: '+12%', icon: <Users className="w-6 h-6 text-blue-500" /> },
    { name: 'Active Subscriptions', value: '8,234', change: '+8%', icon: <CreditCard className="w-6 h-6 text-green-500" /> },
    { name: 'Monthly Revenue', value: '$124,567', change: '+15%', icon: <DollarSign className="w-6 h-6 text-purple-500" /> },
    { name: 'Churn Rate', value: '2.3%', change: '-0.5%', icon: <TrendingUp className="w-6 h-6 text-orange-500" /> }
  ];

  const recentUsers = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      plan: 'professional',
      status: 'active',
      joined: '2024-01-20',
      lastActive: '2 hours ago'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@company.com',
      plan: 'enterprise',
      status: 'active',
      joined: '2024-01-19',
      lastActive: '1 day ago'
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike@startup.com',
      plan: 'starter',
      status: 'trial',
      joined: '2024-01-18',
      lastActive: '3 hours ago'
    }
  ];

  const plans = [
    {
      id: 1,
      name: 'Free',
      price: 0,
      interval: 'month',
      features: ['500 pages crawled', 'Basic reports', 'Email support'],
      users: 2456,
      status: 'active'
    },
    {
      id: 2,
      name: 'Starter',
      price: 29,
      interval: 'month',
      features: ['10,000 pages crawled', 'Advanced reports', 'Priority support'],
      users: 1234,
      status: 'active'
    },
    {
      id: 3,
      name: 'Professional',
      price: 99,
      interval: 'month',
      features: ['Unlimited crawling', 'Team collaboration', 'API access'],
      users: 3456,
      status: 'active'
    },
    {
      id: 4,
      name: 'Enterprise',
      price: 299,
      interval: 'month',
      features: ['Everything in Pro', 'White-label', 'Dedicated support'],
      users: 567,
      status: 'active'
    }
  ];

  const discounts = [
    {
      id: 1,
      code: 'WELCOME50',
      type: 'percentage',
      value: 50,
      description: 'Welcome discount for new users',
      uses: 234,
      maxUses: 1000,
      expiresAt: '2024-12-31',
      status: 'active'
    },
    {
      id: 2,
      code: 'ANNUAL20',
      type: 'percentage',
      value: 20,
      description: 'Annual subscription discount',
      uses: 89,
      maxUses: 500,
      expiresAt: '2024-06-30',
      status: 'active'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'trial': return 'text-yellow-600 bg-yellow-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
      case 'expired': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPlanColor = (plan) => {
    switch (plan) {
      case 'free': return 'text-gray-600 bg-gray-100';
      case 'starter': return 'text-blue-600 bg-blue-100';
      case 'professional': return 'text-purple-600 bg-purple-100';
      case 'enterprise': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
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
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Users</h3>
          <div className="space-y-4">
            {recentUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">{user.name}</div>
                  <div className="text-sm text-gray-600">{user.email}</div>
                </div>
                <div className="text-right">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPlanColor(user.plan)}`}>
                    {user.plan}
                  </span>
                  <div className="text-xs text-gray-500 mt-1">{user.lastActive}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Health</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">API Response Time</span>
              <span className="text-green-600 font-medium">245ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Database Performance</span>
              <span className="text-green-600 font-medium">Excellent</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Server Uptime</span>
              <span className="text-green-600 font-medium">99.9%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Active Crawls</span>
              <span className="text-blue-600 font-medium">1,234</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsersTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">User Management</h3>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200">
              <Plus className="w-4 h-4 mr-2" />
              Add User
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Plan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-600">{user.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPlanColor(user.plan)}`}>
                      {user.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(user.joined).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit className="w-4 h-4" />
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
      </div>
    </div>
  );

  const renderPlansTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Subscription Plans</h3>
          <button
            onClick={() => setShowAddPlan(true)}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Plan
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">{plan.name}</h4>
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="text-3xl font-bold text-gray-900 mb-2">
                ${plan.price}
                <span className="text-sm font-normal text-gray-600">/{plan.interval}</span>
              </div>
              
              <div className="text-sm text-gray-600 mb-4">
                {plan.users.toLocaleString()} users
              </div>
              
              <ul className="space-y-2 text-sm text-gray-600">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDiscountsTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Discount Codes</h3>
          <button
            onClick={() => setShowAddDiscount(true)}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Discount
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Usage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expires</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {discounts.map((discount) => (
                <tr key={discount.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-mono font-medium text-gray-900">{discount.code}</div>
                    <div className="text-sm text-gray-600">{discount.description}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 capitalize">
                    {discount.type}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {discount.type === 'percentage' ? `${discount.value}%` : `$${discount.value}`}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {discount.uses} / {discount.maxUses}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {new Date(discount.expiresAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(discount.status)}`}>
                      {discount.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Edit className="w-4 h-4" />
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
      </div>
    </div>
  );

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
            <div className="flex items-center space-x-3 mb-2">
              <Crown className="w-8 h-8 text-yellow-500" />
              <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
            </div>
            <p className="text-gray-600">
              Manage users, plans, discounts, and system settings
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-orange-50 text-orange-700 border border-orange-200'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'overview' && renderOverviewTab()}
              {activeTab === 'users' && renderUsersTab()}
              {activeTab === 'plans' && renderPlansTab()}
              {activeTab === 'discounts' && renderDiscountsTab()}
              {activeTab === 'analytics' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics Dashboard</h3>
                  <p className="text-gray-600">Advanced analytics coming soon...</p>
                </div>
              )}
              {activeTab === 'system' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">System Settings</h3>
                  <p className="text-gray-600">System configuration options coming soon...</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;