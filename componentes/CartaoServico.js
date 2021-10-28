import Image from "next/image";

import { useTheme } from "@emotion/react";

import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { ChevronRight } from "@mui/icons-material";

const CartaoServico = ({ imagem, titulo, servicos, onClick }) => {
  const tema = useTheme();

  return (
    <>
      <Card onClick={onClick}>
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

          <Box
            sx={{
              marginTop: "30px",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <ul>
              {servicos.map((servico, index) => (
                <li key={index} style={{ marginTop: "15px" }}>
                  {servico}
                </li>
              ))}
            </ul>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default CartaoServico;
