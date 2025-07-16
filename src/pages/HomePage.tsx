import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Search, 
  BarChart3, 
  Link as LinkIcon, 
  Shield, 
  Globe, 
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Target,
  Clock,
  Database,
  Gauge
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />,
      title: "Advanced Site Crawling",
      description: "Crawl unlimited pages with our lightning-fast crawler. Get comprehensive technical SEO insights instantly.",
      stats: "10x faster than Screaming Frog"
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />,
      title: "Real-time Analytics",
      description: "Monitor your SEO performance with live dashboards and instant notifications for critical issues.",
      stats: "Real-time updates"
    },
    {
      icon: <LinkIcon className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />,
      title: "Backlink Intelligence",
      description: "Discover and analyze backlinks with our proprietary database of 50+ billion links.",
      stats: "50B+ backlinks tracked"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />,
      title: "Security Monitoring",
      description: "Detect security vulnerabilities and protect your site from SEO-damaging threats.",
      stats: "24/7 monitoring"
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500" />,
      title: "Multi-language Support",
      description: "Analyze sites in 50+ languages with advanced internationalization features.",
      stats: "50+ languages"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />,
      title: "Team Collaboration",
      description: "Share insights, assign tasks, and collaborate with your team in real-time.",
      stats: "Unlimited team members"
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
      feature: "API Access",
      goldChicken: "Full API",
      screamingFrog: "Limited",
      ahrefs: "Basic",
      semrush: "Basic"
    },
    {
      feature: "Custom Reports",
      goldChicken: "Unlimited",
      screamingFrog: "Basic",
      ahrefs: "Limited",
      semrush: "Limited"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "SEO Director at TechCorp",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Gold Chicken has completely transformed our SEO workflow. The speed and accuracy are unmatched."
    },
    {
      name: "Michael Chen",
      role: "Digital Marketing Manager",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Finally, an SEO tool that actually delivers on its promises. The real-time insights are game-changing."
    },
    {
      name: "Emily Rodriguez",
      role: "Founder of SEO Agency",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Our clients love the detailed reports and the collaborative features. It's everything we needed."
    }
  ];

  const stats = [
    { number: "50M+", label: "Websites Analyzed" },
    { number: "100K+", label: "Happy Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f97316%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-xs sm:text-sm font-medium mb-4">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                #1 SEO Tool of 2025
              </span>
              
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  SEO Analysis
                </span>
                <br />
                <span className="text-gray-900">Redefined</span>
              </h1>
              
              <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                The most powerful cloud-based SEO tool that makes Screaming Frog look outdated. 
                Analyze, optimize, and dominate search rankings with our advanced AI-powered platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
            >
              <Link
                to="/signup"
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 transform hover:scale-105 shadow-lg text-center"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="group flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Watch Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto px-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-3xl font-bold text-orange-600 mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-xs sm:text-base text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Gold Chicken Beats Every Other SEO Tool
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We've rebuilt SEO analysis from the ground up with modern technology and user experience in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-orange-200"
              >
                <div className="mb-4 sm:mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {feature.description}
                </p>
                <div className="text-xs sm:text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block">
                  {feature.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              How We Compare to the Competition
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              See why thousands of SEO professionals are switching to Gold Chicken from other tools.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">Feature</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-center font-semibold text-sm sm:text-base">Gold Chicken</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-center font-semibold text-sm sm:text-base">Screaming Frog</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-center font-semibold text-sm sm:text-base">Ahrefs</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-center font-semibold text-sm sm:text-base">SEMrush</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisons.map((comparison, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">
                        {comparison.feature}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                        <span className="text-green-600 font-semibold text-sm sm:text-base">
                          {comparison.goldChicken}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-600 text-sm sm:text-base">
                        {comparison.screamingFrog}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-600 text-sm sm:text-base">
                        {comparison.ahrefs}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-600 text-sm sm:text-base">
                        {comparison.semrush}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by SEO Professionals Worldwide
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied users who've transformed their SEO workflow with Gold Chicken.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-sm sm:text-base">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-12 sm:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12">
            Start free, upgrade when you're ready. No hidden fees, no long-term contracts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">$29</div>
              <div className="text-gray-600 mb-6">per month</div>
              <ul className="space-y-3 text-left text-sm sm:text-base">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Up to 10,000 pages crawled</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Basic keyword tracking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Email support</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-6 sm:p-8 rounded-xl shadow-lg text-white transform scale-105">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Professional</h3>
              <div className="text-3xl sm:text-4xl font-bold mb-2">$99</div>
              <div className="text-orange-100 mb-6">per month</div>
              <ul className="space-y-3 text-left text-sm sm:text-base">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white mr-2 flex-shrink-0" />
                  <span>Unlimited crawling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white mr-2 flex-shrink-0" />
                  <span>Advanced keyword research</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white mr-2 flex-shrink-0" />
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white mr-2 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">$299</div>
              <div className="text-gray-600 mb-6">per month</div>
              <ul className="space-y-3 text-left text-sm sm:text-base">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Everything in Professional</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>White-label reports</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>API access</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Dedicated support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 sm:mt-12">
            <Link
              to="/pricing"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 text-sm sm:text-base"
            >
              View Full Pricing Details
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your SEO?
          </h2>
          <p className="text-lg sm:text-xl text-orange-100 mb-6 sm:mb-8">
            Join thousands of professionals who've already made the switch to Gold Chicken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
            >
              Start Your Free Trial
            </Link>
            <Link
              to="/features"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 text-sm sm:text-base"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;