import { Container, Box } from "@mui/material";

import TituloServicos from "./TituloServicos";
import CartaoServico from "./CartaoServico";

const Servicos = () => {
  const categorias = [
    {
      titulo: "Branding",
      imagem: "/img/servicos/branding.png",
      servicos: [
        "Naming",
        "Identidade visual",
        "Construção estratégica de posicionamento",
        "Brand Persona",
      ],
    },
    {
      titulo: "Social Media",
      imagem: "/img/servicos/social.png",
      servicos: [
        "Planejamento estratégico de conteúdo",
        "Social Listening",
        "Planejamento de campanhas de mídia e tráfego",
        "Construção de blog focado em SEO",
        "Produção audiovisual de conteúdos educativos e de entretenimento: Web séries; Documentários; Cursos",
        "Short contents para plataformas digitais.",
      ],
    },
    {
      titulo: "Branded Content & Entertainment",
      imagem: "/img/servicos/branded.png",
      servicos: [
        "Produção audiovisual de conteúdos educativos e de entretenimento: Web séries; Documentários; Cursos",
        "Short contents para plataformas digitais.",
      ],
    },
    {
      titulo: "Influencer Marketing",
      imagem: "/img/servicos/influencer.png",
      servicos: [
        "Planejamento estratégico de campanha",
        "Definição de objetivos e KPIs",
        "Social Listening",
        "Estratégia de redes",
        "Mapeamento de perfis",
        "Relatórios",
      ],
    },
  ];
  return (
    <>
      <Box sx={{ marginTop: "100px" }}>
        <TituloServicos />

        <Box
          sx={{
            maxWidth: "xl",
            display: "grid",
            gridTemplateColumns: {
              md: "1fr 1fr 1fr 1fr",
              xs: "1fr",
            },
            gridGap: "20px",
            margin: "auto",
            marginTop: "100px",
            paddingX: {
              xs: "20px",
              md: "0",
            },
          }}
        >
          {categorias.map((categoria, index) => (
            <CartaoServico
              key={index}
              titulo={categoria.titulo}
              imagem={categoria.imagem}
              servicos={categoria.servicos}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Servicos;
