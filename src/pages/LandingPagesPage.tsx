import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  BarChart3, 
  Link as LinkIcon, 
  Shield, 
  Globe, 
  Users,
  TrendingUp,
  Zap,
  Target,
  Eye,
  FileText,
  Smartphone,
  Code,
  Database,
  Settings,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Download,
  Gauge,
  AlertTriangle,
  Activity,
  PieChart,
  Layers,
  Server,
  Clock
} from 'lucide-react';

const LandingPagesPage = () => {
  const landingPages = [
    {
      id: 1,
      title: "SEO Audit Tool",
      description: "Comprehensive website analysis and technical SEO audit platform",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Technical SEO",
      features: ["Complete site audit", "Technical issue detection", "Performance analysis", "Mobile optimization"],
      cta: "Start Free Audit",
      path: "/tools/technical"
    },
    {
      id: 2,
      title: "Keyword Research Platform",
      description: "Advanced keyword discovery and ranking analysis for SEO professionals",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Keyword Research",
      features: ["Keyword discovery", "Competition analysis", "Search volume data", "Ranking tracking"],
      cta: "Find Keywords",
      path: "/tools/keywords"
    },
    {
      id: 3,
      title: "Backlink Analysis Suite",
      description: "Monitor and analyze your backlink profile with comprehensive link intelligence",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Link Building",
      features: ["Backlink monitoring", "Link quality analysis", "Competitor research", "Disavow tool"],
      cta: "Analyze Backlinks",
      path: "/tools/backlinks"
    },
    {
      id: 4,
      title: "Page Speed Optimizer",
      description: "Analyze and optimize your website's performance for better user experience",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Performance",
      features: ["Speed analysis", "Core Web Vitals", "Performance recommendations", "Mobile testing"],
      cta: "Test Speed",
      path: "/tools/pagespeed"
    },
    {
      id: 5,
      title: "SERP Analysis Tool",
      description: "Analyze search engine results pages and track SERP features",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "SERP Analysis",
      features: ["SERP tracking", "Feature analysis", "Competitor monitoring", "Ranking insights"],
      cta: "Analyze SERP",
      path: "/tools/serp"
    },
    {
      id: 6,
      title: "Content Gap Analyzer",
      description: "Discover content opportunities and gaps in your SEO strategy",
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Content Strategy",
      features: ["Content analysis", "Gap identification", "Opportunity discovery", "Competitor comparison"],
      cta: "Find Gaps",
      path: "/tools/content-gap"
    }
  ];

  const categories = [
    { name: "All", count: landingPages.length },
    { name: "Technical SEO", count: 2 },
    { name: "Keyword Research", count: 1 },
    { name: "Link Building", count: 1 },
    { name: "Performance", count: 1 },
    { name: "Content Strategy", count: 1 }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "SEO Director",
      company: "TechCorp",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "These landing pages converted 40% better than our previous tools. The user experience is exceptional."
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      company: "GrowthCo",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "The specialized landing pages helped us target specific SEO needs and improved our conversion rates significantly."
    }
  ];

  const stats = [
    { number: "2.5M+", label: "Page Views" },
    { number: "45%", label: "Conversion Rate" },
    { number: "98%", label: "User Satisfaction" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  Specialized
                </span>
                <br />
                <span className="text-gray-900">Landing Pages</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Discover our collection of high-converting landing pages designed for specific SEO tools and use cases. 
                Each page is optimized for maximum conversion and user engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Explore All Pages
                  <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group flex items-center px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-6 py-3 bg-white rounded-full border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200 shadow-sm"
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Landing Pages Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landingPages.map((page, index) => (
              <motion.div
                key={page.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={page.image}
                    alt={page.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                      {page.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{page.title}</h3>
                  <p className="text-gray-600 mb-4">{page.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {page.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={page.path}
                    className="block w-full text-center py-3 px-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 transition-all duration-200"
                  >
                    {page.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Our Landing Pages Convert Better
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each landing page is carefully crafted with conversion optimization and user experience in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-orange-500" />,
                title: "Conversion Optimized",
                description: "Every element is designed to maximize conversions with A/B tested layouts and copy."
              },
              {
                icon: <Smartphone className="w-8 h-8 text-blue-500" />,
                title: "Mobile Responsive",
                description: "Perfect experience across all devices with responsive design and mobile optimization."
              },
              {
                icon: <Gauge className="w-8 h-8 text-green-500" />,
                title: "Lightning Fast",
                description: "Optimized for speed with fast loading times and excellent Core Web Vitals scores."
              },
              {
                icon: <Eye className="w-8 h-8 text-purple-500" />,
                title: "User-Focused Design",
                description: "Clean, intuitive interfaces that guide users naturally toward conversion goals."
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-indigo-500" />,
                title: "Analytics Ready",
                description: "Built-in tracking and analytics integration for measuring performance and ROI."
              },
              {
                icon: <Shield className="w-8 h-8 text-red-500" />,
                title: "Security First",
                description: "Enterprise-grade security with SSL encryption and data protection compliance."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our landing pages have helped businesses improve their conversion rates and user engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Boost Your Conversions?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Start using our high-converting landing pages today and see the difference in your results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Free
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPagesPage;