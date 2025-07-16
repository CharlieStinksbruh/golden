import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, TrendingDown, Target, BarChart3, Eye, Download, Plus, Trash2 } from 'lucide-react';
import { realKeywordService, KeywordData, KeywordRanking } from '../../services/realKeywordService';

const KeywordPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [keywordResults, setKeywordResults] = useState<KeywordData[]>([]);
  const [trackedKeywords, setTrackedKeywords] = useState<KeywordRanking[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'research' | 'tracking'>('research');

  useEffect(() => {
    loadTrackedKeywords();
  }, []);

  const loadTrackedKeywords = async () => {
    setIsLoading(true);
    try {
      const rankings = await realKeywordService.getKeywordRankings('goldchicken.com');
      setTrackedKeywords(rankings);
    } catch (error) {
      console.error('Failed to load tracked keywords:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    try {
      const results = await realKeywordService.searchKeywords(searchTerm, {
        location: 'United States',
        language: 'en',
        includeQuestions: true
      });
      setKeywordResults(results);
    } catch (error) {
      console.error('Keyword search failed:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const trackKeyword = async (keyword: string) => {
    try {
      const ranking = await realKeywordService.trackKeyword(keyword, 'goldchicken.com', {
        location: 'United States',
        device: 'desktop'
      });
      setTrackedKeywords(prev => [ranking, ...prev]);
    } catch (error) {
      console.error('Failed to track keyword:', error);
    }
  };

  const removeTrackedKeyword = (keyword: string) => {
    setTrackedKeywords(prev => prev.filter(k => k.keyword !== keyword));
  };

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty < 30) return 'text-green-600 bg-green-100';
    if (difficulty < 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getDifficultyText = (difficulty: number) => {
    if (difficulty < 30) return 'Easy';
    if (difficulty < 60) return 'Medium';
    return 'Hard';
  };

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <div className="w-4 h-4 bg-gray-400 rounded-full"></div>;
  };

  const getPositionColor = (position: number) => {
    if (position <= 3) return 'text-green-600 bg-green-100';
    if (position <= 10) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getChangeIcon = (current: number, previous: number) => {
    if (current < previous) return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (current > previous) return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <div className="w-4 h-4 bg-gray-400 rounded-full"></div>;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Keyword Research</h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Discover high-value keywords and track your rankings
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mb-6 sm:mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('research')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'research'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Keyword Research
              </button>
              <button
                onClick={() => setActiveTab('tracking')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'tracking'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Rank Tracking ({trackedKeywords.length})
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'research' && (
          <>
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8"
            >
              <div className="flex flex-col lg:flex-row gap-4 items-end">
                <div className="flex-1">
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                    Search for keywords
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                      placeholder="Enter seed keyword..."
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div className="flex gap-3 w-full lg:w-auto">
                  <button
                    onClick={handleSearch}
                    disabled={!searchTerm.trim() || isSearching}
                    className="flex items-center justify-center flex-1 lg:flex-none px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-sm sm:text-base"
                  >
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    {isSearching ? 'Searching...' : 'Research'}
                  </button>
                  <button className="flex items-center justify-center px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors text-sm sm:text-base">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Export
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Keyword Results */}
            {keywordResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Keyword Ideas</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Keyword
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Volume
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Difficulty
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          CPC
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Trend
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {keywordResults.map((keyword, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 sm:px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{keyword.keyword}</div>
                            <div className="text-sm text-gray-500 capitalize">{keyword.searchIntent}</div>
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">
                            {keyword.volume.toLocaleString()}
                          </td>
                          <td className="px-4 sm:px-6 py-4">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(keyword.difficulty)}`}>
                              {getDifficultyText(keyword.difficulty)}
                            </span>
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">
                            ${keyword.cpc.toFixed(2)}
                          </td>
                          <td className="px-4 sm:px-6 py-4">
                            {getTrendIcon(keyword.trend)}
                          </td>
                          <td className="px-4 sm:px-6 py-4">
                            <button
                              onClick={() => trackKeyword(keyword.keyword)}
                              className="flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
                            >
                              <Plus className="w-3 h-3 mr-1" />
                              Track
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </>
        )}

        {activeTab === 'tracking' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Tracked Keywords</h3>
            </div>
            {isLoading ? (
              <div className="p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto"></div>
                <p className="text-gray-600 mt-2">Loading tracked keywords...</p>
              </div>
            ) : trackedKeywords.length === 0 ? (
              <div className="p-8 text-center">
                <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No keywords tracked yet. Start by researching keywords and adding them to tracking.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Keyword
                      </th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Position
                      </th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Change
                      </th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Volume
                      </th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        URL
                      </th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {trackedKeywords.map((keyword, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 sm:px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">{keyword.keyword}</div>
                          <div className="text-sm text-gray-500">{keyword.device} • {keyword.location}</div>
                        </td>
                        <td className="px-4 sm:px-6 py-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPositionColor(keyword.position)}`}>
                            #{keyword.position}
                          </span>
                        </td>
                        <td className="px-4 sm:px-6 py-4">
                          <div className="flex items-center">
                            {getChangeIcon(keyword.position, keyword.previousPosition)}
                            <span className="ml-1 text-sm text-gray-600">
                              {Math.abs(keyword.position - keyword.previousPosition)}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">
                          {keyword.volume.toLocaleString()}
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-600">
                          {keyword.url}
                        </td>
                        <td className="px-4 sm:px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => removeTrackedKeyword(keyword.keyword)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default KeywordPage;