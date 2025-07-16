import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  CreditCard, 
  Users, 
  Settings, 
  Bell, 
  Shield, 
  Key,
  Download,
  Upload,
  Edit,
  Save,
  X,
  Plus,
  Trash2,
  Crown,
  Calendar,
  Activity,
  BarChart3,
  FileText,
  Globe,
  Smartphone
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const ProfilePage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    timezone: 'Pacific Time (PT)',
    bio: 'SEO specialist with 5+ years of experience in technical SEO and content optimization.',
    website: 'https://example.com',
    linkedin: 'https://linkedin.com/in/johndoe'
  });

  const tabs = [
    { id: 'profile', name: 'Profile', icon: <User className="w-5 h-5" /> },
    { id: 'billing', name: 'Billing', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'team', name: 'Team', icon: <Users className="w-5 h-5" /> },
    { id: 'notifications', name: 'Notifications', icon: <Bell className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'api', name: 'API Keys', icon: <Key className="w-5 h-5" /> }
  ];

  const billingHistory = [
    {
      id: 1,
      date: '2024-01-01',
      description: 'Professional Plan - Monthly',
      amount: '$99.00',
      status: 'paid',
      invoice: 'INV-2024-001'
    },
    {
      id: 2,
      date: '2023-12-01',
      description: 'Professional Plan - Monthly',
      amount: '$99.00',
      status: 'paid',
      invoice: 'INV-2023-012'
    },
    {
      id: 3,
      date: '2023-11-01',
      description: 'Professional Plan - Monthly',
      amount: '$99.00',
      status: 'paid',
      invoice: 'INV-2023-011'
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@techcorp.com',
      role: 'Admin',
      status: 'active',
      lastActive: '2 hours ago',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike@techcorp.com',
      role: 'Editor',
      status: 'active',
      lastActive: '1 day ago',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily@techcorp.com',
      role: 'Viewer',
      status: 'pending',
      lastActive: 'Never',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const apiKeys = [
    {
      id: 1,
      name: 'Production API Key',
      key: 'gc_prod_1234567890abcdef',
      created: '2024-01-15',
      lastUsed: '2 hours ago',
      permissions: ['read', 'write']
    },
    {
      id: 2,
      name: 'Development API Key',
      key: 'gc_dev_abcdef1234567890',
      created: '2024-01-10',
      lastUsed: '1 day ago',
      permissions: ['read']
    }
  ];

  const usageStats = [
    { name: 'Pages Crawled', value: '12,456', limit: '50,000', percentage: 25 },
    { name: 'Keywords Tracked', value: '1,847', limit: '5,000', percentage: 37 },
    { name: 'Reports Generated', value: '23', limit: '100', percentage: 23 },
    { name: 'API Calls', value: '45,678', limit: '100,000', percentage: 46 }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save profile data logic here
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-orange-500" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{profileData.name}</h2>
            <p className="text-orange-100">{profileData.email}</p>
            <div className="flex items-center mt-2">
              <Crown className="w-4 h-4 mr-1" />
              <span className="text-sm">Professional Plan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </button>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={handleSave}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Save className="w-4 h-4 mr-2" />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 mr-2" />
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={profileData.name}
              onChange={(e) => setProfileData({...profileData, name: e.target.value})}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-50"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData({...profileData, email: e.target.value})}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-50"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-50"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
            <input
              type="text"
              value={profileData.company}
              onChange={(e) => setProfileData({...profileData, company: e.target.value})}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-50"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              value={profileData.location}
              onChange={(e) => setProfileData({...profileData, location: e.target.value})}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-50"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
            <select
              value={profileData.timezone}
              onChange={(e) => setProfileData({...profileData, timezone: e.target.value})}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-50"
            >
              <option>Pacific Time (PT)</option>
              <option>Mountain Time (MT)</option>
              <option>Central Time (CT)</option>
              <option>Eastern Time (ET)</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
          <textarea
            value={profileData.bio}
            onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
            disabled={!isEditing}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-50"
          />
        </div>
      </div>

      {/* Usage Statistics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Usage Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {usageStats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{stat.name}</span>
                <span className="text-gray-900">{stat.value} / {stat.limit}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full"
                  style={{ width: `${stat.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBillingTab = () => (
    <div className="space-y-6">
      {/* Current Plan */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Current Plan</h3>
          <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200">
            Upgrade Plan
          </button>
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 border border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xl font-bold text-gray-900 flex items-center">
                <Crown className="w-5 h-5 text-orange-500 mr-2" />
                Professional Plan
              </h4>
              <p className="text-gray-600 mt-1">Unlimited crawling, advanced features, team collaboration</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-orange-600">$99</div>
              <div className="text-sm text-gray-600">per month</div>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">Unlimited</div>
              <div className="text-sm text-gray-600">Pages Crawled</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">5,000</div>
              <div className="text-sm text-gray-600">Keywords Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">5</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">Full</div>
              <div className="text-sm text-gray-600">API Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Payment Method</h3>
          <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
            Update
          </button>
        </div>
        
        <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
          <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-medium text-gray-900">•••• •••• •••• 4242</div>
            <div className="text-sm text-gray-600">Expires 12/25</div>
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Billing History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {billingHistory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(item.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-orange-600 hover:text-orange-700 flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {item.invoice}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderTeamTab = () => (
    <div className="space-y-6">
      {/* Team Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Team Members</h3>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200">
            <Plus className="w-4 h-4 mr-2" />
            Invite Member
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">3</div>
            <div className="text-sm text-gray-600">Total Members</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">2</div>
            <div className="text-sm text-gray-600">Active Members</div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">2</div>
            <div className="text-sm text-gray-600">Available Seats</div>
          </div>
        </div>

        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900">{member.name}</div>
                  <div className="text-sm text-gray-600">{member.email}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    member.role === 'Admin' ? 'bg-red-100 text-red-800' :
                    member.role === 'Editor' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {member.role}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Last active: {member.lastActive}</div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className={`w-2 h-2 rounded-full ${
                    member.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></span>
                  <button className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Permissions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Role Permissions</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Permission</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Admin</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Editor</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Viewer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                'View Dashboard',
                'Run Crawls',
                'Generate Reports',
                'Manage Keywords',
                'Access API',
                'Manage Team',
                'Billing Access'
              ].map((permission, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{permission}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full mx-auto"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className={`w-4 h-4 rounded-full mx-auto ${
                      ['View Dashboard', 'Run Crawls', 'Generate Reports', 'Manage Keywords'].includes(permission)
                        ? 'bg-green-500' : 'bg-gray-300'
                    }`}></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className={`w-4 h-4 rounded-full mx-auto ${
                      permission === 'View Dashboard' ? 'bg-green-500' : 'bg-gray-300'
                    }`}></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAPITab = () => (
    <div className="space-y-6">
      {/* API Keys */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">API Keys</h3>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200">
            <Plus className="w-4 h-4 mr-2" />
            Generate New Key
          </button>
        </div>

        <div className="space-y-4">
          {apiKeys.map((key) => (
            <div key={key.id} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{key.name}</h4>
                <div className="flex items-center space-x-2">
                  <button className="text-orange-600 hover:text-orange-700 text-sm">
                    Regenerate
                  </button>
                  <button className="text-red-600 hover:text-red-700 text-sm">
                    Delete
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded p-3 mb-3">
                <code className="text-sm text-gray-800 font-mono">{key.key}</code>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div>
                  <span>Created: {new Date(key.created).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>Last used: {key.lastUsed}</span>
                </div>
                <div className="flex space-x-2">
                  {key.permissions.map((permission) => (
                    <span key={permission} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                      {permission}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* API Documentation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">API Documentation</h3>
        <p className="text-gray-600 mb-4">
          Use our powerful API to integrate Gold Chicken's SEO capabilities into your applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="#" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <FileText className="w-6 h-6 text-blue-500" />
              <div>
                <div className="font-medium text-gray-900">API Reference</div>
                <div className="text-sm text-gray-600">Complete API documentation</div>
              </div>
            </div>
          </a>
          
          <a href="#" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <Globe className="w-6 h-6 text-green-500" />
              <div>
                <div className="font-medium text-gray-900">SDKs & Libraries</div>
                <div className="text-sm text-gray-600">Official SDKs for popular languages</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Please log in to access your profile</h1>
        </div>
      </div>
    );
  }

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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
            <p className="text-gray-600">
              Manage your account settings, billing, and team preferences.
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
              {activeTab === 'profile' && renderProfileTab()}
              {activeTab === 'billing' && renderBillingTab()}
              {activeTab === 'team' && renderTeamTab()}
              {activeTab === 'api' && renderAPITab()}
              {activeTab === 'notifications' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
                  <p className="text-gray-600">Notification settings coming soon...</p>
                </div>
              )}
              {activeTab === 'security' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
                  <p className="text-gray-600">Security settings coming soon...</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;