import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, X, Zap, Crown, Star } from 'lucide-react';

const ComparisonPage = () => {
  const tools = [
    {
      name: "Gold Chicken",
      logo: <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-lg"><Zap className="w-6 h-6 text-white" /></div>,
      price: "$99/month",
      rating: 5,
      pros: [
        "10x faster crawling speed",
        "Unlimited page crawling",
        "Real-time analysis",
        "Cloud-based platform",
        "Advanced team collaboration",
        "Full API access",
        "White-label reports",
        "24/7 priority support",
        "Custom integrations",
        "Advanced security features"
      ],
      cons: [
        "Newer platform (less brand recognition)"
      ],
      bestFor: "Agencies and enterprises requiring advanced features and scalability"
    },
    {
      name: "Screaming Frog",
      logo: <div className="bg-green-600 p-2 rounded-lg text-white font-bold text-sm">SF</div>,
      price: "$259/year",
      rating: 4,
      pros: [
        "Well-established tool",
        "Desktop application",
        "Good for basic crawling",
        "One-time annual payment"
      ],
      cons: [
        "Limited to 500 URLs (free version)",
        "No cloud-based features",
        "No real-time collaboration",
        "Slow crawling speed",
        "No API access",
        "Limited reporting options",
        "Desktop-only application",
        "No mobile optimization",
        "Basic user interface"
      ],
      bestFor: "Small businesses with basic crawling needs"
    },
    {
      name: "Ahrefs",
      logo: <div className="bg-blue-600 p-2 rounded-lg text-white font-bold text-sm">AH</div>,
      price: "$99/month",
      rating: 4,
      pros: [
        "Large backlink database",
        "Good keyword research",
        "Site explorer features",
        "Content gap analysis"
      ],
      cons: [
        "Expensive for full features",
        "Limited crawling capabilities",
        "No real-time updates",
        "Complex interface",
        "Limited technical SEO features",
        "No white-label options",
        "Basic team collaboration",
        "Limited API access"
      ],
      bestFor: "Content marketers focused on backlink analysis"
    },
    {
      name: "SEMrush",
      logo: <div className="bg-orange-600 p-2 rounded-lg text-white font-bold text-sm">SR</div>,
      price: "$119/month",
      rating: 4,
      pros: [
        "All-in-one marketing suite",
        "Good keyword tracking",
        "Competitor analysis",
        "Social media tools"
      ],
      cons: [
        "Very expensive",
        "Overwhelming interface",
        "Limited crawling speed",
        "No unlimited crawling",
        "Basic technical SEO audit",
        "Limited customization",
        "Complex pricing structure",
        "Resource-heavy platform"
      ],
      bestFor: "Large marketing teams needing multiple tools"
    }
  ];

  const detailedComparison = [
    {
      category: "Crawling & Analysis",
      features: [
        {
          feature: "Crawl Speed",
          goldChicken: "Ultra Fast (10x)",
          screamingFrog: "Standard",
          ahrefs: "Slow",
          semrush: "Moderate"
        },
        {
          feature: "Page Limit",
          goldChicken: "Unlimited",
          screamingFrog: "500 (free) / Unlimited (paid)",
          ahrefs: "Limited by plan",
          semrush: "Limited by plan"
        },
        {
          feature: "Real-time Analysis",
          goldChicken: "✓",
          screamingFrog: "✗",
          ahrefs: "✗",
          semrush: "✗"
        },
        {
          feature: "Cloud-based",
          goldChicken: "✓",
          screamingFrog: "✗",
          ahrefs: "✓",
          semrush: "✓"
        }
      ]
    },
    {
      category: "Technical SEO",
      features: [
        {
          feature: "Technical Audit",
          goldChicken: "Advanced",
          screamingFrog: "Basic",
          ahrefs: "Basic",
          semrush: "Moderate"
        },
        {
          feature: "Mobile Analysis",
          goldChicken: "✓",
          screamingFrog: "Limited",
          ahrefs: "✓",
          semrush: "✓"
        },
        {
          feature: "Core Web Vitals",
          goldChicken: "✓",
          screamingFrog: "✗",
          ahrefs: "✓",
          semrush: "✓"
        },
        {
          feature: "Security Monitoring",
          goldChicken: "✓",
          screamingFrog: "✗",
          ahrefs: "✗",
          semrush: "✗"
        }
      ]
    },
    {
      category: "Collaboration & Reporting",
      features: [
        {
          feature: "Team Collaboration",
          goldChicken: "Advanced",
          screamingFrog: "✗",
          ahrefs: "Basic",
          semrush: "Basic"
        },
        {
          feature: "White-label Reports",
          goldChicken: "✓",
          screamingFrog: "✗",
          ahrefs: "✗",
          semrush: "Limited"
        },
        {
          feature: "API Access",
          goldChicken: "Full API",
          screamingFrog: "✗",
          ahrefs: "Limited",
          semrush: "Limited"
        },
        {
          feature: "Custom Reports",
          goldChicken: "Unlimited",
          screamingFrog: "Basic",
          ahrefs: "Limited",
          semrush: "Limited"
        }
      ]
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              SEO Tool Comparison
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Gold Chicken compares to other popular SEO tools in the market.
            </p>
          </motion.div>
        </div>

        {/* Tool Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg p-6 relative ${
                tool.name === 'Gold Chicken' ? 'ring-4 ring-orange-100 border-2 border-orange-500' : 'border border-gray-200'
              }`}
            >
              {tool.name === 'Gold Chicken' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Crown className="w-4 h-4 mr-1" />
                    Best Choice
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  {tool.logo}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                <div className="text-2xl font-bold text-orange-600 mb-2">{tool.price}</div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < tool.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-green-700 mb-3">Pros:</h4>
                <ul className="space-y-2">
                  {tool.pros.map((pro, proIndex) => (
                    <li key={proIndex} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-red-700 mb-3">Cons:</h4>
                <ul className="space-y-2">
                  {tool.cons.map((con, conIndex) => (
                    <li key={conIndex} className="flex items-start text-sm">
                      <X className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                <p className="text-sm text-gray-600">{tool.bestFor}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Detailed Feature Comparison
          </h2>

          {detailedComparison.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 font-medium text-gray-900 border">Feature</th>
                      <th className="text-center p-4 font-medium text-gray-900 border bg-orange-50">Gold Chicken</th>
                      <th className="text-center p-4 font-medium text-gray-900 border">Screaming Frog</th>
                      <th className="text-center p-4 font-medium text-gray-900 border">Ahrefs</th>
                      <th className="text-center p-4 font-medium text-gray-900 border">SEMrush</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.features.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="hover:bg-gray-50">
                        <td className="p-4 font-medium text-gray-900 border">{feature.feature}</td>
                        <td className="p-4 text-center border bg-orange-50">
                          <span className="text-green-600 font-semibold">
                            {feature.goldChicken}
                          </span>
                        </td>
                        <td className="p-4 text-center text-gray-600 border">{feature.screamingFrog}</td>
                        <td className="p-4 text-center text-gray-600 border">{feature.ahrefs}</td>
                        <td className="p-4 text-center text-gray-600 border">{feature.semrush}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Winner Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl p-12 text-center text-white"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full">
              <Crown className="w-12 h-12 text-orange-500" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            The Clear Winner: Gold Chicken
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            With superior speed, unlimited crawling, advanced features, and competitive pricing, 
            Gold Chicken is the obvious choice for modern SEO professionals.
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

export default ComparisonPage;