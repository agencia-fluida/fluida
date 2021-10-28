import Image from "next/image";

import { Box, Typography } from "@mui/material";

const TituloSobre = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "lg",
          maxHeight: "80vh",
          position: "relative",
          margin: "auto",
          zIndex: "3",
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
            sx={{
              fontFamily: "fluido",
              fontSize: "100px",
              display: {
                xs: "inline-block",
                md: "block",
              },
            }}
          >
            Sobre a
          </Typography>
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: "fluido",
              marginTop: "-40px",
              marginLeft: {
                md: "60px",
                xs: "20px",
              },
              fontSize: "100px",
              display: {
                xs: "inline-block",
                md: "block",
              },
            }}
          >
            Fluída
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "3",
          }}
        >
          <Image
            src="/img/sobre.png"
            alt="Sobre a Fluída"
            width={800}
            height={800}
          />
        </Box>
      </Box>
    </>
  );
};

export default TituloSobre;
