import React from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'; // Icônes pour la timeline
import './Timeline.css'; // Custom CSS for the timeline

const ExperiencesSection = () => {
  // Données pour le parcours académique
  const academicData = [
    {
      date: '2022 - 2025',
      title: 'BUT Informatique',
      subtitle: 'IUT de Blagnac',
      description: 'Formation en développement logiciel, gestion de projet et bases de données.',
    },
    {
      date: '2022',
      title: 'Baccalauréat Général',
      subtitle: 'Lycée Georges Leygues, Villeneuve-sur-Lot',
      description: 'Spécialité Numérique et Sciences Informatiques et Mathématiques.',
    },
  ];

  // Données pour les expériences professionnelles
  const professionalData = [
    {
      date: '2023 - Présent',
      title: 'Développeur en Alternance',
      subtitle: 'Nomattitude',
      description: 'Participation au développement de solutions logicielles adaptées aux besoins des clients avec C#, Node.js et React.js.',
    },
    {
      date: '2022',
      title: 'Réceptionniste',
      subtitle: 'Leclerc Villeneuve-sur-Lot',
      description: 'Réception des palettes des camions, vérification des marchandises et gestion des stocks.',
    },
  ];

  return (
    <section id="experiences" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Expériences</h2>
        <Tabs defaultActiveKey="academic" id="experience-tabs" className="mb-4 justify-content-center">
          {/* Onglet Parcours académique */}
          <Tab eventKey="academic" title="Parcours académique">
            <div className="timeline">
              {academicData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                    <p>{item.description}</p>
                    <span className="timeline-date">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </Tab>

          {/* Onglet Expériences professionnelles */}
          <Tab eventKey="professional" title="Expériences professionnelles">
            <div className="timeline">
              {professionalData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-icon">
                    <FaBriefcase />
                  </div>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                    <p>{item.description}</p>
                    <span className="timeline-date">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

export default ExperiencesSection;
