import { Box, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";

import { Menu as MenuIcon } from "@mui/icons-material";

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
            paddingX: {
              md: "30px",
            },
          }}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <BotaoMenu>Home</BotaoMenu>
            <BotaoMenu>Seja uma flutuante</BotaoMenu>
            <BotaoMenu>Mande seu briefing</BotaoMenu>
          </Box>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{
              display: {
                md: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Menu;
