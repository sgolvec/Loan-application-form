import '../styles/global.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className='border-8 min-h-screen border-blue-500 flex flex-col'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
