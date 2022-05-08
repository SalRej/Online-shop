import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Script from 'next/script'
import { Fragment } from 'react';
import '../public/styles/styles.scss';
import 'animate.css';
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
        <Header/>
        <Component {...pageProps} />
        <Footer />
        <Script src="https://kit.fontawesome.com/f62a6be0ed.js" crossorigin="anonymous"></Script>
    </Fragment>
  )
}

export default MyApp
