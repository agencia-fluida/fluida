import Image from "next/image";

import { Box, Typography } from "@mui/material";

const TituloSobre = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "lg",
          height: "800px",
          position: "relative",
          bottom: "-50px",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "25px",
            top: "-100px",
            zIndex: "3",
          }}
        >
          <Typography
            variant="h1"
            component="h2"
            sx={{ fontFamily: "fluido", fontSize: "150px" }}
          >
            Sobre a
          </Typography>
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: "fluido",
              marginTop: "-40px",
              marginLeft: "60px",
              fontSize: "150px",
            }}
          >
            Fluída
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "120px",
            left: "300px",
            zIndex: "2",
          }}
        >
          <Image
            src="/img/sobre/quatroMeninas.jpg"
            alt="Quatro meninas"
            width={600}
            height={600}
          />
        </Box>

        <Box
          sx={{ position: "absolute", bottom: "0", right: "0", zIndex: "1" }}
        >
          <Image
            src="/img/sobre/fundo.jpg"
            alt="Fundo colorido"
            width={500}
            height={750}
          />
        </Box>
      </Box>
    </>
  );
};

export default TituloSobre;
