import { Box, Card, CardContent, Typography, Button } from "@mui/material";

import { useTheme } from "@emotion/react";

import CartaoSobre from "./CartaoSobre";

const Sobre = () => {
  const tema = useTheme();
  return (
    <>
      <Box sx={{ maxWidth: "80%", margin: "auto", marginY: "100px" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <CartaoSobre />
        </Box>
      </Box>
    </>
  );
};

export default Sobre;
