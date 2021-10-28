import { useState } from "react";

import {
  Box,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@emotion/react";

import { Menu as MenuIcon } from "@mui/icons-material";

import BotaoMenu from "./BotaoMenu";

const Menu = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto((atual) => !atual);
  };

  const links = [
    { texto: "Home", url: "/" },
    { texto: "Seja uma flutuante", url: "/" },
    { texto: "Mande seu briefing", url: "/" },
  ];
  const tema = useTheme();
  return (
    <>
      <Drawer
        anchor="right"
        open={menuAberto}
        onClose={toggleMenu}
        PaperProps={{
          sx: {
            height: "160px",
            marginTop: "50px",
          },
        }}
      >
        <List>
          {links.map((link, index) => (
            <ListItem key={index} button>
              <ListItemText>{link.texto}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
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
            {links.map((link, index) => (
              <BotaoMenu>{link.texto}</BotaoMenu>
            ))}
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
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Menu;
