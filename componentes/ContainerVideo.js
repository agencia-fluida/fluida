import { Box, Paper, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

import Image from "next/image";

const ContainerVideo = ({ altura, videoSrc, children }) => {
  const tema = useTheme();

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          height: altura,
          bgcolor: tema.palette.primary.main,
          marginY: "30px",
          borderRadius: 0,
          position: "relative",
        }}
      >
        <video
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            objectFit: "cover",
            zIndex: "0",
          }}
          autoPlay
          muted
          loop
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        <Box
          sx={{
            height: altura,
            zIndex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "30px",
          }}
        >
          {children}
        </Box>
      </Paper>
    </>
  );
};

export default ContainerVideo;
