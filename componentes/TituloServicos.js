import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

import Image from "next/image";

import TextoFluido from "./TextoFluido";

const TituloServicos = () => {
  const tema = useTheme();

  return (
    <>
      <Box
        sx={{
          margin: "auto",
          maxWidth: "70%",
          height: "800px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "3",
          }}
        >
          <TextoFluido>Nossos servicos</TextoFluido>
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            bottom: "10%",
            right: "10%",
          }}
        >
          <Image
            src="/img/servicos/servicos.jpg"
            width={750}
            height={500}
            alt="Serviços"
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            zIndex: 0,
            bottom: "0",
            right: "0",
          }}
        >
          <Image
            src="/img/servicos/fundo.jpg"
            width={500}
            height={750}
            alt="Fundo"
          />
        </Box>
      </Box>
    </>
  );
};

export default TituloServicos;
