import { Box, Typography } from "@mui/material";

import Image from "next/image";

import Retangulo from "./Retangulo";
import ContainerVideo from "./ContainerVideo";

const Banner = () => {
  return <>
    <Box
      sx={{
        maxWidth: {
          md: "90%",
          xs: "100%",
        },
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: {
          sm: "center",
          md: "start",
        },
      }}
    >
      <Retangulo />

      <ContainerVideo altura="650px" videoSrc="/img/fundoInicio.webm">
        <Box sx={{ margin: { md: "auto" }, zIndex: '2' }}>
          <Image
            src="/img/logo-nova-2.svg"
            width={700}
            height={500}
            alt="Agência Fluída"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </Box>

        <Typography
          sx={{
            zIndex: "inherit",
            fontSize: {
              xs: "20px",
              md: "25px",
            },
            fontWeight: "500",
            textTransform: "uppercase",
            alignSelf: {
              md: "end",
              xs: "center",
            },
            marginTop: { md: "auto", xs: "100px" },
          }}
        >
          Para criar é preciso fluir
        </Typography>
      </ContainerVideo>

      <Retangulo esquerda />
    </Box>
  </>;
};

export default Banner;
