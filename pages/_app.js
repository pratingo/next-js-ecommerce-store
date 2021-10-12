import '../styles/globals.css';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import { getParsedCookie } from '../util/cookies';

function MyApp({ Component, pageProps }) {
  const [totalProductsCount, setTotalProductsCount] = useState(0);

  useEffect(() => {
    if (getParsedCookie()?.length) {
      setTotalProductsCount(getParsedCookie()?.length);
    }
  }, []);

  return (
    <div>
      <Header total={totalProductsCount} />

      <Main totalProductsCount={totalProductsCount}>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </div>
  );
}

export default MyApp;
