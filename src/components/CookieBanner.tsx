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
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (type: 'all' | 'reject' | 'third-party') => {
    localStorage.setItem('cookie-consent', type);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[9998]"
            onClick={() => setIsVisible(false)}
          />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
          >
          <div className="max-w-4xl mx-auto bg-white border border-zinc-200 shadow-2xl rounded-xl overflow-hidden">
            <div className="p-6 md:p-8 flex items-start gap-6 relative">
              <div className="bg-jpm-off-white p-4 rounded-full text-jpm-teal shrink-0 mt-1">
                <Cookie size={32} />
              </div>
              
              <div className="flex-1 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-jpm-brown">
                    {t('cookie.title')}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-normal max-w-3xl">
                    {t('cookie.description')}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => handleConsent('all')}
                    className="px-5 py-2 bg-jpm-teal text-white text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-opacity-90 transition-all whitespace-nowrap"
                  >
                    {t('cookie.allowAll')}
                  </button>
                  <button
                    onClick={() => handleConsent('third-party')}
                    className="px-5 py-2 bg-white text-jpm-teal border border-jpm-teal text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-jpm-off-white transition-all whitespace-nowrap"
                  >
                    {t('cookie.blockThirdParty')}
                  </button>
                  <button
                    onClick={() => handleConsent('reject')}
                    className="px-5 py-2 bg-zinc-100 text-zinc-600 text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-zinc-200 transition-all whitespace-nowrap"
                  >
                    {t('cookie.rejectAll')}
                  </button>
                </div>
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
      </>
    )}
  </AnimatePresence>
);
};
