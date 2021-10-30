import { useState } from "react";
import Head from "next/head";

import { Box, TextField, Button, Typography } from "@mui/material";

import InputMask from "react-input-mask";
import CompanyEmailValidator from "company-email-validator";

import TituloFormulario from "../componentes/TituloFormulario";

const Briefing = () => {
  const [emailValido, setEmailValido] = useState(true);

  const validarEmail = (email) => {
    let valido = true;
    if (email) {
      valido = CompanyEmailValidator.isCompanyEmail(email);
    }
    setEmailValido(valido);
  };

  return (
    <>
      <Head>
        <title>Mande seu briefing - Agência Fluída</title>
        <meta
          name="description"
          content="Envie o seu briefing para ser avaliado pela nossa agência"
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
        <TituloFormulario>
          Mande seu briefing, um alô, ou nos convide para um café.
        </TituloFormulario>

        <Box
          component="form"
          name="briefing"
          sx={{
            marginTop: "50px",
            paddingX: {
              xs: "30px",
              md: "0",
            },
          }}
          data-netlify="true"
          method="POST"
          action="/sucesso"
        >
          <input type="hidden" name="form-name" value="briefing" />

          <TextField
            variant="outlined"
            label="Nome completo"
            placeholder="Larissa Barbosa Freitas"
            name="nome-completo"
            sx={{ width: "100%" }}
            required
          />

          <TextField
            variant="outlined"
            name="email-corporativo"
            type="email"
            label="E-mail corporativo"
            placeholder="seu.nome@suaempresa.com"
            helperText="Não use e-mails com domínio gratuito (terminados em @gmail.com, @outlook.com etc)"
            error={!emailValido}
            onChange={(e) => validarEmail(e.target.value)}
            sx={{ marginTop: 2, width: "100%" }}
            required
          />

          <InputMask
            mask="(99) 99999-9999"
            maskChar="_"
            variant="outlined"
            name="telefone"
            label="Telefone"
            helperText="Não esqueça de incluir o DDD"
            sx={{ marginTop: 2, width: "100%" }}
            inputProps={{ inputMode: "numeric" }}
            required
          >
            {(props) => <TextField {...props} />}
          </InputMask>

          <TextField
            variant="outlined"
            name="mensagem"
            label="Mensagem"
            sx={{ marginTop: 3, width: "100%" }}
            multiline
            minRows={3}
            required
          />

          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "100%",
              marginTop: 2,
              paddingY: "15px",
              fontSize: "15px",
            }}
            disabled={!emailValido}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Briefing;
