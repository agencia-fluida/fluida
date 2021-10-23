import { Box, Card, CardContent, Typography, Button } from "@mui/material";

import { useTheme } from "@emotion/react";

import CartaoSobre from "./CartaoSobre";
import CartaoDetalhes from "./CartaoDetalhes";

const Sobre = () => {
  const tema = useTheme();
  return (
    <>
      <Box sx={{ maxWidth: "md", margin: "auto", marginY: "100px" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "30px",
            alignItems: "start",
          }}
        >
          <CartaoSobre />
          <CartaoDetalhes />
        </Box>
      </Box>
    </>
  );
};

export default Sobre;
