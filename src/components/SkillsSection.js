import React from 'react';
import { Accordion, Card, Container, ListGroup } from 'react-bootstrap';
import { projects } from './ProjectsSection';

const SkillsSection = () => {
  // Mapping des compétences du programme avec les clés utilisées dans les projets
  const competences = [
    {
      programName: 'Réaliser',
      projectSkill: 'Développer',
      description: 'Développer une solution informatique pour un client',
      ces: [
        'CE1.0.1 | Respecter les exigences du client',
        'CE1.0.2 | Appliquer les principes algorithmiques',
        'CE1.0.3 | Garantir la qualité du code et documentation',
        'CE1.0.4 | Choisir les ressources techniques appropriées',
      ],
    },
    {
      programName: 'Optimiser',
      projectSkill: 'Optimiser',
      description: 'Proposer des applications optimisées',
      ces: [
        'CE2.0.1 | Formaliser des situations complexes',
        'CE2.0.2 | Utiliser des algorithmes et structures de données',
        'CE2.0.3 | Appliquer des raisonnements logiques',
        'CE2.0.4 | Justifier les choix techniques',
      ],
    },
    {
      programName: 'Administrer',
      projectSkill: 'Administrer',
      description: 'Maintenir des infrastructures informatiques',
      ces: [
        'CE3.0.1 | Gérer le système d\'information',
        'CE3.0.2 | Appliquer les normes de sécurité',
        'CE3.0.3 | Assurer la qualité de service',
        'CE3.0.4 | Garantir la continuité d\'activité',
      ],
    },
    {
      programName: 'Gérer',
      projectSkill: 'Gérer',
      description: 'Exploiter les données de l\'entreprise',
      ces: [
        'CE4.0.1 | Respecter les réglementations',
        'CE4.0.2 | Considérer les impacts économiques/écologiques',
        'CE4.0.3 | S\'appuyer sur des bases mathématiques',
        'CE4.0.4 | Assurer la qualité des données',
      ],
    },
    {
      programName: 'Conduire',
      projectSkill: 'Conduire',
      description: 'Satisfaire les besoins utilisateurs',
      ces: [
        'CE5.0.1 | Adopter une démarche proactive',
        'CE5.0.2 | Respecter les règles juridiques',
        'CE5.0.3 | Communiquer efficacement',
        'CE5.0.4 | Sensibiliser à l\'éthique',
      ],
    },
    {
      programName: 'Collaborer',
      projectSkill: 'Collaborer',
      description: 'Travailler en équipe informatique',
    },
  ];

  return (
    <Container id="skills" className="py-5">
      <h2 className="text-center mb-4">Compétences du B.U.T Informatique</h2>
      
      <Accordion >
        {competences.map((competence, index) => {
          const relatedProjects = projects.filter(project => 
            project.skills.includes(competence.projectSkill)
          );

          return (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>
                <strong>{competence.programName}</strong> : {competence.description}
              </Accordion.Header>
              
              <Accordion.Body>
                <h5 >Projets Associés :</h5>
                {relatedProjects.length > 0 ? (
                  <div className="d-flex flex-wrap gap-3">
                    {relatedProjects.map((project, pIndex) => (
                      <Card key={pIndex} style={{ width: '18rem' }}>
                        <Card.Img 
                          variant="top" 
                          src={project.image} 
                          style={{ height: '150px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                          <Card.Title>{project.name}</Card.Title>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p>Aucun projet associé pour cette compétence</p>
                )}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Container>
  );
};

export default SkillsSection;