import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { mockArticles } from '../data/mockArticles';
import { mockNews } from '../data/mockNews';
import { Search, ArrowRight, FileText, Newspaper } from 'lucide-react';

export const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';
  const { language, t } = useLanguage();

  const filteredArticles = mockArticles.filter(article => {
    const title = (language === 'ko' ? article.title_ko : article.title) || article.title;
    const ticker = article.ticker.toLowerCase();
    return title.toLowerCase().includes(query) || ticker.includes(query);
  });

  const filteredNews = mockNews.filter(item => {
    const title = (language === 'ko' ? item.title_ko : item.title) || item.title;
    // For news items, we check content for ticker-like strings if they don't have a ticker field
    // But the request said "by title and stock code". 
    // Let's check if news items have tickers in their content.
    const content = (language === 'ko' ? item.content_ko : item.content) || item.content || '';
    return title.toLowerCase().includes(query) || content.toLowerCase().includes(query);
  });

  const hasResults = filteredArticles.length > 0 || filteredNews.length > 0;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12"
    >
      <div className="border-b border-zinc-200 pb-8">
        <h1 className="text-4xl font-serif font-bold text-jpm-brown mb-4">
          {t('search.title')}
        </h1>
        <p className="text-zinc-500">
          {query ? (
            <>
              {hasResults ? (
                <span>Showing results for <span className="text-jpm-teal font-bold">"{query}"</span></span>
              ) : (
                <span>{t('search.noResults')} <span className="text-jpm-teal font-bold">"{query}"</span></span>
              )}
            </>
          ) : (
            "Please enter a search term."
          )}
        </p>
      </div>

      {query && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            {/* Articles Section */}
            {filteredArticles.length > 0 && (
              <section className="space-y-6">
                <div className="flex items-center gap-2 text-jpm-teal border-b border-zinc-100 pb-2">
                  <FileText size={20} />
                  <h2 className="text-xl font-serif font-bold">{t('search.articles')}</h2>
                </div>
                <div className="grid gap-6">
                  {filteredArticles.map(article => (
                    <Link 
                      key={article.id} 
                      to={`/article/${article.id}`}
                      className="group flex gap-6 p-4 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-zinc-100 rounded-sm"
                    >
                      <div className="w-32 h-24 flex-shrink-0 overflow-hidden rounded-sm">
                        <img 
                          src={article.imageUrl} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-jpm-teal bg-jpm-teal/5 px-2 py-0.5 rounded-sm">
                            {article.ticker}
                          </span>
                          <span className="text-[10px] text-zinc-400 font-medium">{article.date}</span>
                        </div>
                        <h3 className="text-lg font-serif font-bold text-jpm-brown group-hover:text-jpm-teal transition-colors">
                          {language === 'ko' ? article.title_ko : article.title}
                        </h3>
                        <p className="text-sm text-zinc-500 line-clamp-1">
                          {language === 'ko' ? article.excerpt_ko : article.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* News Section */}
            {filteredNews.length > 0 && (
              <section className="space-y-6">
                <div className="flex items-center gap-2 text-jpm-teal border-b border-zinc-100 pb-2">
                  <Newspaper size={20} />
                  <h2 className="text-xl font-serif font-bold">{t('search.news')}</h2>
                </div>
                <div className="grid gap-4">
                  {filteredNews.map(item => (
                    <Link 
                      key={item.id} 
                      to={`/news/${item.id}`}
                      className="group p-4 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-zinc-100 rounded-sm flex justify-between items-center"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest">
                          <span className="text-jpm-teal">{item.category}</span>
                          <span className="text-zinc-400">{item.time}</span>
                        </div>
                        <h3 className="text-md font-serif font-bold text-jpm-brown group-hover:text-jpm-teal transition-colors">
                          {language === 'ko' ? item.title_ko : item.title}
                        </h3>
                      </div>
                      <ArrowRight size={16} className="text-zinc-300 group-hover:text-jpm-teal group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 p-8 bg-jpm-off-white border border-zinc-100 rounded-sm">
              <h3 className="font-serif font-bold text-xl text-jpm-brown mb-4">Search Tips</h3>
              <ul className="text-sm text-zinc-600 space-y-3 list-disc pl-4">
                <li>Search by company name (e.g., "Samsung")</li>
                <li>Search by ticker symbol (e.g., "KRX:005930")</li>
                <li>Search for specific market topics (e.g., "AI", "Semiconductor")</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};
