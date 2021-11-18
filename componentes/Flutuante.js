import Image from "next/image";

import { Box, Typography } from "@mui/material";

const Flutuante = ({ nome, descricao, foto }) => {
  return (
    <>
      <Box sx={{ position: "relative", filter: "grayscale(1)" }}>
        <Image
          src={foto}
          alt={nome}
          width={200}
          height={200}
          layout="responsive"
          objectFit="cover"
        />

        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            bgcolor: "rgba(0, 0, 0, 0.8)",
            opacity: "0",
            padding: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            transition: "opacity 0.3s",
            "&:hover": {
              opacity: "1",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "liquido",
            }}
          >
            {nome}
          </Typography>
          <Typography>{descricao}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Flutuante;
