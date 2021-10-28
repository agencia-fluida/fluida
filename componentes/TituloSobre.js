import Image from "next/image";

import { Box, Typography } from "@mui/material";

const TituloSobre = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "lg",
          maxHeight: {
            xs: "80vh",
            md: "100vh",
          },
          position: "relative",
          margin: "auto",
          zIndex: "3",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            right: "30%",
            top: "-10%",
            zIndex: "3",
          }}
        >
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: "fluido",
              fontSize: {
                xs: "80px",
                md: "150px",
              },
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
              fontSize: {
                xs: "80px",
                md: "150px",
              },
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
            justifyContent: {
              xs: "center",
              md: "start",
            },
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
