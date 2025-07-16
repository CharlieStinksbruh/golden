import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, X, Zap, Users, Globe, BarChart3, Shield, Clock } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "forever",
      description: "Perfect for trying out Gold Chicken",
      features: [
        "500 pages crawled per month",
        "Basic SEO audit",
        "5 keyword tracking",
        "Email support",
        "Basic reports",
        "1 project"
      ],
      limitations: [
        "No API access",
        "No team collaboration",
        "No custom reports",
        "No priority support"
      ],
      cta: "Get Started Free",
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Starter",
      price: "29",
      period: "per month",
      description: "Great for small businesses and solo professionals",
      features: [
        "10,000 pages crawled per month",
        "Complete SEO audit",
        "100 keyword tracking",
        "Email support",
        "Advanced reports",
        "5 projects",
        "Competitor analysis",
        "Site monitoring"
      ],
      limitations: [
        "No API access",
        "No team collaboration",
        "No white-label reports"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Professional",
      price: "99",
      period: "per month",
      description: "Perfect for growing agencies and teams",
      features: [
        "Unlimited pages crawled",
        "Complete SEO audit suite",
        "1,000 keyword tracking",
        "Priority support",
        "Custom reports",
        "Unlimited projects",
        "Team collaboration (5 members)",
        "API access",
        "White-label reports",
        "Advanced competitor analysis",
        "Real-time monitoring",
        "Custom integrations"
      ],
      limitations: [],
      cta: "Start Free Trial",
      popular: true,
      color: "border-orange-500"
    },
    {
      name: "Enterprise",
      price: "299",
      period: "per month",
      description: "For large organizations with advanced needs",
      features: [
        "Everything in Professional",
        "Unlimited keyword tracking",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom onboarding",
        "Unlimited team members",
        "Advanced API access",
        "Custom integrations",
        "Priority feature requests",
        "Advanced security",
        "SSO integration",
        "Custom SLA"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
      color: "border-gray-200"
    }
  ];

  const features = [
    {
      category: "Crawling & Analysis",
      items: [
        { name: "Pages crawled per month", free: "500", starter: "10,000", professional: "Unlimited", enterprise: "Unlimited" },
        { name: "Crawl speed", free: "Standard", starter: "Fast", professional: "Ultra Fast", enterprise: "Ultra Fast" },
        { name: "Technical SEO audit", free: "Basic", starter: "Complete", professional: "Advanced", enterprise: "Advanced" },
        { name: "Site monitoring", free: "✗", starter: "✓", professional: "✓", enterprise: "✓" },
        { name: "Real-time updates", free: "✗", starter: "✗", professional: "✓", enterprise: "✓" }
      ]
    },
    {
      category: "Keywords & Rankings",
      items: [
        { name: "Keyword tracking", free: "5", starter: "100", professional: "1,000", enterprise: "Unlimited" },
        { name: "Rank tracking", free: "✗", starter: "✓", professional: "✓", enterprise: "✓" },
        { name: "Competitor analysis", free: "✗", starter: "Basic", professional: "Advanced", enterprise: "Advanced" },
        { name: "Keyword research", free: "✗", starter: "✓", professional: "✓", enterprise: "✓" }
      ]
    },
    {
      category: "Reporting & Collaboration",
      items: [
        { name: "Reports", free: "Basic", starter: "Advanced", professional: "Custom", enterprise: "Custom" },
        { name: "Team members", free: "1", starter: "1", professional: "5", enterprise: "Unlimited" },
        { name: "Projects", free: "1", starter: "5", professional: "Unlimited", enterprise: "Unlimited" },
        { name: "White-label reports", free: "✗", starter: "✗", professional: "✓", enterprise: "✓" },
        { name: "API access", free: "✗", starter: "✗", professional: "✓", enterprise: "Advanced" }
      ]
    },
    {
      category: "Support & Security",
      items: [
        { name: "Support", free: "Email", starter: "Email", professional: "Priority", enterprise: "24/7 Phone" },
        { name: "SLA", free: "✗", starter: "✗", professional: "✗", enterprise: "Custom" },
        { name: "SSO integration", free: "✗", starter: "✗", professional: "✗", enterprise: "✓" },
        { name: "Advanced security", free: "✗", starter: "✗", professional: "✗", enterprise: "✓" }
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and you'll be charged/credited on a pro-rated basis."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, all paid plans come with a 14-day free trial. No credit card required to start."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "If you exceed your crawl limits, we'll notify you and give you options to upgrade or purchase additional credits."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee on all paid plans. No questions asked."
    },
    {
      question: "Can I cancel at any time?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your SEO needs. All plans include a 14-day free trial.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg border-2 ${plan.color} p-8 relative ${
                plan.popular ? 'ring-4 ring-orange-100' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  ${plan.price}
                  <span className="text-lg font-normal text-gray-500">/{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation, limitationIndex) => (
                  <li key={limitationIndex} className="flex items-start">
                    <X className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500">{limitation}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/signup"
                className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Detailed Feature Comparison
          </h2>
          
          {features.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                {category.category === "Crawling & Analysis" && <Search className="w-5 h-5 mr-2 text-orange-500" />}
                {category.category === "Keywords & Rankings" && <BarChart3 className="w-5 h-5 mr-2 text-orange-500" />}
                {category.category === "Reporting & Collaboration" && <Users className="w-5 h-5 mr-2 text-orange-500" />}
                {category.category === "Support & Security" && <Shield className="w-5 h-5 mr-2 text-orange-500" />}
                {category.category}
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 font-medium text-gray-900">Feature</th>
                      <th className="text-center p-4 font-medium text-gray-900">Free</th>
                      <th className="text-center p-4 font-medium text-gray-900">Starter</th>
                      <th className="text-center p-4 font-medium text-gray-900">Professional</th>
                      <th className="text-center p-4 font-medium text-gray-900">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {category.items.map((item, itemIndex) => (
                      <tr key={itemIndex} className="hover:bg-gray-50">
                        <td className="p-4 font-medium text-gray-900">{item.name}</td>
                        <td className="p-4 text-center text-gray-700">{item.free}</td>
                        <td className="p-4 text-center text-gray-700">{item.starter}</td>
                        <td className="p-4 text-center text-gray-700">{item.professional}</td>
                        <td className="p-4 text-center text-gray-700">{item.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;