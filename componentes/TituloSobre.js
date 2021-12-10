import Image from "next/image";

import { Box, Typography } from "@mui/material";

const TituloSobre = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "lg",
          margin: "auto",
          maxHeight: {
            xs: "80vh",
            md: "100vh",
          },
          position: "relative",
          zIndex: "3",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "-10%",
            top: "-20%",
            zIndex: "3",
            display: {
              xs: "none",
              md: "block",
            },
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

        <Typography
          variant="h1"
          component="h2"
          sx={{
            fontFamily: "fluido",
            fontSize: "80px",
            display: {
              xs: "block",
              md: "none",
            },
            textAlign: "center",
          }}
        >
          Sobre a Fluída
        </Typography>

        <Box
          sx={{
            width: "100%",
            "& > div": {
              position: "unset !important",
            },
          }}
        >
          <Image
            src="/img/sobre.png"
            alt="Sobre a Fluída"
            layout="fill"
            className="custom-img"
          />
        </Box>
      </Box>
    </>
  );
};

export default TituloSobre;
