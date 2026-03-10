import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const movers = [
  { ticker: '005930', name: 'Samsung Elec', name_ko: '삼성전자', price: '74,200', change: '+1.2%', isUp: true },
  { ticker: '000660', name: 'SK Hynix', name_ko: 'SK하이닉스', price: '162,400', change: '+2.5%', isUp: true },
  { ticker: '005380', name: 'Hyundai Motor', name_ko: '현대자동차', price: '245,000', change: '-0.8%', isUp: false },
  { ticker: '035420', name: 'NAVER', name_ko: '네이버', price: '202,500', change: '-1.5%', isUp: false },
  { ticker: '068270', name: 'Celltrion', name_ko: '셀트리온', price: '184,200', change: '+0.4%', isUp: true },
];

export const MarketMovers: React.FC = () => {
  const { language, t } = useLanguage();
  const [stockData, setStockData] = React.useState(movers);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchStockData = async () => {
    const symbols = movers.map(m => `${m.ticker}.KS`).join(',');
    try {
      const response = await fetch(`/api/market-data?symbols=${symbols}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      
      const results = data.quoteResponse.result;
      if (results && results.length > 0) {
        setStockData(prev => prev.map(stock => {
          const realData = results.find((r: any) => r.symbol === `${stock.ticker}.KS`);
          if (realData) {
            return {
              ...stock,
              price: realData.regularMarketPrice.toLocaleString(undefined, { maximumFractionDigits: 0 }),
              change: `${realData.regularMarketChangePercent >= 0 ? '+' : ''}${realData.regularMarketChangePercent.toFixed(2)}%`,
              isUp: realData.regularMarketChangePercent >= 0
            };
          }
          return stock;
        }));
      }
    } catch (error) {
      console.error('Error fetching stock data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchStockData();
    const interval = setInterval(fetchStockData, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white border border-zinc-100 p-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-jpm-brown">{t('market.movers')}</h3>
        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-rose-50 text-[9px] font-bold text-rose-600 uppercase border border-rose-100">
          Live
        </span>
      </div>
      <div className="space-y-6">
        {stockData.map((stock) => (
          <div key={stock.ticker} className="flex items-center justify-between group cursor-pointer">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-zinc-900 group-hover:text-jpm-teal transition-colors">
                {language === 'ko' ? stock.name_ko : stock.name}
              </span>
              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">KRX:{stock.ticker}</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-serif font-bold text-jpm-brown">{stock.price}</div>
              <div className={`text-[10px] font-bold flex items-center justify-end ${stock.isUp ? 'text-emerald-600' : 'text-rose-600'}`}>
                {stock.isUp ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
                {stock.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
