import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Link as LinkIcon, 
  Mail, 
  Globe, 
  Users, 
  Star,
  Filter,
  Download,
  Play,
  Plus,
  Eye,
  ExternalLink,
  CheckCircle,
  Clock,
  AlertTriangle,
  Target,
  BarChart3,
  TrendingUp,
  Shield
} from 'lucide-react';

const LinkProspectingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStrategy, setSelectedStrategy] = useState('competitor');
  const [isSearching, setIsSearching] = useState(false);

  const prospectingStrategies = [
    { id: 'competitor', name: 'Competitor Backlinks', description: 'Find sites linking to competitors' },
    { id: 'broken', name: 'Broken Link Building', description: 'Find broken links to replace' },
    { id: 'resource', name: 'Resource Pages', description: 'Find relevant resource pages' },
    { id: 'guest', name: 'Guest Post Opportunities', description: 'Find guest posting opportunities' },
    { id: 'unlinked', name: 'Unlinked Mentions', description: 'Find unlinked brand mentions' }
  ];

  const linkProspects = [
    {
      id: 1,
      domain: 'techblog.com',
      url: 'https://techblog.com/seo-tools-review',
      title: 'Best SEO Tools for 2024',
      dr: 78,
      traffic: 45000,
      contactEmail: 'editor@techblog.com',
      contactName: 'Sarah Johnson',
      socialMedia: {
        twitter: '@techblog',
        linkedin: 'techblog-official'
      },
      relevance: 95,
      difficulty: 'medium',
      status: 'new',
      lastContact: null,
      notes: '',
      tags: ['technology', 'seo', 'tools']
    },
    {
      id: 2,
      domain: 'marketinginsights.net',
      url: 'https://marketinginsights.net/digital-marketing-resources',
      title: 'Digital Marketing Resources',
      dr: 65,
      traffic: 32000,
      contactEmail: 'hello@marketinginsights.net',
      contactName: 'Mike Chen',
      socialMedia: {
        twitter: '@marketinginsights',
        linkedin: 'marketing-insights'
      },
      relevance: 88,
      difficulty: 'easy',
      status: 'contacted',
      lastContact: '2024-01-15',
      notes: 'Responded positively, waiting for follow-up',
      tags: ['marketing', 'resources', 'digital']
    },
    {
      id: 3,
      domain: 'seoexpert.org',
      url: 'https://seoexpert.org/broken-link-checker',
      title: 'Broken Link Checker Tool',
      dr: 82,
      traffic: 28000,
      contactEmail: 'contact@seoexpert.org',
      contactName: 'Emily Rodriguez',
      socialMedia: {
        twitter: '@seoexpert',
        linkedin: 'seo-expert-org'
      },
      relevance: 92,
      difficulty: 'hard',
      status: 'rejected',
      lastContact: '2024-01-10',
      notes: 'Not accepting guest posts currently',
      tags: ['seo', 'tools', 'expert']
    }
  ];

  const outreachTemplates = [
    {
      id: 1,
      name: 'Broken Link Outreach',
      subject: 'Broken link on {page_title}',
      template: `Hi {contact_name},

I was browsing your excellent article "{page_title}" and noticed a broken link to {broken_url}.

I have a similar resource that might be a good replacement: {your_url}

Would you consider updating the link? I'd be happy to help with any other broken links I might find.

Best regards,
{your_name}`
    },
    {
      id: 2,
      name: 'Resource Page Outreach',
      subject: 'Resource suggestion for {page_title}',
      template: `Hi {contact_name},

I came across your resource page "{page_title}" and found it incredibly helpful.

I noticed you feature tools like {existing_tools}. I thought you might be interested in {your_tool}, which offers {unique_value}.

Here's the link: {your_url}

Would this be a good fit for your resource page?

Thanks for your time,
{your_name}`
    }
  ];

  const campaignStats = [
    { name: 'Total Prospects', value: 247, change: '+23' },
    { name: 'Contacted', value: 89, change: '+12' },
    { name: 'Response Rate', value: '34%', change: '+5%' },
    { name: 'Links Acquired', value: 18, change: '+6' }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'text-blue-600 bg-blue-100';
      case 'contacted': return 'text-yellow-600 bg-yellow-100';
      case 'responded': return 'text-green-600 bg-green-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      case 'acquired': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getDRColor = (dr) => {
    if (dr >= 70) return 'text-green-600';
    if (dr >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 3000);
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Link Prospecting</h1>
            <p className="text-gray-600">
              Find high-quality link building opportunities and manage outreach campaigns
            </p>
          </motion.div>
        </div>

        {/* Search Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
            <div className="lg:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search Query
              </label>
              <input
                type="text"
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter competitor domain, keyword, or topic"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Strategy
              </label>
              <select
                value={selectedStrategy}
                onChange={(e) => setSelectedStrategy(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {prospectingStrategies.map((strategy) => (
                  <option key={strategy.id} value={strategy.id}>
                    {strategy.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="flex justify-end mt-4">
            <div className="flex gap-3">
              <button
                onClick={handleSearch}
                disabled={!searchQuery || isSearching}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Play className="w-5 h-5 mr-2" />
                {isSearching ? 'Searching...' : 'Find Prospects'}
              </button>
              <button className="flex items-center px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Export
              </button>
            </div>
          </div>
        </motion.div>

        {/* Campaign Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {campaignStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <LinkIcon className="w-6 h-6 text-orange-500" />
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

        {/* Prospecting Strategies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Link Building Strategies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {prospectingStrategies.map((strategy) => (
              <div
                key={strategy.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  selectedStrategy === strategy.id
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-orange-300'
                }`}
                onClick={() => setSelectedStrategy(strategy.id)}
              >
                <h4 className="font-medium text-gray-900 mb-2">{strategy.name}</h4>
                <p className="text-sm text-gray-600">{strategy.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Link Prospects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
        >
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Link Prospects</h3>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Filter & Sort</span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Website</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">DR</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Traffic</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Relevance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Difficulty</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {linkProspects.map((prospect) => (
                  <tr key={prospect.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900">{prospect.domain}</div>
                        <div className="text-sm text-gray-600 max-w-xs truncate">{prospect.title}</div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {prospect.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-semibold ${getDRColor(prospect.dr)}`}>
                        {prospect.dr}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {prospect.traffic.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="font-medium text-gray-900">{prospect.contactName}</div>
                        <div className="text-gray-600">{prospect.contactEmail}</div>
                        <div className="flex space-x-2 mt-1">
                          {prospect.socialMedia.twitter && (
                            <span className="text-blue-500 text-xs">{prospect.socialMedia.twitter}</span>
                          )}
                          {prospect.socialMedia.linkedin && (
                            <span className="text-blue-700 text-xs">{prospect.socialMedia.linkedin}</span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full"
                            style={{ width: `${prospect.relevance}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{prospect.relevance}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(prospect.difficulty)}`}>
                        {prospect.difficulty}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(prospect.status)}`}>
                        {prospect.status}
                      </span>
                      {prospect.lastContact && (
                        <div className="text-xs text-gray-500 mt-1">
                          Last: {new Date(prospect.lastContact).toLocaleDateString()}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Mail className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
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

        {/* Outreach Templates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Outreach Templates</h3>
            <button className="flex items-center px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              New Template
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {outreachTemplates.map((template) => (
              <div key={template.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{template.name}</h4>
                  <div className="flex items-center space-x-2">
                    <button className="text-blue-600 hover:text-blue-700 text-sm">Edit</button>
                    <button className="text-green-600 hover:text-green-700 text-sm">Use</button>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="text-sm font-medium text-gray-700 mb-1">Subject:</div>
                  <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                    {template.subject}
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Template:</div>
                  <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded max-h-32 overflow-y-auto">
                    <pre className="whitespace-pre-wrap font-sans">{template.template}</pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LinkProspectingPage;