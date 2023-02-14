import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../styles/globals.css";

import { useEffect } from 'react'
import { useRouter } from 'next/router'


import Head from "next/head";
import Script from 'next/script'

import { ThemeProvider, CssBaseline } from "@mui/material";
import tema from "../styles/tema";

import Menu from "../componentes/Menu";
import Footer from "../componentes/Footer";

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('742267110547022') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])


  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />

      </Head>

      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KVR798H');`}
      </Script>

      <Script id="google-tag" src="https://www.googletagmanager.com/gtag/js?id=G-R72L04HQ4T" strategy="afterInteractive" />

      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-R72L04HQ4T');`}
      </Script>

      <ThemeProvider theme={tema}>
        <CssBaseline />

        <Menu />

        <Component {...pageProps} />

        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
