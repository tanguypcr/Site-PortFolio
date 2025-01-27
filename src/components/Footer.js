import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import des icônes LinkedIn et GitHub

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <Row className="text-center">
          <Col>
            <h5>Retrouvez-moi sur :</h5>
            <div className="d-flex justify-content-center gap-3">
              {/* Lien LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tanguy-picuira-8a2419277/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaLinkedin size={32} />
              </a>

              {/* Lien GitHub */}
              <a
                href="https://github.com/tanguypcr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaGithub size={32} />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} Tanguy Picuira. Tous droits réservés.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;