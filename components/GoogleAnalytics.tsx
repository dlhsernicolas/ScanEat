import React, { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-Y8NKT8RHB8';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Cargar script gtag.js
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Inicializar gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
  }, []);

  return null;
};

export default GoogleAnalytics;
