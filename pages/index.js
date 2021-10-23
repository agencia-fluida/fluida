import Head from "next/head";
import Image from "next/image";

import { Box } from "@mui/material";

import Banner from "../componentes/Banner";
import Sobre from "../componentes/Sobre";
import Servicos from "../componentes/Servicos";
import Flutuantes from "../componentes/Flutuantes";

const Index = () => {
  return (
    <>
      <Head>
        <title>Agência Fluída</title>
        <meta
          name="description"
          content="Somos uma agência totalmente adaptável. Uma correnteza de mulheres com diversas habilidades, conectadas em projetos personalizados para marcas, agências e veículos."
        />
        <link rel="icon" href="/img/logoFluida.png" />
      </Head>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingY: "100px",
        }}
      >
        <Banner />

        <Sobre />

        <Servicos />

        <Flutuantes />
      </Box>
    </>
  );
};

export default Index;
