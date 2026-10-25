import React from 'react';
import { Container, Button, Carousel } from 'react-bootstrap';
import { personalInfo } from '../Data/portfolio';

const App = () => {
  return (
    <section id="home" className="min-vh-100 p-0 bg-slate-950 position-relative d-flex align-items-center">
      
      {/* Floating Animated Background Glow Circles */}
      <div className="position-absolute top-25 start-25 w-96 h-96 bg-teal-500/10 rounded-circle blur-3xl animate-glow pointer-events-none"></div>
      <div className="position-absolute bottom-25 end-25 w-96 h-96 bg-pink-500/10 rounded-circle blur-3xl animate-glow pointer-events-none" style={{ animationDelay: '3s' }}></div>

      <Carousel controls={true} indicators={true} interval={5000} fade className="w-100">
        
        {/* Slide 1 */}
        <Carousel.Item>
          <div 
            className="min-vh-100 d-flex align-items-center justify-content-center text-center" 
            style={{ 
              backgroundImage: `linear-gradient(180deg, rgba(3, 7, 18, 0.85) 0%, rgba(3, 7, 18, 0.95) 100%), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <Container className="py-5 mt-5 animate-entrance">
              <span className="d-inline-block bg-teal-500/20 text-teal-300 border border-teal-500/30 px-4 py-2 rounded-pill mb-3 fw-medium">
                ⚡ Full Stack Web Developer
              </span>
              <h1 className="display-3 fw-bold text-white mb-3">
                Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <p className="lead text-slate-300 mb-4 fs-3 max-w-2xl mx-auto">
                {personalInfo.title}
              </p>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <Button href="#projects" size="lg" className="btn-glow-teal-pink px-4 py-3 fw-semibold rounded-pill">
                  View Live Projects 🚀
                </Button>
                <Button href="#contact" variant="outline-info" size="lg" className="px-4 py-3 rounded-pill text-teal-400 border-teal-400 hover:bg-teal-500/20">
                  Contact Me
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div 
            className="min-vh-100 d-flex align-items-center justify-content-center text-center" 
            style={{ 
              backgroundImage: `linear-gradient(180deg, rgba(3, 7, 18, 0.85) 0%, rgba(3, 7, 18, 0.95) 100%), url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <Container className="py-5 mt-5 animate-entrance">
              <span className="d-inline-block bg-pink-500/20 text-pink-300 border border-pink-500/30 px-4 py-2 rounded-pill mb-3 fw-medium">
                🌐 Frontend, Backend & Deployment
              </span>
              <h1 className="display-3 fw-bold text-white mb-3">
                Building & <span className="gradient-text">Deploying Modern Web Apps</span>
              </h1>
              <p className="lead text-slate-300 mb-4 fs-3 max-w-2xl mx-auto">
                Crafting robust applications using React, Bootstrap, Tailwind CSS & Database Architecture
              </p>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <Button href="#skills" size="lg" className="btn-glow-teal-pink px-4 py-3 fw-semibold rounded-pill">
                  Explore Tech Stack 💻
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>

      </Carousel>
    </section>
  );
};

export default App;