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
          maxWidth: "lg",
          maxHeight: {
            xs: "80vh",
            md: "100vh",
          },
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: {
              xs: "flex",
              md: "absolute",
            },
            top: "25px",
            left: "25px",
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
            width={800}
            height={800}
          />
        </Box>
      </Box>
    </>
  );
};

export default TituloServicos;
