import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { personalInfo } from '../Data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-5 bg-slate-900/50">
      <Container className="py-5">
        <h2 className="text-center fw-bold text-white mb-5 display-5">
          About <span className="gradient-text">Me</span>
        </h2>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="glass-card p-4 text-slate-300 rounded-4">
              <Card.Body>
                <p className="fs-5 leading-relaxed mb-0">
                  {personalInfo.bio}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;