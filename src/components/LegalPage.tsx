import React from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import ReactMarkdown from 'react-markdown';

interface LegalPageProps {
  title: string;
  date: string;
  content?: string;
}

export const LegalPage: React.FC<LegalPageProps> = ({ title, date, content }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-jpm-teal mb-12 transition-colors group uppercase tracking-widest cursor-pointer"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        {t('legal.back')}
      </button>

      <header className="mb-16 border-b border-zinc-100 pb-12">
        <h1 className="text-5xl font-serif font-bold text-jpm-brown mb-6">{title}</h1>
        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{t('legal.lastUpdated')}: {date}</p>
      </header>

      <div className="min-h-[400px] text-zinc-600 leading-normal prose prose-zinc max-w-none">
        {content ? (
          <div className="markdown-body">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        ) : (
          <p className="italic text-zinc-400">{t('legal.placeholder')}</p>
        )}
      </div>
    </motion.div>
  );
};
