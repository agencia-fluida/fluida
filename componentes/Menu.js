import { AppBar, Toolbar, Button } from "@mui/material";
import { useTheme } from "@emotion/react";

import BotaoMenu from "./BotaoMenu";

const Menu = () => {
  const tema = useTheme();
  return (
    <>
      <AppBar
        elevation={0}
        position="sticky"
        sx={{ bgcolor: tema.palette.background.default }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "end",
            paddingX: "30px",
          }}
        >
          <BotaoMenu>Home</BotaoMenu>
          <BotaoMenu>Seja uma flutuante</BotaoMenu>
          <BotaoMenu>Mande seu briefing</BotaoMenu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Menu;
