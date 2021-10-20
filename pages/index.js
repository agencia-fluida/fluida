import Head from "next/head";
import Image from "next/image";

import Banner from "../componentes/Banner";

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

      <Banner />
    </>
  );
};

export default Index;
