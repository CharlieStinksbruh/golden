import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Plus, 
  Mail, 
  Shield, 
  Settings, 
  Trash2,
  Edit,
  CheckCircle,
  Clock,
  AlertTriangle,
  Crown,
  User,
  Search,
  Filter,
  Download,
  Eye,
  MoreVertical
} from 'lucide-react';

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState('members');
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('viewer');

  const tabs = [
    { id: 'members', name: 'Team Members', icon: <Users className="w-5 h-5" /> },
    { id: 'roles', name: 'Roles & Permissions', icon: <Shield className="w-5 h-5" /> },
    { id: 'invitations', name: 'Pending Invitations', icon: <Mail className="w-5 h-5" /> },
    { id: 'activity', name: 'Activity Log', icon: <Clock className="w-5 h-5" /> }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@company.com',
      role: 'owner',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'active',
      lastActive: '2 hours ago',
      joinedDate: '2023-08-15',
      projects: 12,
      reportsGenerated: 45
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@company.com',
      role: 'admin',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'active',
      lastActive: '1 hour ago',
      joinedDate: '2023-09-10',
      projects: 8,
      reportsGenerated: 32
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike@company.com',
      role: 'editor',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'active',
      lastActive: '3 hours ago',
      joinedDate: '2023-10-05',
      projects: 5,
      reportsGenerated: 18
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      email: 'emily@company.com',
      role: 'viewer',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'inactive',
      lastActive: '2 days ago',
      joinedDate: '2023-11-20',
      projects: 2,
      reportsGenerated: 5
    }
  ];

  const pendingInvitations = [
    {
      id: 1,
      email: 'alex@company.com',
      role: 'editor',
      invitedBy: 'John Smith',
      invitedDate: '2024-01-18',
      status: 'pending',
      expiresIn: '5 days'
    },
    {
      id: 2,
      email: 'lisa@company.com',
      role: 'viewer',
      invitedBy: 'Sarah Johnson',
      invitedDate: '2024-01-15',
      status: 'expired',
      expiresIn: 'Expired'
    }
  ];

  const roles = [
    {
      id: 'owner',
      name: 'Owner',
      description: 'Full access to all features and settings',
      permissions: [
        'Manage team members',
        'Access billing',
        'Manage integrations',
        'Delete projects',
        'Export data',
        'API access',
        'White-label settings',
        'All reporting features'
      ],
      color: 'text-purple-600 bg-purple-100',
      icon: <Crown className="w-5 h-5 text-purple-600" />
    },
    {
      id: 'admin',
      name: 'Admin',
      description: 'Manage projects and team members',
      permissions: [
        'Manage team members',
        'Create/edit projects',
        'Generate reports',
        'Export data',
        'API access',
        'View analytics',
        'Manage crawls'
      ],
      color: 'text-red-600 bg-red-100',
      icon: <Shield className="w-5 h-5 text-red-600" />
    },
    {
      id: 'editor',
      name: 'Editor',
      description: 'Create and edit projects and reports',
      permissions: [
        'Create/edit projects',
        'Generate reports',
        'Run crawls',
        'View analytics',
        'Export basic data',
        'Keyword research'
      ],
      color: 'text-blue-600 bg-blue-100',
      icon: <Edit className="w-5 h-5 text-blue-600" />
    },
    {
      id: 'viewer',
      name: 'Viewer',
      description: 'View-only access to projects and reports',
      permissions: [
        'View projects',
        'View reports',
        'View analytics',
        'Basic export'
      ],
      color: 'text-green-600 bg-green-100',
      icon: <Eye className="w-5 h-5 text-green-600" />
    }
  ];

  const activityLog = [
    {
      id: 1,
      user: 'Sarah Johnson',
      action: 'Generated SEO report',
      target: 'example.com project',
      timestamp: '2024-01-20 14:30:00',
      type: 'report'
    },
    {
      id: 2,
      user: 'Mike Chen',
      action: 'Started site crawl',
      target: 'mystore.com',
      timestamp: '2024-01-20 13:45:00',
      type: 'crawl'
    },
    {
      id: 3,
      user: 'John Smith',
      action: 'Invited new member',
      target: 'alex@company.com',
      timestamp: '2024-01-20 12:15:00',
      type: 'team'
    },
    {
      id: 4,
      user: 'Emily Rodriguez',
      action: 'Viewed keyword rankings',
      target: 'blog.example.com',
      timestamp: '2024-01-20 11:30:00',
      type: 'view'
    }
  ];

  const stats = [
    { name: 'Team Members', value: '4', change: '+1', icon: <Users className="w-6 h-6 text-blue-500" /> },
    { name: 'Active Users', value: '3', change: '0', icon: <CheckCircle className="w-6 h-6 text-green-500" /> },
    { name: 'Pending Invites', value: '2', change: '+1', icon: <Mail className="w-6 h-6 text-yellow-500" /> },
    { name: 'Total Projects', value: '27', change: '+3', icon: <Settings className="w-6 h-6 text-purple-500" /> }
  ];

  const getRoleColor = (role) => {
    const roleData = roles.find(r => r.id === role);
    return roleData ? roleData.color : 'text-gray-600 bg-gray-100';
  };

  const getRoleIcon = (role) => {
    const roleData = roles.find(r => r.id === role);
    return roleData ? roleData.icon : <User className="w-4 h-4" />;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'inactive': return 'text-gray-600 bg-gray-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'expired': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'report': return <FileText className="w-4 h-4 text-blue-500" />;
      case 'crawl': return <Search className="w-4 h-4 text-green-500" />;
      case 'team': return <Users className="w-4 h-4 text-purple-500" />;
      case 'view': return <Eye className="w-4 h-4 text-gray-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const handleInvite = () => {
    // Handle invitation logic
    setShowInviteModal(false);
    setInviteEmail('');
    setInviteRole('viewer');
  };

  const renderMembersTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Team Members</h3>
          <button
            onClick={() => setShowInviteModal(true)}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200"
          >
            <Plus className="w-4 h-4 mr-2" />
            Invite Member
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Member</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Projects</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Active</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {teamMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{member.name}</div>
                        <div className="text-sm text-gray-500">{member.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getRoleIcon(member.role)}
                      <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(member.role)}`}>
                        {member.role}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(member.status)}`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {member.projects}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {member.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Edit className="w-4 h-4" />
                      </button>
                      {member.role !== 'owner' && (
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                      <button className="text-gray-600 hover:text-gray-900">
                        <MoreVertical className="w-4 h-4" />
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

  const renderRolesTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role) => (
          <div key={role.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                {role.icon}
                <h3 className="text-lg font-semibold text-gray-900">{role.name}</h3>
              </div>
              <button className="text-gray-600 hover:text-gray-900">
                <Settings className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-gray-600 mb-4">{role.description}</p>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Permissions:</h4>
              <ul className="space-y-1">
                {role.permissions.map((permission, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {permission}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderInvitationsTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Pending Invitations</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invited By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {pendingInvitations.map((invitation) => (
                <tr key={invitation.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{invitation.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(invitation.role)}`}>
                      {invitation.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {invitation.invitedBy}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(invitation.invitedDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(invitation.status)}`}>
                      {invitation.status}
                    </span>
                    <div className="text-xs text-gray-500 mt-1">{invitation.expiresIn}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        Resend
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        Cancel
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

  const renderActivityTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
        
        <div className="space-y-4">
          {activityLog.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 bg-white rounded-lg">
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user}</span> {activity.action}
                  {activity.target && (
                    <span className="font-medium text-orange-600"> {activity.target}</span>
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {new Date(activity.timestamp).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Team Management</h1>
            <p className="text-gray-600">
              Manage your team members, roles, and permissions
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-gray-50 rounded-lg">
                  {stat.icon}
                </div>
                <div className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 
                  stat.change === '0' ? 'text-gray-600' : 'text-red-600'
                }`}>
                  {stat.change !== '0' && stat.change}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.name}</div>
            </motion.div>
          ))}
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
              {activeTab === 'members' && renderMembersTab()}
              {activeTab === 'roles' && renderRolesTab()}
              {activeTab === 'invitations' && renderInvitationsTab()}
              {activeTab === 'activity' && renderActivityTab()}
            </motion.div>
          </div>
        </div>

        {/* Invite Modal */}
        {showInviteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Invite Team Member</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    placeholder="colleague@company.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <select
                    value={inviteRole}
                    onChange={(e) => setInviteRole(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="viewer">Viewer</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowInviteModal(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleInvite}
                  className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200"
                >
                  Send Invitation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamPage;