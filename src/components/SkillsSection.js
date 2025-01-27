import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import htmlLogo from '../assets/images/html.png';
import jsLogo from '../assets/images/javascript.png';
import reactLogo from '../assets/images/react.png';
import csharpLogo from '../assets/images/csharp.png';
import dotnetLogo from '../assets/images/dotnet.png';
import javaLogo from '../assets/images/java.png';
import javaFXLogo from '../assets/images/javafx.png';
import sqlLogo from '../assets/images/sql.png';
import angularLogo from '../assets/images/angular.png';
import cssLogo from '../assets/images/css.png';
import pythonLogo from '../assets/images/python.png';
import cypherLogo from '../assets/images/cypher.png';
import typescriptLogo from '../assets/images/typescript.png';
import vueLogo from '../assets/images/vue.png';
import symfonyLogo from '../assets/images/symfony.png';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', level: 80, logo: htmlLogo },
    { name: 'CSS', level: 80, logo: cssLogo },
    { name: 'JavaScript', level: 60, logo: jsLogo },
    { name: 'TypeScript', level: 60, logo: typescriptLogo },
    { name: 'Python', level: 70, logo: pythonLogo },
    { name: 'Java', level: 85, logo: javaLogo },
    { name: 'JavaFX', level: 65, logo: javaFXLogo },
    { name: 'C#', level: 70, logo: csharpLogo },
    { name: '.NET', level: 70, logo: dotnetLogo },
    { name: 'SQL', level: 65, logo: sqlLogo },
    { name: 'Cypher', level: 50, logo: cypherLogo },
    { name: 'React', level: 80, logo: reactLogo },
    { name: 'Angular', level: 60, logo: angularLogo },
    { name: 'Vue', level: 55, logo: vueLogo },
    { name: 'Symfony', level: 70, logo: symfonyLogo },
    { name: 'GitHub', level: 75, logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
  ];

  return (
    <Container id="skills" className="py-5">
      <h2 className="text-center mb-4">Mes Compétences</h2>
      <Row className="justify-content-center">
        {skills.map((skill, index) => (
          <Col md={3} key={index} className="mb-4 d-flex">
            <Card className="h-100 w-100">
              <Card.Img variant="top" src={skill.logo} alt={`${skill.name} logo`} style={{ height: '100px', objectFit: 'contain', marginTop: '20px' }} />
              <Card.Body>
                <Card.Title className="text-center">{skill.name}</Card.Title>
                <ProgressBar now={skill.level} label={`${skill.level}%`} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SkillsSection;