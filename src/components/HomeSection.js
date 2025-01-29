import React from 'react';
import { Typography, Box } from '@mui/material';
import profileImage from '../assets/images/1000007566.jpg';

const HomeSection = () => {
  return (
    <Box id="home" sx={{ textAlign: 'center', padding: '40px 0' }}>
      <Typography variant="h4" gutterBottom>Bienvenue sur mon portfolio</Typography>
      <Typography variant="body1">Découvrez mes compétences, projets et réalisations.</Typography>
      <img 
        src={profileImage} 
        alt="Photo de profil" 
        style={{ marginTop: '20px', borderRadius: '50%', width: '175px', height: '175px', objectFit: 'cover' }} 
      />
    </Box>
  );
};

export default HomeSection;