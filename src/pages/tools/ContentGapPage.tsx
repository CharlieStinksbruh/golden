import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Target, 
  TrendingUp, 
  FileText, 
  Eye, 
  BarChart3,
  Globe,
  Users,
  Clock,
  Download,
  Play,
  Plus,
  Filter,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Zap
} from 'lucide-react';

const ContentGapPage = () => {
  const [yourDomain, setYourDomain] = useState('');
  const [competitors, setCompetitors] = useState(['']);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const contentGaps = [
    {
      keyword: "SEO audit checklist",
      volume: 8900,
      difficulty: 45,
      yourRank: null,
      competitors: [
        { domain: "competitor1.com", rank: 3 },
        { domain: "competitor2.com", rank: 7 },
        { domain: "competitor3.com", rank: 12 }
      ],
      opportunity: "high",
      intent: "informational",
      suggestedContent: "Comprehensive SEO audit checklist guide"
    },
    {
      keyword: "technical SEO best practices",
      volume: 12400,
      difficulty: 52,
      yourRank: null,
      competitors: [
        { domain: "competitor1.com", rank: 2 },
        { domain: "competitor2.com", rank: 5 },
        { domain: "competitor3.com", rank: 9 }
      ],
      opportunity: "high",
      intent: "informational",
      suggestedContent: "Technical SEO best practices guide"
    },
    {
      keyword: "local SEO strategies",
      volume: 6700,
      difficulty: 38,
      yourRank: 15,
      competitors: [
        { domain: "competitor1.com", rank: 1 },
        { domain: "competitor2.com", rank: 4 },
        { domain: "competitor3.com", rank: 8 }
      ],
      opportunity: "medium",
      intent: "informational",
      suggestedContent: "Local SEO strategies for small businesses"
    },
    {
      keyword: "SEO tools comparison",
      volume: 15600,
      difficulty: 68,
      yourRank: 8,
      competitors: [
        { domain: "competitor1.com", rank: 2 },
        { domain: "competitor2.com", rank: 3 },
        { domain: "competitor3.com", rank: 6 }
      ],
      opportunity: "medium",
      intent: "commercial",
      suggestedContent: "Comprehensive SEO tools comparison"
    },
    {
      keyword: "mobile SEO optimization",
      volume: 9200,
      difficulty: 41,
      yourRank: null,
      competitors: [
        { domain: "competitor1.com", rank: 4 },
        { domain: "competitor2.com", rank: 6 },
        { domain: "competitor3.com", rank: 11 }
      ],
      opportunity: "high",
      intent: "informational",
      suggestedContent: "Mobile SEO optimization guide"
    }
  ];

  const topicClusters = [
    {
      mainTopic: "Technical SEO",
      keywords: 45,
      volume: 125000,
      gaps: 12,
      pillarContent: "Complete Technical SEO Guide",
      supportingContent: [
        "Site Speed Optimization",
        "Schema Markup Implementation",
        "XML Sitemap Best Practices",
        "Robots.txt Configuration"
      ]
    },
    {
      mainTopic: "Local SEO",
      keywords: 32,
      volume: 89000,
      gaps: 8,
      pillarContent: "Local SEO Mastery Guide",
      supportingContent: [
        "Google My Business Optimization",
        "Local Citation Building",
        "Review Management",
        "Local Link Building"
      ]
    },
    {
      mainTopic: "Content Marketing",
      keywords: 28,
      volume: 156000,
      gaps: 15,
      pillarContent: "Content Marketing for SEO",
      supportingContent: [
        "Keyword Research for Content",
        "Content Optimization",
        "Content Distribution",
        "Content Performance Tracking"
      ]
    }
  ];

  const competitorContent = [
    {
      domain: "competitor1.com",
      totalContent: 1247,
      topPerforming: [
        { title: "Ultimate SEO Guide 2024", traffic: 45000, keywords: 234 },
        { title: "Technical SEO Checklist", traffic: 32000, keywords: 189 },
        { title: "Local SEO Best Practices", traffic: 28000, keywords: 156 }
      ],
      contentGaps: 23,
      avgWordCount: 2400
    },
    {
      domain: "competitor2.com",
      totalContent: 892,
      topPerforming: [
        { title: "SEO Tools Review", traffic: 38000, keywords: 198 },
        { title: "Link Building Strategies", traffic: 29000, keywords: 167 },
        { title: "On-Page SEO Guide", traffic: 25000, keywords: 143 }
      ],
      contentGaps: 18,
      avgWordCount: 1800
    }
  ];

  const getOpportunityColor = (opportunity) => {
    switch (opportunity) {
      case 'high': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getIntentColor = (intent) => {
    switch (intent) {
      case 'informational': return 'text-blue-600 bg-blue-100';
      case 'commercial': return 'text-purple-600 bg-purple-100';
      case 'transactional': return 'text-green-600 bg-green-100';
      case 'navigational': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const addCompetitor = () => {
    setCompetitors([...competitors, '']);
  };

  const updateCompetitor = (index, value) => {
    const newCompetitors = [...competitors];
    newCompetitors[index] = value;
    setCompetitors(newCompetitors);
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Gap Analysis</h1>
            <p className="text-gray-600">
              Discover content opportunities and gaps in your SEO strategy
            </p>
          </motion.div>
        </div>

        {/* Analysis Setup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Setup Analysis</h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="yourDomain" className="block text-sm font-medium text-gray-700 mb-2">
                Your Domain
              </label>
              <input
                type="text"
                id="yourDomain"
                value={yourDomain}
                onChange={(e) => setYourDomain(e.target.value)}
                placeholder="yourdomain.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Competitor Domains
              </label>
              <div className="space-y-2">
                {competitors.map((competitor, index) => (
                  <input
                    key={index}
                    type="text"
                    value={competitor}
                    onChange={(e) => updateCompetitor(index, e.target.value)}
                    placeholder={`competitor${index + 1}.com`}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                ))}
                <button
                  onClick={addCompetitor}
                  className="flex items-center px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Competitor
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mt-6">
            <div className="flex gap-3">
              <button
                onClick={handleAnalyze}
                disabled={!yourDomain || isAnalyzing}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Play className="w-5 h-5 mr-2" />
                {isAnalyzing ? 'Analyzing...' : 'Analyze Gaps'}
              </button>
              <button className="flex items-center px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Export
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: <Target className="w-6 h-6 text-blue-500" />, label: "Content Gaps Found", value: "47", change: "+12" },
            { icon: <TrendingUp className="w-6 h-6 text-green-500" />, label: "High Opportunity", value: "23", change: "+8" },
            { icon: <FileText className="w-6 h-6 text-purple-500" />, label: "Topic Clusters", value: "8", change: "+3" },
            { icon: <Eye className="w-6 h-6 text-orange-500" />, label: "Potential Traffic", value: "125K", change: "+18%" }
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
                <div className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Content Gaps Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
        >
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Content Gap Opportunities</h3>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Filter by opportunity</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Keyword</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Volume</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Your Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Competitors</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Opportunity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Intent</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Suggested Content</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {contentGaps.map((gap, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{gap.keyword}</div>
                      <div className="text-sm text-gray-500">Difficulty: {gap.difficulty}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {gap.volume.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {gap.yourRank ? (
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          #{gap.yourRank}
                        </span>
                      ) : (
                        <span className="text-sm text-gray-500">Not ranking</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        {gap.competitors.slice(0, 3).map((comp, compIndex) => (
                          <div key={compIndex} className="flex items-center text-xs">
                            <span className="w-16 truncate text-gray-600">{comp.domain}</span>
                            <span className="ml-2 px-1 py-0.5 bg-gray-100 text-gray-700 rounded">
                              #{comp.rank}
                            </span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getOpportunityColor(gap.opportunity)}`}>
                        {gap.opportunity}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getIntentColor(gap.intent)}`}>
                        {gap.intent}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs">
                        {gap.suggestedContent}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Topic Clusters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Topic Cluster Opportunities</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {topicClusters.map((cluster, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{cluster.mainTopic}</h4>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">
                    {cluster.gaps} gaps
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">{cluster.keywords}</div>
                    <div className="text-sm text-gray-600">Keywords</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">{cluster.volume.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Volume</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                    <Lightbulb className="w-4 h-4 text-yellow-500 mr-1" />
                    Pillar Content
                  </h5>
                  <div className="text-sm text-gray-700 bg-yellow-50 p-2 rounded">
                    {cluster.pillarContent}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Supporting Content</h5>
                  <ul className="space-y-1">
                    {cluster.supportingContent.map((content, contentIndex) => (
                      <li key={contentIndex} className="text-sm text-gray-600 flex items-center">
                        <ArrowRight className="w-3 h-3 mr-2 text-gray-400" />
                        {content}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Competitor Content Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Competitor Content Analysis</h3>
          <div className="space-y-6">
            {competitorContent.map((competitor, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{competitor.domain}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{competitor.totalContent} articles</span>
                    <span>{competitor.avgWordCount} avg words</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded">
                      {competitor.contentGaps} gaps
                    </span>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Top Performing Content</h5>
                  <div className="space-y-2">
                    {competitor.topPerforming.map((content, contentIndex) => (
                      <div key={contentIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">{content.title}</div>
                          <div className="text-sm text-gray-600">{content.keywords} keywords</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-green-600">{content.traffic.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">monthly traffic</div>
                        </div>
                      </div>
                    ))}
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

export default ContentGapPage;