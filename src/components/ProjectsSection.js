import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button, Form } from 'react-bootstrap';
import lesBricoleuses from '../assets/images/lesBricoleuses.png';
import FlappyBird from '../assets/images/FlappyBird.png';
import { Box } from '@mui/material';

const ProjectsSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterSkill, setFilterSkill] = useState('');

  // Define the big skills from the B.U.T. Informatique program
  const bigSkills = [
    { value: 'Développer', name: '<b>Développer</b> — concevoir, coder, tester et intégrer une solution informatique pour un client' },
    { value: 'Optimiser', name: '<b>Optimiser</b> — proposer des applications optimisées en fonction de critères spécifiques' },
    { value: 'Administrer', name: '<b>Administrer</b> — installer, configurer, maintenir et optimiser des infrastructures et services' },
    { value: 'Gérer', name: '<b>Gérer</b> — concevoir, gérer et exploiter les données de l’entreprise' },
    { value: 'Conduire', name: '<b>Conduire</b> — satisfaire les besoins des utilisateurs et piloter un projet informatique' },
    { value: 'Collaborer', name: '<b>Collaborer</b> — travailler efficacement dans une équipe informatique' },
  ];

  const projects = [
    {
      name: "Création d'un site internet pour un client",
      description: "Développement en groupe d'un site internet pour la compagnie Les Bricoleuses avec Vue.js et Vite.",
      link1: 'https://framagit.org/ThomasDuppi/bricoleuses-alternant',
      link2: 'https://lesbricoleuses.org',
      image: lesBricoleuses,
      skills: ['Développer', 'Collaborer'],
    },
    {
      name: 'Flappy Bird',
      description: 'Développement personnalisé du jeu Flappy Bird avec Unity6 et en C#',
      link1: 'https://github.com/tanguypcr/flappy-bird',
      image: FlappyBird,
      skills: ['Développer', 'Optimiser'],
    },
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

  // Filter projects based on the selected skill
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
          <Col md={6} key={index} className="mb-4">
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