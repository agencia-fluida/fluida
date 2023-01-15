import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

import Image from "next/image";

import TextoFluido from "./TextoFluido";

const TituloServicos = () => {
  const tema = useTheme();

  return <>
    <Box
      sx={{
        margin: "auto",
        maxWidth: "lg",
        maxHeight: {
          xs: "80vh",
          md: "100vh",
        },
        position: "relative",
        marginTop: "100px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          position: {
            xs: "flex",
            md: "absolute",
          },
          top: "-10%",
          left: "-5%",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "3",
        }}
      >
        <TextoFluido>Nossos servicos</TextoFluido>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: {
            xs: "center",
            md: "end",
          },
          alignItems: "center",
          zIndex: "3",
        }}
      >
        <Image
          src="/img/servicos.png"
          alt="Serviços"
          width={1453}
          height={1080}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </Box>
    </Box>
  </>;
};

export default TituloServicos;
