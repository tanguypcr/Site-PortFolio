import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
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

const ToolsSection = () => {
  const tools = [
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'TypeScript', logo: typescriptLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'Java', logo: javaLogo },
    { name: 'JavaFX', logo: javaFXLogo },
    { name: 'C#', logo: csharpLogo },
    { name: '.NET', logo: dotnetLogo },
    { name: 'SQL', logo: sqlLogo },
    { name: 'Cypher', logo: cypherLogo },
    { name: 'React', logo: reactLogo },
    { name: 'Angular', logo: angularLogo },
    { name: 'Vue', logo: vueLogo },
    { name: 'Symfony', logo: symfonyLogo },
    { name: 'GitHub', logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
  ];

  return (
    <Container id="tools" className="py-5">
      <h2 className="text-center mb-4">Outils</h2>
      <Row className="justify-content-center">
        {tools.map((skill, index) => (
          <Col md={3} key={index} className="mb-4 d-flex">
            <Card className="h-100 w-100">
              <Card.Img variant="top" src={skill.logo} alt={`${skill.name} logo`} style={{ height: '60px', objectFit: 'contain', marginTop: '20px' }} />
              <Card.Body>
                <Card.Title className="text-center">{skill.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ToolsSection;
