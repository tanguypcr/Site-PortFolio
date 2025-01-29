import React from 'react';
import { Typography, Box } from '@mui/material';

const AboutSection = () => {
  return (
    <Box id="about" sx={{ padding: '40px 0', textAlign: 'justify' }}>
      <Typography variant="h4" gutterBottom>À propos de moi</Typography>
      <Typography variant="body1">
        <Box style={{ marginBottom: '20px' }}>
          Je suis un <b>développeur passionné</b> avec une curiosité insatiable pour les nouvelles technologies et une créativité nourrie par mes diverses passions : les <b>jeux vidéo</b>, le <b>cinéma</b>, la <b>musique</b>, et le <b>sport</b>. Ces centres d'intérêt m'inspirent et m'aident à adopter des approches innovantes dans mes projets.
        </Box>
        <Box style={{ marginBottom: '20px' }}>
          Actuellement en <b>3ᵉ année de BUT Informatique en alternance</b>, je combine une solide formation académique avec une expérience pratique acquise en milieu professionnel. Cette double compétence me permet de travailler efficacement sur des projets variés, allant du développement logiciel à la gestion de données en passant par l’optimisation de systèmes.
        </Box>
        <Box style={{ marginBottom: '20px' }}>
          Dans mon temps libre, je continue d'explorer mes passions, que ce soit en développant des <b>projets personnels</b>, en découvrant de nouvelles musiques avant-gardistes, ou en analysant les mécaniques des jeux vidéo pour enrichir ma compréhension du design interactif.
        </Box>
        <Box style={{ marginBottom: '20px' }}>
          Que ce soit pour collaborer sur un projet, échanger sur des idées, ou partager des expériences, je suis toujours à la recherche de nouvelles opportunités pour apprendre et grandir.
        </Box>
      </Typography>
    </Box>
  );
};

export default AboutSection;