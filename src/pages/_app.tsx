import type { AppProps } from 'next/app';
import { Lato } from 'next/font/google';
import Head from 'next/head';

import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'styles/globals.css';

const lato = Lato({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-primary',
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Deal Empreendimentos</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
