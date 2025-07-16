import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Key, 
  Book, 
  Play, 
  Copy, 
  CheckCircle,
  ExternalLink,
  Download,
  Globe,
  Database,
  Zap,
  Shield,
  Clock,
  BarChart3,
  Search,
  Link as LinkIcon,
  AlertTriangle,
  Plus,
  Trash2,
  Eye,
  EyeOff
} from 'lucide-react';

const APIPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedEndpoint, setSelectedEndpoint] = useState('crawl');
  const [apiKey, setApiKey] = useState('gc_live_1234567890abcdef...');
  const [showApiKey, setShowApiKey] = useState(false);
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <Book className="w-5 h-5" /> },
    { id: 'endpoints', name: 'API Endpoints', icon: <Code className="w-5 h-5" /> },
    { id: 'keys', name: 'API Keys', icon: <Key className="w-5 h-5" /> },
    { id: 'playground', name: 'API Playground', icon: <Play className="w-5 h-5" /> },
    { id: 'docs', name: 'Documentation', icon: <Book className="w-5 h-5" /> }
  ];

  const apiEndpoints = [
    {
      id: 'crawl',
      name: 'Site Crawl',
      method: 'POST',
      endpoint: '/api/v1/crawl',
      description: 'Start a comprehensive site crawl',
      rateLimit: '10 requests/minute',
      category: 'crawling'
    },
    {
      id: 'crawl-status',
      name: 'Crawl Status',
      method: 'GET',
      endpoint: '/api/v1/crawl/{id}/status',
      description: 'Get the status of a crawl job',
      rateLimit: '100 requests/minute',
      category: 'crawling'
    },
    {
      id: 'keywords',
      name: 'Keyword Research',
      method: 'POST',
      endpoint: '/api/v1/keywords/research',
      description: 'Research keywords and get search volume data',
      rateLimit: '50 requests/minute',
      category: 'keywords'
    },
    {
      id: 'rankings',
      name: 'Keyword Rankings',
      method: 'GET',
      endpoint: '/api/v1/keywords/rankings',
      description: 'Get keyword ranking data',
      rateLimit: '100 requests/minute',
      category: 'keywords'
    },
    {
      id: 'backlinks',
      name: 'Backlink Analysis',
      method: 'POST',
      endpoint: '/api/v1/backlinks/analyze',
      description: 'Analyze backlink profile for a domain',
      rateLimit: '20 requests/minute',
      category: 'backlinks'
    },
    {
      id: 'technical',
      name: 'Technical SEO',
      method: 'POST',
      endpoint: '/api/v1/technical/audit',
      description: 'Run technical SEO audit',
      rateLimit: '10 requests/minute',
      category: 'technical'
    }
  ];

  const apiKeys = [
    {
      id: 1,
      name: 'Production API Key',
      key: 'gc_live_1234567890abcdef',
      created: '2024-01-15',
      lastUsed: '2 hours ago',
      requests: 1247,
      status: 'active'
    },
    {
      id: 2,
      name: 'Development API Key',
      key: 'gc_test_abcdef1234567890',
      created: '2024-01-10',
      lastUsed: '1 day ago',
      requests: 89,
      status: 'active'
    }
  ];

  const codeExamples = {
    crawl: {
      curl: `curl -X POST "https://api.goldchicken.com/v1/crawl" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com",
    "depth": 3,
    "include_external": false
  }'`,
      javascript: `const response = await fetch('https://api.goldchicken.com/v1/crawl', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://example.com',
    depth: 3,
    include_external: false
  })
});

const data = await response.json();
console.log(data);`,
      python: `import requests

url = "https://api.goldchicken.com/v1/crawl"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "url": "https://example.com",
    "depth": 3,
    "include_external": False
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`
    }
  };

  const stats = [
    { name: 'API Requests', value: '12.4K', change: '+23%', icon: <BarChart3 className="w-6 h-6 text-blue-500" /> },
    { name: 'Active Keys', value: '2', change: '+1', icon: <Key className="w-6 h-6 text-green-500" /> },
    { name: 'Success Rate', value: '99.8%', change: '+0.2%', icon: <CheckCircle className="w-6 h-6 text-green-500" /> },
    { name: 'Avg Response', value: '245ms', change: '-12ms', icon: <Clock className="w-6 h-6 text-purple-500" /> }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMethodColor = (method) => {
    switch (method) {
      case 'GET': return 'text-green-600 bg-green-100';
      case 'POST': return 'text-blue-600 bg-blue-100';
      case 'PUT': return 'text-yellow-600 bg-yellow-100';
      case 'DELETE': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-50 rounded-lg">
                {stat.icon}
              </div>
              <div className={`text-sm font-medium ${
                stat.change.startsWith('+') ? 'text-green-600' : 
                stat.change.startsWith('-') && stat.name === 'Avg Response' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.name}</div>
          </div>
        ))}
      </div>

      {/* Getting Started */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting Started</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Key className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">1. Get API Key</h4>
            <p className="text-sm text-gray-600">Generate your API key from the API Keys tab</p>
          </div>
          
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">2. Make Request</h4>
            <p className="text-sm text-gray-600">Use your API key to authenticate requests</p>
          </div>
          
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">3. Get Results</h4>
            <p className="text-sm text-gray-600">Receive comprehensive SEO data in JSON format</p>
          </div>
        </div>
      </div>

      {/* Quick Example */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Example</h3>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-green-400 text-sm">
            <code>{`curl -X POST "https://api.goldchicken.com/v1/crawl" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"url": "https://example.com"}'`}</code>
          </pre>
        </div>
      </div>
    </div>
  );

  const renderEndpointsTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">API Endpoints</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {apiEndpoints.map((endpoint) => (
            <div key={endpoint.id} className="p-6 hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedEndpoint(endpoint.id)}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded ${getMethodColor(endpoint.method)}`}>
                    {endpoint.method}
                  </span>
                  <span className="font-mono text-sm text-gray-900">{endpoint.endpoint}</span>
                </div>
                <div className="text-sm text-gray-500">{endpoint.rateLimit}</div>
              </div>
              <h4 className="font-medium text-gray-900 mb-1">{endpoint.name}</h4>
              <p className="text-sm text-gray-600">{endpoint.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderKeysTab = () => (
    <div className="space-y-6">
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
            <div key={key.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{key.name}</h4>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                    {key.status}
                  </span>
                  <button className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded p-3 mb-3 flex items-center justify-between">
                <code className="text-sm text-gray-800 font-mono">
                  {showApiKey ? key.key : key.key.replace(/./g, '•')}
                </code>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => copyToClipboard(key.key)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div>
                  <span>Created: {new Date(key.created).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>Last used: {key.lastUsed}</span>
                </div>
                <div>{key.requests.toLocaleString()} requests</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPlaygroundTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">API Playground</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Request</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Endpoint</label>
                <select
                  value={selectedEndpoint}
                  onChange={(e) => setSelectedEndpoint(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {apiEndpoints.map((endpoint) => (
                    <option key={endpoint.id} value={endpoint.id}>
                      {endpoint.method} {endpoint.endpoint}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Request Body</label>
                <textarea
                  rows={8}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 font-mono text-sm"
                  defaultValue={JSON.stringify({
                    url: "https://example.com",
                    depth: 3,
                    include_external: false
                  }, null, 2)}
                />
              </div>
              
              <button className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200">
                <Play className="w-4 h-4 mr-2" />
                Send Request
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Response</h4>
            <div className="bg-gray-900 rounded-lg p-4 h-80 overflow-y-auto">
              <pre className="text-green-400 text-sm">
                <code>{JSON.stringify({
                  "id": "crawl_1234567890",
                  "status": "started",
                  "url": "https://example.com",
                  "created_at": "2024-01-20T10:30:00Z",
                  "estimated_completion": "2024-01-20T10:35:00Z"
                }, null, 2)}</code>
              </pre>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">API Access</h1>
            <p className="text-gray-600">
              Integrate Gold Chicken's powerful SEO capabilities into your applications
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
              {activeTab === 'endpoints' && renderEndpointsTab()}
              {activeTab === 'keys' && renderKeysTab()}
              {activeTab === 'playground' && renderPlaygroundTab()}
              {activeTab === 'docs' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">API Documentation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <a href="#" className="p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-3 mb-3">
                        <Book className="w-6 h-6 text-blue-500" />
                        <h4 className="font-medium text-gray-900">Complete API Reference</h4>
                      </div>
                      <p className="text-sm text-gray-600">Detailed documentation for all endpoints</p>
                    </a>
                    
                    <a href="#" className="p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-3 mb-3">
                        <Code className="w-6 h-6 text-green-500" />
                        <h4 className="font-medium text-gray-900">Code Examples</h4>
                      </div>
                      <p className="text-sm text-gray-600">Sample code in multiple languages</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIPage;