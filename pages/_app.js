import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../styles/globals.css";

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Head from "next/head";
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
