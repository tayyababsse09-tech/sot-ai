import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Form, Alert } from 'react-bootstrap';
import { personalInfo } from '../Data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-5 bg-slate-900/50">
      <Container className="py-5">
        <div className="text-center mb-5 animate-entrance">
          <h2 className="fw-bold text-white mb-3 display-5">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto fs-5">
            Feel free to call directly or send an email message for full-stack web development projects.
          </p>
        </div>

        <Row className="justify-content-center g-4">
          
          {/* Quick Contact Info Card */}
          <Col md={5}>
            <Card className="glass-card p-4 rounded-4 h-100 text-center">
              <Card.Body className="d-flex flex-column justify-content-center">
                
                {/* Direct Email Link */}
                <div className="mb-4">
                  <span className="text-teal-400 d-block fs-5 mb-1 fw-semibold">📧 Email Address</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-white text-decoration-none fs-5 fw-bold hover:text-pink-400 transition">
                    {personalInfo.email}
                  </a>
                </div>

                {/* Direct Phone Call Link */}
                <div className="mb-4">
                  <span className="text-pink-400 d-block fs-5 mb-1 fw-semibold">📞 Direct Phone / Call</span>
                  <a href="tel:+923000000000" className="btn btn-outline-info text-teal-300 border-teal-500/40 rounded-pill px-4 py-2 mt-2 fw-semibold">
                    📲 Tap to Call: +92 3294509525
                  </a>
                </div>

                <div className="d-flex justify-content-center gap-4 pt-3">
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-teal-400 text-decoration-none hover:text-pink-400 fs-5 fw-semibold transition">
                    LinkedIn ↗
                  </a>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-teal-400 text-decoration-none hover:text-pink-400 fs-5 fw-semibold transition">
                    GitHub ↗
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Email Submit Form */}
          <Col md={7}>
            <Card className="glass-card p-4 rounded-4">
              <Card.Body>
                <h4 className="text-white mb-4 fw-bold">Send a Direct Message</h4>

                {submitted && (
                  <Alert variant="success" className="bg-teal-500/20 text-teal-200 border-teal-500/40 rounded-3 mb-4">
                    🎉 Thank you! Your message has been sent successfully.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-slate-300">Your Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name" 
                      required 
                      className="bg-slate-950/80 border-slate-700 text-white rounded-3 py-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-slate-300">Your Email</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email" 
                      required 
                      className="bg-slate-950/80 border-slate-700 text-white rounded-3 py-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="text-slate-300">Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={4} 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your project details..." 
                      required 
                      className="bg-slate-950/80 border-slate-700 text-white rounded-3"
                    />
                  </Form.Group>

                  <Button type="submit" className="btn-glow-teal-pink w-100 py-3 fw-semibold rounded-pill fs-6">
                    Submit Email Message 🚀
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Contact;