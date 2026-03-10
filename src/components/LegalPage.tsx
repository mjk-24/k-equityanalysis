import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LegalPageProps {
  title: string;
  date: string;
}

export const LegalPage: React.FC<LegalPageProps> = ({ title, date }) => {
  const { t } = useLanguage();
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      <Link to="/" className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-jpm-teal mb-12 transition-colors group uppercase tracking-widest">
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        {t('legal.back')}
      </Link>

      <header className="mb-16 border-b border-zinc-100 pb-12">
        <h1 className="text-5xl font-serif font-bold text-jpm-brown mb-6">{title}</h1>
        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{t('legal.lastUpdated')}: {date}</p>
      </header>

      <div className="min-h-[400px] text-zinc-600 leading-relaxed">
        {/* Content left blank for now */}
        <p className="italic text-zinc-400">{t('legal.placeholder')}</p>
      </div>
    </motion.div>
  );
};
