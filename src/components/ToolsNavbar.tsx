import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  BarChart3, 
  Link as LinkIcon, 
  AlertTriangle, 
  Globe, 
  Target, 
  Shield, 
  Database, 
  Gauge, 
  TrendingUp, 
  FileText, 
  Users, 
  Settings,
  Smartphone,
  ChevronDown,
  Menu,
  X,
  Lightbulb,
  Plus
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const ToolsNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();

  // Only show tools navbar if user is authenticated and has a paid plan
  if (!isAuthenticated || user?.plan === 'free') {
    return null;
  }

  const tools = [
    { name: 'Site Crawler', path: '/tools/crawler', icon: <Search className="w-4 h-4" /> },
    { name: 'Keywords', path: '/tools/keywords', icon: <Target className="w-4 h-4" /> },
    { name: 'Backlinks', path: '/tools/backlinks', icon: <LinkIcon className="w-4 h-4" /> },
    { name: 'Technical SEO', path: '/tools/technical', icon: <AlertTriangle className="w-4 h-4" /> },
    { name: 'Page Speed', path: '/tools/pagespeed', icon: <Gauge className="w-4 h-4" /> },
    { name: 'Mobile SEO', path: '/tools/mobile', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Rankings', path: '/tools/rankings', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'SERP Analysis', path: '/tools/serp', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Content Gap', path: '/tools/content-gap', icon: <FileText className="w-4 h-4" /> },
    { name: 'Link Prospecting', path: '/tools/link-prospecting', icon: <Users className="w-4 h-4" /> },
    { name: 'Disavow Tool', path: '/tools/disavow', icon: <Shield className="w-4 h-4" /> },
    { name: 'Anchor Text', path: '/tools/anchor-text', icon: <Database className="w-4 h-4" /> },
    { name: 'White Label', path: '/tools/white-label', icon: <Settings className="w-4 h-4" /> },
    { name: 'API Access', path: '/tools/api', icon: <Database className="w-4 h-4" /> },
    { name: 'Team', path: '/tools/team', icon: <Users className="w-4 h-4" /> },
    { name: 'Reports', path: '/reports', icon: <FileText className="w-4 h-4" /> }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSuggestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) return;
    
    // In a real app, this would send to an API
    alert('Thank you for your suggestion! We\'ll review it and consider it for future updates.');
    setSuggestion('');
    setShowSuggestions(false);
  };

  return (
    <div className="bg-gray-50 border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Tools Navigation */}
        <div className="hidden lg:flex items-center justify-between py-2">
          <div className="flex items-center space-x-1 overflow-x-auto">
            {tools.map((tool) => (
              <Link
                key={tool.path}
                to={tool.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive(tool.path)
                    ? 'bg-orange-100 text-orange-700'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {tool.icon}
                <span>{tool.name}</span>
              </Link>
            ))}
          </div>
          
          <button
            onClick={() => setShowSuggestions(true)}
            className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
          >
            <Lightbulb className="w-4 h-4" />
            <span>Suggest Feature</span>
          </button>
        </div>

        {/* Mobile Tools Navigation */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between w-full px-3 py-3 text-left text-sm font-medium text-gray-700 hover:text-orange-600"
            >
              <span className="flex items-center space-x-2">
                <Menu className="w-4 h-4" />
                <span>SEO Tools</span>
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <button
              onClick={() => setShowSuggestions(true)}
              className="p-2 text-gray-600 hover:text-orange-600"
            >
              <Lightbulb className="w-4 h-4" />
            </button>
          </div>
          
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-gray-200 bg-white"
            >
              <div className="grid grid-cols-2 gap-1 p-3">
                {tools.map((tool) => (
                  <Link
                    key={tool.path}
                    to={tool.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(tool.path)
                        ? 'bg-orange-100 text-orange-700'
                        : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                  >
                    {tool.icon}
                    <span className="truncate">{tool.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Suggestion Modal */}
      {showSuggestions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Suggest a Feature</h3>
              <button
                onClick={() => setShowSuggestions(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSuggestionSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What feature would you like to see?
                </label>
                <textarea
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  placeholder="Describe the feature you'd like us to add..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowSuggestions(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200"
                >
                  Submit Suggestion
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolsNavbar;