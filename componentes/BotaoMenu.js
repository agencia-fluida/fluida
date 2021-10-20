import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const BotaoMenu = ({ children }) => {
  const tema = useTheme();
  return (
    <>
      <Button
        sx={{
          color: "white",
          textTransform: "none",
          borderRadius: "0",
          fontSize: "16px",
          fontWeight: "normal",
          transitionDuration: "0s",
          "&:hover": {
            background: "none",
            borderTop: `2px solid ${tema.palette.primary.main}`,
          },
        }}
      >
        {children}
      </Button>
    </>
  );
};

export default BotaoMenu;
