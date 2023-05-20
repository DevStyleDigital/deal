import type { AppProps } from 'next/app';
import { Lato } from 'next/font/google';

import 'styles/globals.css';

const lato = Lato({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-primary',
});

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
