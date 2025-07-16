import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  BarChart3, 
  Link as LinkIcon, 
  Shield, 
  Globe, 
  Users,
  TrendingUp,
  CheckCircle,
  Zap,
  Clock,
  Database,
  Gauge,
  Target,
  Eye,
  AlertTriangle,
  Settings,
  Download,
  Share2
} from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      category: "Site Crawling & Analysis",
      icon: <Search className="w-8 h-8 text-orange-500" />,
      items: [
        {
          name: "Lightning-Fast Crawler",
          description: "Crawl unlimited pages at 10x the speed of traditional tools",
          icon: <Gauge className="w-6 h-6 text-blue-500" />
        },
        {
          name: "Real-time Analysis",
          description: "Get instant insights as your site is being crawled",
          icon: <Clock className="w-6 h-6 text-green-500" />
        },
        {
          name: "Technical SEO Audit",
          description: "Comprehensive technical analysis with actionable recommendations",
          icon: <Settings className="w-6 h-6 text-purple-500" />
        },
        {
          name: "Mobile-First Indexing",
          description: "Analyze your site from mobile and desktop perspectives",
          icon: <Globe className="w-6 h-6 text-indigo-500" />
        }
      ]
    },
    {
      category: "Keyword Intelligence",
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      items: [
        {
          name: "Advanced Keyword Research",
          description: "Discover high-value keywords with our proprietary database",
          icon: <Target className="w-6 h-6 text-orange-500" />
        },
        {
          name: "Rank Tracking",
          description: "Monitor your rankings across all major search engines",
          icon: <TrendingUp className="w-6 h-6 text-green-500" />
        },
        {
          name: "Competitor Analysis",
          description: "Spy on your competitors' keyword strategies",
          icon: <Eye className="w-6 h-6 text-red-500" />
        },
        {
          name: "SERP Features Tracking",
          description: "Track featured snippets, local packs, and other SERP features",
          icon: <Database className="w-6 h-6 text-blue-500" />
        }
      ]
    },
    {
      category: "Backlink Analysis",
      icon: <LinkIcon className="w-8 h-8 text-green-500" />,
      items: [
        {
          name: "Comprehensive Link Database",
          description: "Access our database of 50+ billion backlinks",
          icon: <Database className="w-6 h-6 text-purple-500" />
        },
        {
          name: "Link Quality Assessment",
          description: "Evaluate link quality with our advanced scoring system",
          icon: <Shield className="w-6 h-6 text-green-500" />
        },
        {
          name: "Toxic Link Detection",
          description: "Identify and disavow harmful backlinks automatically",
          icon: <AlertTriangle className="w-6 h-6 text-red-500" />
        },
        {
          name: "Link Building Opportunities",
          description: "Discover new link building prospects in your niche",
          icon: <Target className="w-6 h-6 text-blue-500" />
        }
      ]
    },
    {
      category: "Reporting & Collaboration",
      icon: <Users className="w-8 h-8 text-purple-500" />,
      items: [
        {
          name: "Custom Reports",
          description: "Create beautiful, branded reports for clients",
          icon: <Download className="w-6 h-6 text-orange-500" />
        },
        {
          name: "Team Collaboration",
          description: "Work together with unlimited team members",
          icon: <Users className="w-6 h-6 text-blue-500" />
        },
        {
          name: "White-label Solutions",
          description: "Brand the platform with your own logo and colors",
          icon: <Settings className="w-6 h-6 text-purple-500" />
        },
        {
          name: "API Access",
          description: "Integrate with your existing tools and workflows",
          icon: <Share2 className="w-6 h-6 text-green-500" />
        }
      ]
    }
  ];

  const comparisons = [
    {
      feature: "Crawl Speed",
      goldChicken: "10x faster",
      screamingFrog: "Standard",
      ahrefs: "Slow",
      semrush: "Moderate"
    },
    {
      feature: "Cloud-based",
      goldChicken: "✓",
      screamingFrog: "✗",
      ahrefs: "✓",
      semrush: "✓"
    },
    {
      feature: "Real-time Updates",
      goldChicken: "✓",
      screamingFrog: "✗",
      ahrefs: "Limited",
      semrush: "Limited"
    },
    {
      feature: "Team Collaboration",
      goldChicken: "✓",
      screamingFrog: "✗",
      ahrefs: "Basic",
      semrush: "Basic"
    },
    {
      feature: "Unlimited Crawling",
      goldChicken: "✓",
      screamingFrog: "500 URLs (free)",
      ahrefs: "Limited",
      semrush: "Limited"
    },
    {
      feature: "API Access",
      goldChicken: "Full API",
      screamingFrog: "Limited",
      ahrefs: "Basic",
      semrush: "Basic"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern SEO
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to dominate search rankings, all in one comprehensive platform.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        {features.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-4">
                {category.icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {category.category}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-orange-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How We Stack Up Against the Competition
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">Gold Chicken</th>
                  <th className="px-6 py-4 text-center font-semibold">Screaming Frog</th>
                  <th className="px-6 py-4 text-center font-semibold">Ahrefs</th>
                  <th className="px-6 py-4 text-center font-semibold">SEMrush</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisons.map((comparison, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {comparison.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 font-semibold">
                        {comparison.goldChicken}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      {comparison.screamingFrog}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      {comparison.ahrefs}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      {comparison.semrush}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience the Future of SEO?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of professionals who've already made the switch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200">
              View Pricing
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesPage;