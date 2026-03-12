import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { X, Cookie } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type: 'all' | 'reject' | 'third-party') => {
    localStorage.setItem('cookie-consent', type);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white border border-zinc-200 shadow-2xl rounded-xl overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-jpm-off-white p-4 rounded-full text-jpm-teal shrink-0">
                <Cookie size={32} />
              </div>
              
              <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6">
                <h3 className="text-lg font-serif font-bold text-jpm-brown whitespace-nowrap">
                  {t('cookie.title')}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl">
                  {t('cookie.description')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => handleConsent('all')}
                  className="px-6 py-2.5 bg-jpm-teal text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-opacity-90 transition-all whitespace-nowrap"
                >
                  {t('cookie.allowAll')}
                </button>
                <button
                  onClick={() => handleConsent('third-party')}
                  className="px-6 py-2.5 bg-white text-jpm-teal border border-jpm-teal text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-jpm-off-white transition-all whitespace-nowrap"
                >
                  {t('cookie.blockThirdParty')}
                </button>
                <button
                  onClick={() => handleConsent('reject')}
                  className="px-6 py-2.5 bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-zinc-200 transition-all whitespace-nowrap"
                >
                  {t('cookie.rejectAll')}
                </button>
              </div>

              <button 
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
