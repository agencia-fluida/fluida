import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

import Image from "next/image";

const TituloServicos = () => {
  const tema = useTheme();

  return (
    <>
      <Box
        sx={{
          margin: "auto",
          width: "60%",
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
          <Typography
            variant="h1"
            sx={{
              fontFamily: "fluido",
              fontSize: "150px",
              color: tema.palette.secondary.main,
              "&::before": {
                color: "white",
                display: "block",
                content: `"Nossos servicos"`,
                marginBottom: "-80px",
                "-webkit-text-stroke": "2px white",
                "-webkit-text-fill-color": "transparent",
                zIndex: "2",
              },
              "&::after": {
                color: "white",
                display: "block",
                content: `"Nossos servicos"`,
                marginTop: "-80px",
                "-webkit-text-stroke": "3px white",
                "-webkit-text-fill-color": "transparent",
                zIndex: "2",
              },
            }}
          >
            Nossos servicos
          </Typography>
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
