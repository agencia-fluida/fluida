import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../styles/globals.css";

import Head from "next/head";
import { ThemeProvider, CssBaseline } from "@mui/material";
import tema from "../styles/tema";

import Menu from "../componentes/Menu";
import Footer from "../componentes/Footer";

function MyApp({ Component, pageProps }) {
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
