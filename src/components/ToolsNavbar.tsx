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
  X
} from 'lucide-react';

const ToolsNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

  return (
    <div className="bg-gray-50 border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Tools Navigation */}
        <div className="hidden lg:flex items-center space-x-1 py-2 overflow-x-auto">
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

        {/* Mobile Tools Navigation */}
        <div className="lg:hidden">
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
    </div>
  );
};

export default ToolsNavbar;