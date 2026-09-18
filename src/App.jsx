import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>MAKARA THINA</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <div className="hero-text">
          <p className="small-title">PORTFOLIO / FRONT-END</p>

          <h1>
            Hi, I'm <span>Makara Thina</span>
          </h1>

          <h2>Junior Front-End Developer</h2>

          <p>
            I am a Year 2 Information Technology student at
            the National University of Battambang.
            I enjoy building modern, responsive and
            user-friendly websites with React.js.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>

            <a href="#contact" className="btn outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/45.jpg" alt="Makara Thina" />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <p className="small-title">01 / SKILLS</p>

        <h2>My Skills</h2>

        <div className="skills">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React.js</p>
            <p>React Router</p>
            <p>Tailwind CSS</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>MongoDB</p>
            <p>Mongoose</p>
            <p>REST API</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git</p>
            <p>GitHub</p>
            <p>VS Code</p>
            <p>Postman</p>
            <p>Vite</p>
          </div>

          <div className="skill-card">
            <h3>Learning</h3>
            <p>TypeScript</p>
            <p>Angular</p>
            <p>UI / UX</p>
            <p>Clean Code</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <p className="small-title">02 / PROJECTS</p>

        <h2>My Projects</h2>

        <div className="projects">
          <a href="https://cinema-one-alpha.vercel.app/"
            target="_blank"
            rel="noreferrer"
          className="project-card"
          >
          
            <h3>Cinema Booking System ↗</h3>

            <p>
              A responsive cinema website with movie
              browsing, movie details, seat selection
              and booking UI.
            </p>
            <span>HTML • JavaScript • CSS • CRUD</span>
            <small>Click to view project →</small>
          </a>

          <a
            href="https://shoe-store-pi-rouge.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <h3>NovaKicks ↗</h3>
            <p>
              A sneaker e-commerce website with
              product details, navigation and
              responsive design.
            </p>

            <span>React • Tailwind • API</span>

            <small>Click to view project →</small>
          </a>

        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <p className="small-title">03 / ABOUT ME</p>

        <h2>About Me</h2>

        <p>
          I am currently a Year 2 Information Technology
          student at the National University of Battambang.
        </p>

        <p>
          My main interest is Front-End Web Development,
          especially React.js and modern responsive UI.
        </p>

        <p>
          I also have basic knowledge of Node.js,
          Express.js, MongoDB and REST APIs.
        </p>

        <p>
          Currently, I am learning TypeScript and Angular
          because I want to become a strong Junior
          Front-End Developer.
        </p>
        <div className="education-container">
          <div className="education">
            <h3>Education</h3>

            <p>
              <b>Bachelor of Information Technology — Year 2</b>
              <br />
              National University of Battambang
            </p>

            <p>
              <b>High School Certificate</b>
              <br />
              Preah Monivong High School
            </p>
          </div>

          <div className="education">
            <h3>COURSES & TRAINING</h3>

            <p>
              <b>English Language – Level 5</b>
              <br />
              National University of Battambang
            </p>

            <p>
              <b>IT Foundation</b>
              <br />
              MASTER-IT
            </p>

            <p>
              <b>Full Stack Web Developer</b>
              <br />
              MASTER-IT
            </p>
          </div>
        </div>

      </section>

      {/* EXPERINCE */}
      <section id="about" className="section about">
        <p className="small-title">04 / EXPERINCE</p>

        <h2>EXPERINCE</h2>

        <p>
          T Support Intern 1 Year
          National University Of Battambang (NUBB) – Battambang
        </p>

        <p>
          Provided technical support to staff and students on campus
        </p>

        <p>
          Assisted with hardware and software troubleshooting.
        </p>

        <p>
          Gained hands-on experience in an IT support environment.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <p className="small-title">04 / CONTACT</p>

        <h2>Let's Work Together</h2>

        <p>
          I am open to Junior Front-End Developer
          opportunities, internships and remote work.
        </p>

        <div className="contact">
          <p>
            <Mail size={18} />
            thinamakara278@gmail.com
          </p>

          <p>
            <Phone size={18} />
            +855 98 223 304
          </p>

          <p>
            <MapPin size={18} />
            Battambang, Cambodia
          </p>
        </div>

        <a
          href="mailto:thinamakarа278@gmail.com"
          className="btn"
        >
          Send Me an Email
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Makara Thina</p>
        <p>IT Student • Junior Front-End Developer</p>
      </footer>
    </div>
  );
}

export default App;