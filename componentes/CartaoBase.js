import { Card, CardContent, Typography, Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const CartaoBase = ({ children }) => {
  const tema = useTheme();
  return (
    <>
      <Card
        sx={{
          border: "2px solid white",
          borderRadius: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "visible",
          position: "relative",
        }}
      >
        {children}
      </Card>
    </>
  );
};

export default CartaoBase;
