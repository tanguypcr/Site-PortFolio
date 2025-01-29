import React, { useRef } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7o5k4kb', 'template_8rnnhc9', form.current, 'HWTXC3uJgbIM3P1lq')
      .then((result) => {
          console.log(result.text);
          alert('Message envoyé avec succès!');
      }, (error) => {
          console.log(error.text);
          alert('Une erreur est survenue, veuillez réessayer.');
      });
  };

  return (
    <Box id="contact" sx={{ padding: '40px 0' }}>
      <Typography variant="h4" gutterBottom>Contactez-moi</Typography>
      <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '500px', margin: '0 auto' }}>
        <TextField label="Votre nom" name="user_name" variant="outlined" required />
        <TextField label="Votre email" name="user_email" variant="outlined" type="email" required />
        <TextField label="Votre message" name="message" variant="outlined" multiline rows={4} required />
        <Button variant="contained" color="primary" type="submit">Envoyer</Button>
      </form>
    </Box>
  );
};

export default ContactSection;