export interface StockIndex {
  name: string;
  value: number;
  change: number;
  changePercent: number;
  timestamp: string;
}

export interface NewsItem {
  id: string;
  title: string;
  title_ko?: string;
  source: string;
  time: string;
  category: 'Market' | 'Tech' | 'Policy' | 'Corporate';
  content?: string;
  content_ko?: string;
  date?: string;
}

export interface Article {
  id: string;
  title: string;
  title_ko?: string;
  excerpt: string;
  excerpt_ko?: string;
  content: string;
  content_ko?: string;
  date: string;
  ticker: string;
  rating: 'Buy' | 'Hold' | 'Sell';
  targetPrice: string;
  imageUrl: string;
}
