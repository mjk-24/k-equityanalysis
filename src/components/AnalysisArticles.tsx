import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockArticles } from '../data/mockArticles';
import { useLanguage } from '../context/LanguageContext';

export const AnalysisArticles: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {mockArticles.map((article) => {
        const title = language === 'ko' && article.title_ko ? article.title_ko : article.title;
        const excerpt = language === 'ko' && article.excerpt_ko ? article.excerpt_ko : article.excerpt;

        return (
          <Link 
            key={article.id} 
            to={`/article/${article.id}`}
            className="group block"
          >
            <div className="relative aspect-[16/9] overflow-hidden mb-6">
              <img 
                src={article.imageUrl} 
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-jpm-teal uppercase tracking-widest">
                  {article.ticker}
                </span>
                <div className="flex items-center text-xs text-zinc-400 font-medium">
                  <Calendar size={14} className="mr-1.5" />
                  {article.date}
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-jpm-brown leading-tight group-hover:text-jpm-teal transition-colors">
                {title}
              </h3>
              
              <p className="text-zinc-600 text-sm leading-relaxed line-clamp-3">
                {excerpt}
              </p>
              
              <div className="flex items-center justify-end pt-4 border-t border-zinc-100">
                <div className="flex items-center gap-2 text-xs font-bold text-jpm-teal uppercase tracking-widest group-hover:gap-3 transition-all">
                  {t('article.readMore')} <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
