import { useState } from "react";

import { Box, TextField, Button, Typography } from "@mui/material";

import TituloFormulario from "../componentes/TituloFormulario";

const Briefing = () => {
  const [emailValido, setEmailValido] = useState(true);

  const validarEmail = (email) => {
    const blacklist = ["gmail", "outlook", "yahoo"];
    let valido = true;

    console.log(email);

    blacklist.map((termo) => {
      if (email.toLowerCase().includes(termo)) {
        console.log("Inválido");
        valido = false;
      }
    });

    setEmailValido(valido);
  };

  return (
    <>
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
          sx={{
            marginTop: "50px",
            paddingX: {
              xs: "30px",
              md: "0",
            },
          }}
          data-netlify="true"
        >
          <TextField
            variant="outlined"
            label="Nome completo"
            placeholder="Larissa Barbosa Freitas"
            name="nome"
            sx={{ width: "100%" }}
            required
          />

          <TextField
            variant="outlined"
            name="email"
            label="E-mail corporativo"
            placeholder="seu.nome@suaempresa.com"
            helperText="Não use e-mails com domínio gratuito (terminados em @gmail.com, @outlook.com etc)"
            error={!emailValido}
            onChange={(e) => validarEmail(e.target.value)}
            sx={{ marginTop: 2, width: "100%" }}
            required
          />
          <TextField
            variant="outlined"
            name="telefone"
            label="Telefone"
            placeholder="11 97024-1683"
            helperText="Não esqueça de incluir o DDD"
            sx={{ marginTop: 2, width: "100%" }}
            required
          />

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
