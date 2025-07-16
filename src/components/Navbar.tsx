import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Zap, User, LogOut, ChevronDown, Search, BarChart3, Link as LinkIcon, AlertTriangle, Globe, Target, Shield, Database, Gauge, TrendingUp, FileText, Users, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();

  const navItems = [
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Comparison', path: '/comparison' },
  ];

  const toolCategories = [
    {
      name: 'Site Analysis',
      tools: [
        { name: 'Site Crawler', path: '/tools/crawler', icon: <Search className="w-4 h-4" />, description: 'Comprehensive site crawling' },
        { name: 'Technical SEO', path: '/tools/technical', icon: <AlertTriangle className="w-4 h-4" />, description: 'Technical audit & fixes' },
        { name: 'Page Speed', path: '/tools/pagespeed', icon: <Gauge className="w-4 h-4" />, description: 'Performance optimization' },
        { name: 'Mobile SEO', path: '/tools/mobile', icon: <Globe className="w-4 h-4" />, description: 'Mobile optimization' }
      ]
    },
    {
      name: 'Keywords & Rankings',
      tools: [
        { name: 'Keyword Research', path: '/tools/keywords', icon: <Target className="w-4 h-4" />, description: 'Find profitable keywords' },
        { name: 'Rank Tracking', path: '/tools/rankings', icon: <TrendingUp className="w-4 h-4" />, description: 'Monitor rankings' },
        { name: 'SERP Analysis', path: '/tools/serp', icon: <BarChart3 className="w-4 h-4" />, description: 'SERP feature tracking' },
        { name: 'Content Gap', path: '/tools/content-gap', icon: <FileText className="w-4 h-4" />, description: 'Content opportunities' }
      ]
    },
    {
      name: 'Link Building',
      tools: [
        { name: 'Backlink Analysis', path: '/tools/backlinks', icon: <LinkIcon className="w-4 h-4" />, description: 'Analyze link profile' },
        { name: 'Link Prospecting', path: '/tools/link-prospecting', icon: <Users className="w-4 h-4" />, description: 'Find link opportunities' },
        { name: 'Disavow Tool', path: '/tools/disavow', icon: <Shield className="w-4 h-4" />, description: 'Remove toxic links' },
        { name: 'Anchor Text', path: '/tools/anchor-text', icon: <Database className="w-4 h-4" />, description: 'Anchor text analysis' }
      ]
    },
    {
      name: 'Reporting & Analytics',
      tools: [
        { name: 'Custom Reports', path: '/reports', icon: <FileText className="w-4 h-4" />, description: 'Professional reports' },
        { name: 'White Label', path: '/tools/white-label', icon: <Settings className="w-4 h-4" />, description: 'Brand customization' },
        { name: 'API Access', path: '/tools/api', icon: <Database className="w-4 h-4" />, description: 'Developer tools' },
        { name: 'Team Management', path: '/tools/team', icon: <Users className="w-4 h-4" />, description: 'Collaborate with team' }
      ]
    }
  ];
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
                Gold Chicken
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {isAuthenticated && (
              <div className="relative">
                <button
                  onClick={() => setIsToolsOpen(!isToolsOpen)}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                >
                  Tools
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isToolsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="p-6">
                      <div className="grid grid-cols-4 gap-6">
                        {toolCategories.map((category, categoryIndex) => (
                          <div key={categoryIndex}>
                            <h3 className="text-sm font-semibold text-gray-900 mb-3">{category.name}</h3>
                            <ul className="space-y-2">
                              {category.tools.map((tool, toolIndex) => (
                                <li key={toolIndex}>
                                  <Link
                                    to={tool.path}
                                    onClick={() => setIsToolsOpen(false)}
                                    className="flex items-start p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                                  >
                                    <div className="p-1 bg-orange-50 rounded group-hover:bg-orange-100 transition-colors mr-3 mt-0.5">
                                      {tool.icon}
                                    </div>
                                    <div>
                                      <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600">
                                        {tool.name}
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        {tool.description}
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200"
                >
                  Dashboard
                </Link>
                <div className="relative group">
                  <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-medium">{user?.name}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      <Link
                        to="/profile"
                        className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </Link>
                      <button
                        onClick={logout}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 rounded-md text-base font-medium text-orange-600 hover:bg-orange-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-orange-500 to-yellow-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </motion.div>
      )}
      
      {/* Overlay for tools dropdown */}
      {isToolsOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-40"
          onClick={() => setIsToolsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;