import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ToolsSection from './components/ToolsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CourseSection from './components/CourseSection'; 
import SkillsSection from './components/SkillsSection';
import cvPDF from './assets/CV/CV de Tanguy Picuira a jour.pdf';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Portfolio - Tanguy Picuira</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#about">À propos</Nav.Link>
            <Nav.Link href="#skills">Compétences</Nav.Link>
            <Nav.Link href="#languages">Compétences techniques</Nav.Link>
            <Nav.Link href="#course">Parcours</Nav.Link>
            <Nav.Link href="#projects">Projets</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
        <a href={cvPDF} download="CV Tanguy Picuira.pdf" className="btn btn-light" style={{marginRight: "20px"}}>Mon CV</a>
      </Navbar>
      <Container>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ToolsSection />
        <CourseSection />
        <ProjectsSection />
        <ContactSection />
      </Container>
      <Footer />
    </>
  );
}

export default App;