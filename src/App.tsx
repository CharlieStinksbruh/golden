import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ToolsNavbar from './components/ToolsNavbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import ComparisonPage from './pages/ComparisonPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CrawlerPage from './pages/tools/CrawlerPage';
import KeywordPage from './pages/tools/KeywordPage';
import BacklinkPage from './pages/tools/BacklinkPage';
import TechnicalSEOPage from './pages/tools/TechnicalSEOPage';
import ReportsPage from './pages/ReportsPage';
import ProfilePage from './pages/ProfilePage';
import LandingPagesPage from './pages/LandingPagesPage';
import PageSpeedPage from './pages/tools/PageSpeedPage';
import MobileSEOPage from './pages/tools/MobileSEOPage';
import RankingsPage from './pages/tools/RankingsPage';
import SERPPage from './pages/tools/SERPPage';
import ContentGapPage from './pages/tools/ContentGapPage';
import LinkProspectingPage from './pages/tools/LinkProspectingPage';
import DisavowPage from './pages/tools/DisavowPage';
import AnchorTextPage from './pages/tools/AnchorTextPage';
import WhiteLabelPage from './pages/tools/WhiteLabelPage';
import APIPage from './pages/tools/APIPage';
import TeamPage from './pages/tools/TeamPage';
import AdminPage from './pages/AdminPage';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function AppContent() {
  const { isAuthenticated, user } = useAuth();
  
  const showToolsNavbar = isAuthenticated && user?.plan !== 'free';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {showToolsNavbar && <ToolsNavbar />}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/comparison" element={<ComparisonPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/landing-pages" element={<LandingPagesPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/tools/crawler" element={<CrawlerPage />} />
          <Route path="/tools/keywords" element={<KeywordPage />} />
          <Route path="/tools/backlinks" element={<BacklinkPage />} />
          <Route path="/tools/technical" element={<TechnicalSEOPage />} />
          <Route path="/tools/pagespeed" element={<PageSpeedPage />} />
          <Route path="/tools/mobile" element={<MobileSEOPage />} />
          <Route path="/tools/rankings" element={<RankingsPage />} />
          <Route path="/tools/serp" element={<SERPPage />} />
          <Route path="/tools/content-gap" element={<ContentGapPage />} />
          <Route path="/tools/link-prospecting" element={<LinkProspectingPage />} />
          <Route path="/tools/disavow" element={<DisavowPage />} />
          <Route path="/tools/anchor-text" element={<AnchorTextPage />} />
          <Route path="/tools/white-label" element={<WhiteLabelPage />} />
          <Route path="/tools/api" element={<APIPage />} />
          <Route path="/tools/team" element={<TeamPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </motion.main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;