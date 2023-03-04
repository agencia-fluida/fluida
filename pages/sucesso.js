import { useState } from "react";
import Head from "next/head";
import Script from "next/script";

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

      <Script id="meta-pixel-code" strategy="afterInteractive" onLoad={() => {
          console.log('meta-pixel-code loaded')
        }}>
        {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '742267110547022');
        fbq('track', 'Lead');`}
      </Script>
      <noscript>
        <img height="1" width="1" style={{display: 'none'}}
        src="https://www.facebook.com/tr?id=742267110547022&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  );
};

export default Briefing;
