import { useState } from "react";
import Head from "next/head";

import { Box, TextField, Button, Typography } from "@mui/material";

import { CheckCircle } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const Briefing = () => {
  const tema = useTheme();
  return (
    <>
      <Head>
        <title>Sucesso - Agência Fluída</title>
        <meta
          name="description"
          content="O envio do seu formulário foi bem-sucedido."
        />
        <link rel="icon" href="/img/logoFluida.png" />
      </Head>
      <Box
        sx={{
          paddingY: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "md",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            marginY: "50px",
            textAlign: "center",
            paddingX: "30px",
          }}
        >
          <CheckCircle
            sx={{
              fontSize: "200px",
              color: tema.palette.primary.main,
            }}
          />

          <Typography variant="h4">Tudo certo!</Typography>
          <Typography mt={3}>
            Já recebemos a sua mensagem e vamos entrar em contato pelo seu
            e-mail.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Briefing;