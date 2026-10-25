import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./component/app.jsx"
import Services from "./component/services.jsx"
import Contact from "./component/contact.jsx"
import About from "./component/about.jsx"
import "./component/index.css";
import Navbar from "./component/navbar.jsx"
import Footer from "./component/footer.jsx"
import Skill from "./component/skills.jsx"
import Project from "./component/project.jsx"
import "bootstrap/dist/css/bootstrap.min.css";



createRoot(document.getElementById('root')).render(
  <div >
  <Navbar/>
  <Home/>
  <Services/>
  <About/>
  <Skill/>
  <Project/>
  <Contact/>
  <Footer/>
  </div>

)
