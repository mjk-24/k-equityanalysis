import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.analysis': 'Analysis',
    'nav.marketBriefs': 'Market Briefs',
    'home.featuredAnalysis': 'Featured Analysis',
    'home.viewAll': 'View All Analysis',
    'home.dailyOutlook': 'Daily Market Outlook',
    'home.outlookText': 'The KOSPI is showing resilience despite global headwinds. Tech sector remains the primary driver of growth as AI infrastructure builds out.',
    'footer.description': 'Providing global investors with deep insights and professional analysis of the Korean equity market.',
    'footer.nav': 'Navigation',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.about': 'About Us',
    'footer.contact': 'Contact Us',
    'footer.terms': 'Terms and Conditions',
    'footer.disclaimer': 'Disclaimer',
    'footer.disclosures': 'Disclosures',
    'footer.rights': '© 2026 K-Equity Analysis. All rights reserved.',
    'article.back': 'Back to Analysis',
    'article.readMore': 'Read More',
    'article.targetPrice': 'Target Price',
    'article.contact': 'Contact Analyst',
    'article.disclosures': 'Important Disclosures',
    'article.disclosuresText': 'This report is provided for information purposes only. K-Equity Analysis does not provide investment advice and this report should not be construed as such. The opinions expressed are those of the individual analyst and do not necessarily reflect the views of the firm.',
    'news.back': 'Back to Briefs',
    'news.viewAll': 'View All Briefs',
    'news.viewMore': 'View More',
    'news.source': 'Source',
    'news.category': 'Category',
    'news.footerText': 'This brief is part of our daily market coverage. For in-depth equity analysis, please refer to our Featured Analysis section.',
    'legal.back': 'Back to Dashboard',
    'legal.lastUpdated': 'Last Updated',
    'legal.placeholder': 'Information for this section will be provided here.',
    'market.movers': 'Market Movers',
    'market.topGainers': 'Top Gainers',
    'market.topLosers': 'Top Losers',
    'market.briefs': 'Market Briefs',
    'market.equityAnalysis': 'Equity Analysis',
    'market.indices': 'Indices',
    'market.futures': 'Futures',
    'market.bonds': 'Bonds',
    'market.forex': 'Forex',
    'search.placeholder': 'Search by title or ticker...',
    'search.title': 'Search Results',
    'search.noResults': 'No results found for',
    'search.articles': 'Analysis Articles',
    'search.news': 'Market Briefs',
    'cookie.title': 'Cookie Settings',
    'cookie.description': 'We use cookies to enhance your browsing experience and analyze our traffic. Please choose your preference.',
    'cookie.allowAll': 'Allow all cookies',
    'cookie.rejectAll': 'Reject all cookies',
    'cookie.blockThirdParty': 'Block third-party cookies'
  },
  ko: {
    'nav.home': '홈',
    'nav.analysis': '분석',
    'nav.marketBriefs': '시장 브리핑',
    'home.featuredAnalysis': '주요 분석',
    'home.viewAll': '모든 분석 보기',
    'home.dailyOutlook': '일일 시장 전망',
    'home.outlookText': '코스피는 글로벌 역풍에도 불구하고 회복력을 보여주고 있습니다. AI 인프라 구축에 따라 기술 섹터가 성장의 주요 동력으로 남아 있습니다.',
    'footer.description': '글로벌 투자자들에게 한국 주식 시장에 대한 심도 있는 통찰력과 전문적인 분석을 제공합니다.',
    'footer.nav': '네비게이션',
    'footer.legal': '법적 고지',
    'footer.privacy': '개인정보 처리방침',
    'footer.about': '회사 소개',
    'footer.contact': '문의하기',
    'footer.terms': '이용 약관',
    'footer.disclaimer': '면책 고지',
    'footer.disclosures': '공시 사항',
    'footer.rights': '© 2026 K-Equity Analysis. 모든 권리 보유.',
    'article.back': '분석으로 돌아가기',
    'article.readMore': '더 보기',
    'article.targetPrice': '목표가',
    'article.contact': '애널리스트 문의',
    'article.disclosures': '중요 공시 사항',
    'article.disclosuresText': '이 보고서는 정보 제공 목적으로만 제공됩니다. K-Equity Analysis는 투자 자문을 제공하지 않으며 이 보고서는 투자 자문으로 해석되어서는 안 됩니다. 표명된 의견은 개별 애널리스트의 의견이며 반드시 회사의 견해를 반영하는 것은 아닙니다.',
    'news.back': '브리핑으로 돌아가기',
    'news.viewAll': '모든 브리핑 보기',
    'news.viewMore': '더 보기',
    'news.source': '출처',
    'news.category': '카테고리',
    'news.footerText': '이 브리핑은 당사의 일일 시장 커버리지의 일부입니다. 심층적인 주식 분석은 주요 분석 섹션을 참조하십시오.',
    'legal.back': '대시보드로 돌아가기',
    'legal.lastUpdated': '최종 업데이트',
    'legal.placeholder': '이 섹션에 대한 정보가 여기에 제공될 것입니다.',
    'market.movers': '시장 변동 종목',
    'market.topGainers': '상승 종목',
    'market.topLosers': '하락 종목',
    'market.briefs': '시장 브리핑',
    'market.equityAnalysis': '주식 분석',
    'market.indices': '지수',
    'market.futures': '선물',
    'market.bonds': '채권',
    'market.forex': '외환',
    'search.placeholder': '제목 또는 종목 코드로 검색...',
    'search.title': '검색 결과',
    'search.noResults': '에 대한 검색 결과가 없습니다',
    'search.articles': '분석 기사',
    'search.news': '시장 브리핑',
    'cookie.title': '쿠키 설정',
    'cookie.description': '당사는 귀하의 브라우징 경험을 개선하고 트래픽을 분석하기 위해 쿠키를 사용합니다. 선호하는 설정을 선택해 주세요.',
    'cookie.allowAll': '모든 쿠키 허용',
    'cookie.rejectAll': '모든 쿠키 거부',
    'cookie.blockThirdParty': '제3자 쿠키 차단'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
