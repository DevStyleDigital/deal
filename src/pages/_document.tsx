import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Domus - uma marca para você chamar de lar" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
