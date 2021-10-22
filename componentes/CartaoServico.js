import Image from "next/image";

import { useTheme } from "@emotion/react";

import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { ChevronRight } from "@mui/icons-material";

const CartaoServico = ({ imagem, titulo, servicos }) => {
  const tema = useTheme();

  return (
    <>
      <Card>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "30px",
          }}
        >
          <Image src={imagem} alt={titulo} width={100} height={100} />
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              marginTop: "30px",
              color: tema.palette.primary.main,
              fontWeight: "medium",
            }}
          >
            {titulo}
          </Typography>

          <List sx={{ marginTop: "30px" }}>
            {servicos.map((servico, index) => (
              <ListItem key={index} dense>
                <ListItemIcon>
                  <ChevronRight />
                </ListItemIcon>
                <ListItemText>{servico}</ListItemText>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </>
  );
};

export default CartaoServico;
