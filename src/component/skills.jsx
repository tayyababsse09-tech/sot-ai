import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { skills } from '../Data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-slate-950">
      <Container className="py-5">
        <h2 className="text-center fw-bold text-white mb-5 display-5">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col key={index} sm={6} md={4}>
              <Card className="glass-card h-100 text-center p-3 rounded-4">
                <Card.Body>
                  <h5 className="fw-bold text-white mb-3 fs-4">{skill.name}</h5>
                  <Badge className="bg-teal-500/20 text-teal-300 border border-teal-500/30 px-3 py-2 rounded-pill">
                    {skill.category}
                  </Badge>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;