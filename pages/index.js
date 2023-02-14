import Head from "next/head";
import Image from "next/image";

import { Box } from "@mui/material";

import Banner from "../componentes/Banner";
import Sobre from "../componentes/Sobre";
import Servicos from "../componentes/Servicos";
import Flutuantes from "../componentes/Flutuantes";
import Clientes from "../componentes/Clientes";

const Index = () => {
  return (
    <>
      <Head>
        <title>Agência Fluída</title>
        <meta
          name="description"
          content="Somos uma agência totalmente adaptável. Uma correnteza de mulheres com diversas habilidades, conectadas em projetos personalizados para marcas, agências e veículos."
        />
        <link rel="apple-touch-icon" sizes="57x57" href="/img/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/img/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/img/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/img/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/img/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/img/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/img/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/img/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/img/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/img/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />
        <link rel="manifest" href="/img/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/img/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Banner />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingY: "100px",
          maxWidth: "xl",
          margin: "auto",
          paddingX: {
            xl: "0",
            sm: "10%",
          },
        }}
      >
        <Sobre />

        <Servicos />

        <Clientes />
      </Box>
    </>
  );
};

export default Index;
