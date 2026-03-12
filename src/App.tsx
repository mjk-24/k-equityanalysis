import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { TradingViewWidget } from './components/TradingViewWidget';
import { NewsBriefs } from './components/NewsBriefs';
import { AnalysisArticles } from './components/AnalysisArticles';
import { ArticleDetail } from './components/ArticleDetail';
import { NewsDetail } from './components/NewsDetail';
import { SearchResults } from './components/SearchResults';
import { LegalPage } from './components/LegalPage';
import { CookieBanner } from './components/CookieBanner';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <aside className="lg:col-span-3">
          <NewsBriefs compact />
        </aside>

        <main className="lg:col-span-9">
          <section className="h-full bg-[#0F0F0F] border border-zinc-800 shadow-sm rounded-sm overflow-hidden">
            <TradingViewWidget />
          </section>
        </main>
      </div>

      <div className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
          <h2 className="text-3xl font-serif font-bold text-jpm-brown">{t('home.featuredAnalysis')}</h2>
          <Link to="/analysis" className="text-xs font-bold uppercase tracking-widest text-jpm-teal hover:underline">{t('home.viewAll')}</Link>
        </div>
        <AnalysisArticles />
      </div>
    </motion.div>
  );
};

const AnalysisPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12"
    >
      <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
        <h2 className="text-4xl font-serif font-bold text-jpm-brown">{t('market.equityAnalysis')}</h2>
      </div>

      <section>
        <AnalysisArticles />
      </section>
    </motion.div>
  );
};

const MarketBriefsPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <main className="lg:col-span-8 space-y-8">
          <div className="border-b border-zinc-200 pb-4">
            <h2 className="text-4xl font-serif font-bold text-jpm-brown">{t('market.briefs')}</h2>
          </div>
          <NewsBriefs />
        </main>
        <aside className="lg:col-span-4 space-y-8">
          <section className="bg-[#0F0F0F] border border-zinc-800 shadow-sm rounded-sm overflow-hidden">
            <TradingViewWidget />
          </section>
          <div className="p-8 bg-jpm-off-white border border-zinc-100">
            <h3 className="font-serif font-bold text-xl text-jpm-brown mb-4">{t('home.dailyOutlook')}</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              {t('home.outlookText')}
            </p>
          </div>
        </aside>
      </div>
    </motion.div>
  );
};

const AppContent: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-jpm-bg font-sans text-zinc-900">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/market-briefs" element={<MarketBriefsPage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/privacy" element={<LegalPage title={t('footer.privacy')} date="Mar 11, 2026" />} />
        <Route path="/terms" element={<LegalPage title={t('footer.terms')} date="Mar 11, 2026" />} />
        <Route path="/about" element={<LegalPage title={t('footer.about')} date="Mar 11, 2026" />} />
        <Route path="/contact" element={<LegalPage title={t('footer.contact')} date="Mar 11, 2026" />} />
        <Route path="/disclaimer" element={<LegalPage title={t('footer.disclaimer')} date="Mar 11, 2026" />} />
        <Route path="/disclosures" element={<LegalPage title={t('footer.disclosures')} date="Mar 11, 2026" />} />
      </Routes>
      
      <CookieBanner />
      
      <footer className="bg-jpm-brown text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
              <span className="text-3xl font-serif font-bold block mb-6">K-Equity Analysis</span>
            </Link>
            <p className="text-zinc-400 text-sm max-w-md">
              {t('footer.description')}
            </p>
          </div>
          
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] text-zinc-400 mb-8 uppercase tracking-wider font-medium">
              <Link to="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
              <span className="text-white/20">|</span>
              <Link to="/about" className="hover:text-white transition-colors">{t('footer.about')}</Link>
              <span className="text-white/20">|</span>
              <Link to="/contact" className="hover:text-white transition-colors">{t('footer.contact')}</Link>
              <span className="text-white/20">|</span>
              <Link to="/terms" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
              <span className="text-white/20">|</span>
              <Link to="/disclaimer" className="hover:text-white transition-colors">{t('footer.disclaimer')}</Link>
              <span className="text-white/20">|</span>
              <Link to="/disclosures" className="hover:text-white transition-colors">{t('footer.disclosures')}</Link>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <Link to="/" className="text-xs text-zinc-500 hover:text-jpm-teal transition-colors">
                {t('footer.rights')}
              </Link>
              <div className="flex gap-6">
                <Globe size={18} className="text-zinc-500 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </Router>
  );
}
