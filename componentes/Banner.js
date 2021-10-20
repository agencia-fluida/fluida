import { Box, Typography } from "@mui/material";

import Image from "next/image";

import Retangulo from "./Retangulo";
import ContainerVideo from "./ContainerVideo";

const Banner = () => {
  return (
    <>
      <Box sx={{ paddingX: "10%", display: "flex", flexDirection: "column" }}>
        <Retangulo />

        <ContainerVideo altura="650px" videoSrc="/img/fundoInicio.webm">
          <Box sx={{ margin: "auto" }}>
            <Image
              src="/img/logoFluida.png"
              width={400}
              height={400}
              alt="Agência Fluída"
            />
          </Box>

          <Typography
            sx={{
              zIndex: "inherit",
              fontSize: "22px",
              fontWeight: "500",
              textTransform: "uppercase",
              alignSelf: "end",
              marginTop: "auto",
            }}
          >
            Para criar é preciso fluir
          </Typography>
        </ContainerVideo>

        <Retangulo esquerda />
      </Box>
    </>
  );
};

export default Banner;
