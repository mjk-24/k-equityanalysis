import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockNews } from '../data/mockNews';
import { ArrowLeft, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { useLanguage } from '../context/LanguageContext';

export const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const newsItem = mockNews.find(n => n.id === id);

  if (!newsItem) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-serif font-bold text-jpm-brown">News item not found</h2>
        <Link to="/" className="text-jpm-teal hover:underline mt-6 inline-block font-bold uppercase tracking-widest text-sm">Return to Dashboard</Link>
      </div>
    );
  }

  const title = language === 'ko' && newsItem.title_ko ? newsItem.title_ko : newsItem.title;
  const content = language === 'ko' && newsItem.content_ko ? newsItem.content_ko : newsItem.content;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <Link to="/" className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-jpm-teal mb-12 transition-colors group uppercase tracking-widest">
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        {t('news.back')}
      </Link>

      <header className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs font-bold text-jpm-teal uppercase tracking-[0.2em]">
            {newsItem.category}
          </span>
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
            {t('news.source')}: <span className="text-jpm-brown ml-1">{newsItem.source}</span>
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-jpm-brown mb-12 leading-[1.1]">
          {title}
        </h1>

        <div className="flex items-center justify-start py-8 border-y border-zinc-100">
          <div className="text-left">
            <div className="flex items-center text-xs font-bold text-zinc-500 mb-2 uppercase tracking-widest">
              <Calendar size={16} className="mr-2" />
              {newsItem.date || newsItem.time}
            </div>
          </div>
        </div>
      </header>

      <div className="markdown-body max-w-3xl mx-auto">
        <ReactMarkdown>{content || 'No content available for this brief.'}</ReactMarkdown>
      </div>

      <footer className="mt-24 pt-12 border-t border-zinc-100">
        <div className="bg-jpm-off-white p-12">
          <h4 className="font-serif font-bold text-2xl text-jpm-brown mb-4">{t('market.briefs')}</h4>
          <p className="text-sm text-zinc-500 leading-relaxed">
            {t('news.footerText')}
          </p>
        </div>
      </footer>
    </motion.div>
  );
};
