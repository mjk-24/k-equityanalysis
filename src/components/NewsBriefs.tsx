import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockNews } from '../data/mockNews';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from '../context/LanguageContext';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const NewsBriefs: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const { language, t } = useLanguage();
  const displayNews = compact ? mockNews.slice(0, 3) : mockNews;

  return (
    <div className={cn("bg-white border border-zinc-100", compact ? "p-5" : "p-8")}>
      <div className={cn("flex items-center gap-3", compact ? "mb-6" : "mb-8")}>
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-jpm-brown">{t('market.briefs')}</h2>
      </div>
      <div className={cn("space-y-8", compact && "space-y-4")}>
        {displayNews.map((item) => {
          const title = language === 'ko' && item.title_ko ? item.title_ko : item.title;
          return (
            <Link key={item.id} to={`/news/${item.id}`} className="group block">
              <div className="flex justify-between items-start mb-1.5">
                <span className="text-[9px] font-bold text-jpm-teal uppercase tracking-widest">{item.category}</span>
                {!compact && <span className="text-[10px] text-zinc-400 font-medium">{item.time}</span>}
              </div>
              <h3 className={cn(
                "font-serif font-bold text-zinc-900 leading-snug group-hover:text-jpm-teal transition-colors mb-1.5",
                compact ? "text-xs" : "text-base"
              )}>
                {title}
              </h3>
              {!compact && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-500">{item.source}</span>
                  <ExternalLink size={12} className="text-zinc-300" />
                </div>
              )}
              <div className={cn("h-px bg-zinc-100 mt-8 group-last:hidden", compact && "mt-4")} />
            </Link>
          );
        })}
      </div>
      {!compact && (
        <button className="w-full mt-10 py-3 text-xs font-bold uppercase tracking-widest text-jpm-teal border border-jpm-teal hover:bg-jpm-teal hover:text-white transition-all">
          {t('news.viewAll')}
        </button>
      )}
      {compact && (
        <Link to="/market-briefs" className="block text-center mt-4 text-[9px] font-bold uppercase tracking-widest text-jpm-teal hover:underline">
          {t('news.viewMore')}
        </Link>
      )}
    </div>
  );
};
