import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "GetDustify",
    description: "A professional service management platform engineered for fast performance and clean UI.",
    liveDemo: "https://getdustify.com/",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
  },
  {
    id: 2,
    title: "Squad5 Platform",
    description: "A modern web application showcasing dynamic user experiences and modern design layout.",
    liveDemo: "https://squad5.netlify.app/",
    techStack: ["React.js", "Tailwind CSS", "Bootstrap"]
  },
  {
    id: 3,
    title: "Modern Web Application",
    description: "An advanced web application built with clean UI, responsive layout, and interactive features.",
    liveDemo: "https://elaborate-daifuku-d9f5c7.netlify.app/",
    techStack: ["React.js", "Tailwind CSS", "Bootstrap"]
  }
];

const Project = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-5" style={{ backgroundColor: '#030712' }}>
      <Container className="py-4">
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-5 fw-bold text-white mb-2">
            Featured <span className="text-transparent bg-clip-text" style={{ background: 'linear-gradient(to right, #2dd4bf, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</span>
          </h2>
          <p className="text-muted fs-5">Explore my live site previews and applications.</p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Row className="g-4 justify-content-center">
            {projects.map((project) => (
              <Col key={project.id} lg={6} md={12} className="mb-4">
                <motion.div 
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="h-100"
                >
                  <Card 
                    className="border border-secondary shadow-lg h-100 rounded-4 p-4 text-white"
                    style={{ backgroundColor: '#0f172a' }}
                  >
                    <Card.Body className="d-flex flex-column p-0">
                      
                      {/* Browser Window Mockup with Live Website Screenshot API */}
                      <div className="mb-4 rounded-3 overflow-hidden border border-secondary bg-slate-950 shadow-md">
                        {/* Browser Top Bar */}
                        <div className="bg-slate-900 px-3 py-2 d-flex align-items-center gap-2 border-bottom border-secondary">
                          <span className="rounded-circle bg-danger d-inline-block" style={{ width: '10px', height: '10px' }}></span>
                          <span className="rounded-circle bg-warning d-inline-block" style={{ width: '10px', height: '10px' }}></span>
                          <span className="rounded-circle bg-success d-inline-block" style={{ width: '10px', height: '10px' }}></span>
                          <span className="text-muted small ms-2 text-truncate" style={{ fontSize: '0.75rem' }}>{project.liveDemo}</span>
                        </div>
                        
                        {/* Automated Live Screenshot Preview */}
                        <div style={{ height: '190px', overflow: 'hidden', position: 'relative' }}>
                          <motion.img 
                            src={`https://api.microlink.io/?url=${encodeURIComponent(project.liveDemo)}&screenshot=true&meta=false&embed=screenshot.url`}
                            alt={project.title}
                            className="w-100 h-100 object-fit-cover"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.4 }}
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h3 className="h4 fw-bold m-0 text-white">{project.title}</h3>
                        <Badge bg="danger" className="px-3 py-2 rounded-pill" style={{ fontSize: '0.75rem' }}>
                          🔥 Web App
                        </Badge>
                      </div>
                      
                      <Card.Text className="text-light mb-4 flex-grow-1 fs-6 leading-relaxed opacity-75">
                        {project.description}
                      </Card.Text>
                      
                      {/* Tech Stack Tags */}
                      <div className="mb-4 d-flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="badge bg-dark text-info border border-info px-3 py-2 rounded-pill fw-semibold"
                            style={{ fontSize: '0.85rem' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <Button
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-0 w-100 fw-semibold rounded-pill py-3 text-white fs-6 shadow-md text-decoration-none"
                        style={{ background: 'linear-gradient(to right, #14b8a6, #ec4899)' }}
                      >
                        Open Live Site Fullscreen ↗
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Project;cl