import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const nextRouter = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      const pageContent = document.querySelector('.page-content');
      if (pageContent) {
        pageContent.classList.add('page-transition');
      }
    };
    
    const handleRouteComplete = () => {
      const pageContent = document.querySelector('.page-content');
      if (pageContent) {
        pageContent.classList.remove('page-transition');
      }
    };
    

    nextRouter.events.on('routeChangeStart', handleRouteChange);
    nextRouter.events.on('routeChangeComplete', handleRouteComplete);

    return () => {
      nextRouter.events.off('routeChangeStart', handleRouteChange);
      nextRouter.events.off('routeChangeComplete', handleRouteComplete);
    };
  }, [nextRouter]);

  return (
    <AnimatePresence mode='wait'>
      <Component {...pageProps} key={nextRouter.route} />
    </AnimatePresence>
  );
}

export default MyApp;
