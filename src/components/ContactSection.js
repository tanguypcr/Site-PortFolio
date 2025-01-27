import React from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';

const ContactSection = () => {
  return (
    <Box id="contact" sx={{ padding: '40px 0' }}>
      <Typography variant="h4" gutterBottom>Contactez-moi</Typography>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '500px', margin: '0 auto' }}>
        <TextField label="Votre nom" variant="outlined" required />
        <TextField label="Votre email" variant="outlined" type="email" required />
        <TextField label="Votre message" variant="outlined" multiline rows={4} required />
        <Button variant="contained" color="primary" type="submit">Envoyer</Button>
      </form>
    </Box>
  );
};

export default ContactSection;
