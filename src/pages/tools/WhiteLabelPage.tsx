import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Upload, 
  Download, 
  Eye, 
  Settings, 
  Save,
  RefreshCw,
  Monitor,
  Smartphone,
  FileText,
  Mail,
  Globe,
  Users,
  Crown,
  Zap,
  CheckCircle,
  Image as ImageIcon
} from 'lucide-react';

const WhiteLabelPage = () => {
  const [activeTab, setActiveTab] = useState('branding');
  const [primaryColor, setPrimaryColor] = useState('#f97316');
  const [secondaryColor, setSecondaryColor] = useState('#eab308');
  const [logo, setLogo] = useState(null);
  const [companyName, setCompanyName] = useState('Your Company');
  const [domain, setDomain] = useState('');

  const tabs = [
    { id: 'branding', name: 'Branding', icon: <Palette className="w-5 h-5" /> },
    { id: 'domain', name: 'Custom Domain', icon: <Globe className="w-5 h-5" /> },
    { id: 'reports', name: 'Report Templates', icon: <FileText className="w-5 h-5" /> },
    { id: 'emails', name: 'Email Templates', icon: <Mail className="w-5 h-5" /> },
    { id: 'users', name: 'User Management', icon: <Users className="w-5 h-5" /> },
    { id: 'preview', name: 'Preview', icon: <Eye className="w-5 h-5" /> }
  ];

  const colorPresets = [
    { name: 'Orange', primary: '#f97316', secondary: '#eab308' },
    { name: 'Blue', primary: '#3b82f6', secondary: '#06b6d4' },
    { name: 'Green', primary: '#10b981', secondary: '#84cc16' },
    { name: 'Purple', primary: '#8b5cf6', secondary: '#a855f7' },
    { name: 'Red', primary: '#ef4444', secondary: '#f59e0b' },
    { name: 'Indigo', primary: '#6366f1', secondary: '#8b5cf6' }
  ];

  const reportTemplates = [
    {
      id: 1,
      name: 'SEO Audit Report',
      description: 'Comprehensive SEO audit with technical analysis',
      preview: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400',
      customizable: true,
      status: 'active'
    },
    {
      id: 2,
      name: 'Keyword Ranking Report',
      description: 'Monthly keyword performance and ranking changes',
      preview: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      customizable: true,
      status: 'active'
    },
    {
      id: 3,
      name: 'Backlink Analysis Report',
      description: 'Detailed backlink profile and link building opportunities',
      preview: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      customizable: true,
      status: 'draft'
    }
  ];

  const emailTemplates = [
    {
      id: 1,
      name: 'Welcome Email',
      subject: 'Welcome to {company_name}',
      type: 'onboarding',
      status: 'active'
    },
    {
      id: 2,
      name: 'Report Ready',
      subject: 'Your SEO report is ready',
      type: 'notification',
      status: 'active'
    },
    {
      id: 3,
      name: 'Alert Notification',
      subject: 'SEO Alert: {alert_type}',
      type: 'alert',
      status: 'active'
    }
  ];

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderBrandingTab = () => (
    <div className="space-y-6">
      {/* Logo Upload */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Logo</h3>
        <div className="flex items-center space-x-6">
          <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            {logo ? (
              <img src={logo} alt="Logo" className="w-full h-full object-contain rounded-lg" />
            ) : (
              <div className="text-center">
                <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <div className="text-sm text-gray-600">No logo</div>
              </div>
            )}
          </div>
          <div>
            <input
              type="file"
              id="logo-upload"
              className="hidden"
              accept="image/*"
              onChange={handleLogoUpload}
            />
            <label
              htmlFor="logo-upload"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 cursor-pointer transition-all duration-200"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Logo
            </label>
            <div className="text-sm text-gray-600 mt-2">
              Recommended: 200x60px, PNG or SVG format
            </div>
          </div>
        </div>
      </div>

      {/* Company Name */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Support Email</label>
            <input
              type="email"
              placeholder="support@yourcompany.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      </div>

      {/* Color Scheme */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Color Scheme</h3>
        
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-3">Color Presets</h4>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {colorPresets.map((preset, index) => (
              <button
                key={index}
                onClick={() => {
                  setPrimaryColor(preset.primary);
                  setSecondaryColor(preset.secondary);
                }}
                className="p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
              >
                <div className="flex space-x-1 mb-2">
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: preset.primary }}
                  ></div>
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: preset.secondary }}
                  ></div>
                </div>
                <div className="text-xs text-gray-600">{preset.name}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
              />
              <input
                type="text"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
              />
              <input
                type="text"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDomainTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Custom Domain Setup</h3>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Your Domain</label>
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="seo.yourcompany.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <div className="text-sm text-gray-600 mt-1">
            Enter the subdomain you want to use for your white-label platform
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h4 className="font-medium text-blue-900 mb-2">DNS Configuration Required</h4>
          <div className="text-sm text-blue-800 space-y-1">
            <div>Add the following CNAME record to your DNS:</div>
            <div className="font-mono bg-blue-100 p-2 rounded">
              CNAME: seo.yourcompany.com → app.goldchicken.com
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <div className="font-medium text-gray-900">SSL Certificate</div>
            <div className="text-sm text-gray-600">Automatically provisioned via Let's Encrypt</div>
          </div>
          <CheckCircle className="w-6 h-6 text-green-500" />
        </div>
      </div>
    </div>
  );

  const renderReportsTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Report Templates</h3>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200">
            <FileText className="w-4 h-4 mr-2" />
            Create Template
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reportTemplates.map((template) => (
            <div key={template.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <img
                src={template.preview}
                alt={template.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{template.name}</h4>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    template.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {template.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    {template.customizable && (
                      <>
                        <Settings className="w-4 h-4 mr-1" />
                        Customizable
                      </>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-700">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-orange-600 hover:text-orange-700">
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPreviewTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Platform Preview</h3>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Monitor className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Smartphone className="w-5 h-5" />
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </button>
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600">
              {domain || 'seo.yourcompany.com'}
            </div>
          </div>
          
          <div className="bg-white p-6" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                {logo ? (
                  <img src={logo} alt="Logo" className="h-8" />
                ) : (
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                )}
                <span className="text-xl font-bold text-gray-900">{companyName}</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold" style={{ color: primaryColor }}>1,247</div>
                  <div className="text-sm text-gray-600">Pages Crawled</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold" style={{ color: primaryColor }}>89</div>
                  <div className="text-sm text-gray-600">Issues Found</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold" style={{ color: primaryColor }}>92%</div>
                  <div className="text-sm text-gray-600">SEO Score</div>
                </div>
              </div>
              
              <button
                className="px-6 py-3 text-white rounded-lg font-medium transition-colors"
                style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
              >
                Start SEO Audit
              </button>
            </div>
          </div>
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
              <h1 className="text-3xl font-bold text-gray-900">White Label Platform</h1>
            </div>
            <p className="text-gray-600">
              Customize the platform with your branding and create a seamless experience for your clients
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
              {activeTab === 'branding' && renderBrandingTab()}
              {activeTab === 'domain' && renderDomainTab()}
              {activeTab === 'reports' && renderReportsTab()}
              {activeTab === 'preview' && renderPreviewTab()}
              {activeTab === 'emails' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Templates</h3>
                  <div className="space-y-4">
                    {emailTemplates.map((template) => (
                      <div key={template.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">{template.name}</div>
                          <div className="text-sm text-gray-600">{template.subject}</div>
                          <div className="text-xs text-gray-500 mt-1">{template.type}</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            template.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {template.status}
                          </span>
                          <button className="text-blue-600 hover:text-blue-700">
                            <Settings className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 'users' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">User Management</h3>
                  <p className="text-gray-600">User management features coming soon...</p>
                </div>
              )}
            </motion.div>

            {/* Save Button */}
            <div className="mt-6 flex justify-end">
              <button className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 transition-all duration-200">
                <Save className="w-5 h-5 mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteLabelPage;