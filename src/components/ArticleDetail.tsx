import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockArticles } from '../data/mockArticles';
import { ArrowLeft, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { useLanguage } from '../context/LanguageContext';

export const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const article = mockArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-serif font-bold text-jpm-brown">Article not found</h2>
        <Link to="/" className="text-jpm-teal hover:underline mt-6 inline-block font-bold uppercase tracking-widest text-sm">Return to Dashboard</Link>
      </div>
    );
  }

  const title = language === 'ko' && article.title_ko ? article.title_ko : article.title;
  const content = language === 'ko' && article.content_ko ? article.content_ko : article.content;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <Link to="/" className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-jpm-teal mb-12 transition-colors group uppercase tracking-widest">
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        {t('article.back')}
      </Link>

      <header className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs font-bold text-jpm-teal uppercase tracking-[0.2em]">
            {article.ticker}
          </span>
          {article.targetPrice !== 'N/A' && (
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              {t('article.targetPrice')}: <span className="text-jpm-brown ml-1">{article.targetPrice}</span>
            </span>
          )}
        </div>

        <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-jpm-brown mb-12 leading-[1.1]">
          {title}
        </h1>

        <div className="flex items-center justify-start py-8 border-y border-zinc-100">
          <div className="text-left">
            <div className="flex items-center text-xs font-bold text-zinc-500 mb-2 uppercase tracking-widest">
              <Calendar size={16} className="mr-2" />
              {article.date}
            </div>
          </div>
        </div>
      </header>

      <div className="relative aspect-[21/9] overflow-hidden mb-16 shadow-sm">
        <img 
          src={article.imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="markdown-body max-w-3xl mx-auto">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      <footer className="mt-24 pt-12 border-t border-zinc-100">
        <div className="bg-jpm-off-white p-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h4 className="font-serif font-bold text-2xl text-jpm-brown mb-4">{t('article.disclosures')}</h4>
            <p className="text-sm text-zinc-500 leading-relaxed">
              {t('article.disclosuresText')}
            </p>
          </div>
          <button className="px-10 py-4 bg-jpm-teal text-white font-bold uppercase tracking-widest text-sm hover:bg-jpm-teal/90 transition-colors whitespace-nowrap">
            {t('article.contact')}
          </button>
        </div>
      </footer>
    </motion.div>
  );
};
