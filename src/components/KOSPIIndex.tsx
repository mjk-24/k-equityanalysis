import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const KOSPIIndex: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    if (container.current) {
      // Clear previous content to avoid duplicates
      container.current.innerHTML = '';
      
      const widgetContainer = document.createElement("div");
      widgetContainer.className = "tradingview-widget-container";
      widgetContainer.style.height = "100%";
      widgetContainer.style.width = "100%";
      
      const widget = document.createElement("div");
      widget.className = "tradingview-widget-container__widget";
      widget.style.height = "calc(100% - 32px)";
      widget.style.width = "100%";
      widgetContainer.appendChild(widget);
      
      const copyright = document.createElement("div");
      copyright.className = "tradingview-widget-copyright";
      copyright.innerHTML = `<a href="https://www.tradingview.com/markets/" rel="noopener nofollow" target="_blank"><span class="blue-text">${language === 'ko' ? '시장 요약' : 'Market summary'}</span></a> by TradingView`;
      widgetContainer.appendChild(copyright);

      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        "colorTheme": "dark",
        "locale": language === 'ko' ? 'ko' : 'en',
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": true,
        "backgroundColor": "#0F0F0F",
        "support_host": "https://www.tradingview.com",
        "width": "100%",
        "height": "100%",
        "symbolsGroups": [
          {
            "name": t('market.indices'),
            "symbols": [
              {
                "name": "FOREXCOM:SPXUSD",
                "displayName": "S&P 500 Index"
              },
              {
                "name": "FOREXCOM:NSXUSD",
                "displayName": "US 100 Cash CFD"
              },
              {
                "name": "FOREXCOM:DJI",
                "displayName": "Dow Jones Industrial Average Index"
              },
              {
                "name": "INDEX:NKY",
                "displayName": "Japan 225"
              },
              {
                "name": "INDEX:DEU40",
                "displayName": "DAX Index"
              },
              {
                "name": "FOREXCOM:UKXGBP",
                "displayName": "FTSE 100 Index"
              }
            ]
          },
          {
            "name": t('market.futures'),
            "symbols": [
              {
                "name": "BMFBOVESPA:ISP1!",
                "displayName": "S&P 500"
              },
              {
                "name": "BMFBOVESPA:EUR1!",
                "displayName": "Euro"
              },
              {
                "name": "CMCMARKETS:GOLD",
                "displayName": "Gold"
              },
              {
                "name": "PYTH:WTI3!",
                "displayName": "WTI Crude Oil"
              },
              {
                "name": "BMFBOVESPA:CCM1!",
                "displayName": "Corn"
              }
            ]
          },
          {
            "name": t('market.bonds'),
            "symbols": [
              {
                "name": "EUREX:FGBL1!",
                "displayName": "Euro Bund"
              },
              {
                "name": "EUREX:FBTP1!",
                "displayName": "Euro BTP"
              },
              {
                "name": "EUREX:FGBM1!",
                "displayName": "Euro BOBL"
              }
            ]
          },
          {
            "name": t('market.forex'),
            "symbols": [
              {
                "name": "FX:EURUSD",
                "displayName": "EUR to USD"
              },
              {
                "name": "FX:GBPUSD",
                "displayName": "GBP to USD"
              },
              {
                "name": "FX:USDJPY",
                "displayName": "USD to JPY"
              },
              {
                "name": "FX:USDCHF",
                "displayName": "USD to CHF"
              },
              {
                "name": "FX:AUDUSD",
                "displayName": "AUD to USD"
              },
              {
                "name": "FX:USDCAD",
                "displayName": "USD to CAD"
              }
            ]
          }
        ]
      });
      widgetContainer.appendChild(script);
      container.current.appendChild(widgetContainer);
    }
  }, [language, t]);

  return (
    <div className="w-full h-[600px] bg-[#0F0F0F]" ref={container}>
      {/* TradingView widget will be injected here */}
    </div>
  );
};
