import React, { useState } from 'react';
import { Search, Globe, Bell, Menu, TrendingUp } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  
  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.analysis'), path: '/analysis' },
    { name: t('nav.marketBriefs'), path: '/market-briefs' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-serif font-bold tracking-tight text-jpm-brown">K-Equity Analysis</span>
            </Link>
            
            <div className="hidden md:flex items-center h-full">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-6 h-full flex items-center text-sm font-medium transition-all relative ${
                    location.pathname === item.path 
                      ? 'text-jpm-teal' 
                      : 'text-zinc-600 hover:text-jpm-teal'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-jpm-teal" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <form onSubmit={handleSearch} className="hidden lg:flex items-center border-b border-zinc-300 py-1">
              <Search size={18} className="text-zinc-400 mr-2" />
              <input 
                type="text" 
                placeholder={t('search.placeholder')} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-sm w-40 focus:w-56 transition-all"
              />
            </form>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setLanguage(language === 'en' ? 'ko' : 'en')}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-zinc-600 hover:text-jpm-teal border border-zinc-200 hover:border-jpm-teal transition-all rounded-sm uppercase tracking-widest"
              >
                <Globe size={16} />
                {language === 'en' ? '한' : 'EN'}
              </button>

              <button className="md:hidden p-2 text-zinc-600">
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
