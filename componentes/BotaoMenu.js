import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const BotaoMenu = ({ onClick, children }) => {
  const tema = useTheme();
  return (
    <>
      <Button
        onClick={onClick}
        sx={{
          color: "white",
          textTransform: "none",
          borderRadius: "0",
          fontSize: "16px",
          fontWeight: "normal",
          transitionDuration: "0s",
          marginLeft: "40px",
          "&:hover": {
            background: "none",
            borderTop: `2px solid ${tema.palette.secondary.main}`,
          },
        }}
      >
        {children}
      </Button>
    </>
  );
};

export default BotaoMenu;
