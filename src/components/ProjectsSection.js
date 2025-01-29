import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button, Form } from 'react-bootstrap';
import lesBricoleuses from '../assets/images/lesBricoleuses.png';
import flappyBirdImage from '../assets/images/FlappyBird.png';
import { Box } from '@mui/material';
import decoderImage from '../assets/images/decoder.jpg';
import nomattitudeImage from '../assets/images/nomattitude.jpg';
import joImage from '../assets/images/jo2024.png';
import cypressTestsImage from '../assets/images/cypressTests.png';
import gestionBDImage from '../assets/images/gestionBD.png';

export const projects = [
  {
    name: "Création d'un site internet pour un client",
    description: "Développement en groupe d'un site internet pour la compagnie Les Bricoleuses en FullStack avec Vue.js, Vite et Django.",
    link1: 'https://framagit.org/ThomasDuppi/bricoleuses-alternant',
    link2: 'https://lesbricoleuses.org',
    image: lesBricoleuses,
    skills: ['Développer', 'Collaborer'],
  },
  {
    name: 'Flappy Bird',
    description: 'Développement personnalisé du jeu Flappy Bird avec Unity6 et en C#.',
    link1: 'https://github.com/tanguypcr/flappy-bird',
    image: flappyBirdImage,
    skills: ['Développer', 'Optimiser'],
    exeFile: '../assets/exeFiles/FlappyBird.exe'
  },
  {
    name: 'HermesCommDecoder',
    description: "Conception d'un outil permettant de décoder et traiter les données issues de satellites, en Python et Java.",
    link1: 'https://github.com/tanguypcr/HermesCommDecoder',
    image: decoderImage,
    skills: ['Développer', 'Conduire', 'Collaborer'],
  },
  {
    name: 'Hermes Link',
    description: 'Développement d’une application web pour la gestion de parcs de véhicules, de la géolocalisation et des alertes en temps réel, avec React.js et Node.js.',
    image: nomattitudeImage,
    skills: ['Développer', 'Gérer', 'Collaborer'],
  },
  {
    name: 'Création d\'un site Web en Symfony sur les JO Paris 2024',
    description: 'Développement d\'un site Web sur les JO de Paris 2024 avec Symfony.',
    image: joImage,
    skills: ['Développer', 'Optimiser'],
  },
  {
    name: 'Création de tests IHM avec Cypress',
    description: 'Création de tests d\'interface utilisateur avec Cypress et Gherkin pour le site Web lesbricoleuses.org que j\'ai développé en groupe.',
    image: cypressTestsImage,
    skills: ['Développer', 'Optimiser', 'Collaborer'],
  },
  {
    name: "Création et gestion de bases de données",
    description: "Création et gestion de bases de données avec MySQL et PostgreSQL. Fonctionnalités: Création de schémas de base de données, requêtes complexes, procédures stockées.",
    image: gestionBDImage,
    skills: ['Administrer', 'Gérer'],
  }
];

const ProjectsSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterSkill, setFilterSkill] = useState('');

  const bigSkills = [
    { value: 'Développer', name: '<b>Développer</b> — concevoir, coder, tester et intégrer une solution informatique pour un client' },
    { value: 'Optimiser', name: '<b>Optimiser</b> — proposer des applications optimisées en fonction de critères spécifiques' },
    { value: 'Administrer', name: '<b>Administrer</b> — installer, configurer, maintenir et optimiser des infrastructures et services' },
    { value: 'Gérer', name: '<b>Gérer</b> — concevoir, gérer et exploiter les données de l’entreprise' },
    { value: 'Conduire', name: '<b>Conduire</b> — satisfaire les besoins des utilisateurs et piloter un projet informatique' },
    { value: 'Collaborer', name: '<b>Collaborer</b> — travailler efficacement dans une équipe informatique' },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const handleFilterChange = (e) => {
    setFilterSkill(e.target.value);
  };

  const filteredProjects = filterSkill
    ? projects.filter((project) => project.skills.includes(filterSkill))
    : projects;

  return (
    <Container id="projects" className="py-5">
      <h2 className="text-center mb-4">Mes Projets</h2>

      {/* Skill Filter Dropdown */}
      <Form.Group controlId="skillFilter" className="mb-4">
        <Form.Label>Filtrer par compétence :</Form.Label>
        <Form.Control as="select" value={filterSkill} onChange={handleFilterChange}>
          <option value="">Toutes les compétences</option>
          {bigSkills.map((skill, index) => (
            <option key={index} value={skill.value}>
              <span dangerouslySetInnerHTML={{ __html: skill.value }} />
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Row>
        {filteredProjects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100" onClick={() => handleProjectClick(project)} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={project.image} alt={`${project.name} image`} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Project Details */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedProject?.image} alt={`${selectedProject?.name} image`} className="img-fluid mb-3" />
          <Box style={{ marginBottom: "20px"}} dangerouslySetInnerHTML={{ __html: selectedProject?.description }} />
          <h5>Compétences développées :</h5>
          <ul>
            {selectedProject?.skills.map((skill, index) => {
              const skillDetails = bigSkills.find((s) => s.value === skill);
              return (
                <li key={index} dangerouslySetInnerHTML={{ __html: skillDetails?.name || skill }} />
              );
            })}
          </ul>
          {selectedProject?.link1 && (
            <div className="d-flex flex-column">
            <Button href={selectedProject?.link1} target="_blank" rel="noopener noreferrer" variant="primary" className="mb-2">
              Voir le code source
            </Button>
            {selectedProject?.link2 && (
              <Button href={selectedProject?.link2} target="_blank" rel="noopener noreferrer" variant="secondary">
                Voir le site
              </Button>
            )}
          </div>
          )}
          {selectedProject?.exeFile && (
            <div>
              <h5>Télécharger l'éxecutable :</h5>
              <a href={selectedProject.exeFile} download>Télécharger {selectedProject.name}</a>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProjectsSection;