import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Fragment } from 'react';
import '../public/styles/styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
        <Head>
            <script src="https://kit.fontawesome.com/f62a6be0ed.js" crossorigin="anonymous"></script>
        </Head>
        <Header/>
        <Component {...pageProps} />
        <Footer />
    </Fragment>
  )
}

export default MyApp
