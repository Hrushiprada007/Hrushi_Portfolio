
import "./App.css";

const skills = [
  "Java",
  "Advanced Java",
  "Spring Boot",
  "Spring MVC",
  "REST APIs",
  "SQL",
  "MySQL",
  "Oracle",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Bootstrap",
  "React.js",
  "Git",
  "GitHub",
  "Postman",
];

const projects = [
  {
    number: "01",
    name: "CareerBridge",
    type: "SMART JOB PORTAL SYSTEM",
    description:
      "A job portal that connects recruiters and job seekers. Recruiters can register companies and post jobs, while job seekers can search opportunities and upload resumes. Includes role-based access and database-driven operations.",
    technologies: ["Java", "Servlets", "JSP", "JDBC", "MySQL"],
    features: [
      "Role-based authentication",
      "Job posting and search",
      "Resume upload",
    ],
  },
  {
    number: "02",
    name: "SkillForge AI",
    type: "AI INTERVIEW PREPARATION",
    description:
      "An interview-preparation application with a React frontend and Spring Boot backend. It integrates REST APIs and local AI capabilities to support resume analysis and interview preparation.",
    technologies: ["React.js", "Spring Boot", "REST API", "Ollama"],
    features: [
      "Resume upload and analysis",
      "Backend REST APIs",
      "AI-assisted preparation",
    ],
  },
];

const education = [
  {
    degree: "Master of Computer Applications",
    college: "Srusti Academy of Management and Technology",
    period: "2024 — 2026",
    score: "8.69 CGPA",
  },
  {
    degree: "Bachelor of Science — Physics",
    college: "PIMIT Degree College",
    period: "Completed 2024",
    score: "7.92 CGPA",
  },
    {
    degree: "Intermediate -Science",
    college: "UNIITECH HIGHER SECONDARY SCHOOL",
    period: "Completed 2020",
    score: "68 %",
  },
    {
    degree: "SCHOOLING",
    college: "KSB PUBLIC SCHOOL",
    period: "Completed 2018",
    score: "67 %",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Hrushiprada Swain home">
            <span className="brand-mark">HS</span>
            <span className="brand-name">
              HRUSHI<span>.</span>
            </span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a className="nav-contact" href="#contact">
              Contact <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              OPEN TO DEVELOPER OPPORTUNITIES
            </div>

            <p className="hero-kicker">HELLO, I'M</p>

            <h1>
              Hrushiprada
              <br />
              <span>Swain.</span>
            </h1>

            <h2>
              Java Full Stack <span>Developer</span>
            </h2>

            <p className="hero-description">
              Recent MCA graduate passionate about building reliable web
              applications with Java, Spring Boot, databases, and modern
              frontend technologies. I enjoy turning ideas into practical,
              user-friendly software.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Work <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-outline" href="#contact">
                Let's Connect
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <span className="meta-line" />
                MCA Graduate
              </span>
              <span>
                <span className="meta-line" />
                Java &amp; Spring Boot
              </span>
            </div>
          </div>
         
<div className="hero-visual">
  <div className="orbit orbit-one" />
  <div className="orbit orbit-two" />

  <div className="portrait-frame">
    <div className="portrait-inner">
      <img
        src="Profile.jpg"
        alt="Hrushiprada Swain"
        className="Profile-photo"
      />
    </div>
  </div>

  <div className="floating-card floating-card-top">
    <span className="floating-icon">{"</>"}</span>
    <span>
      <strong>Building</strong>
      <small>Web applications</small>
    </span>
  </div>

  <div className="floating-card floating-card-bottom">
    <span className="online-indicator" />
    <span>
      <strong>Ready to learn</strong>
      <small>Ready to contribute</small>
    </span>
  </div>

  <span className="visual-decoration decoration-one" />
  <span className="visual-decoration decoration-two" />
</div>

    </section>

        <section className="technology-strip" aria-label="Technologies">
          <div className="container technology-inner">
            <span className="technology-label">MY TECH STACK</span>
            <div className="technology-list">
              <span><b className="tech-symbol java-symbol">J</b> Java</span>
              <span><b className="tech-symbol spring-symbol">S</b> Spring Boot</span>
              <span><b className="tech-symbol database-symbol">▤</b> SQL</span>
              <span><b className="tech-symbol js-symbol">JS</b> JavaScript</span>
              <span><b className="tech-symbol react-symbol">⚛</b> React</span>
              <span><b className="tech-symbol git-symbol">⌘</b> Git</span>
              <span><b className="tech-symbol aws-symbol">☁</b> AWS</span>
            </div>
          </div>
        </section>

        <section className="about-section section-space" id="about">
          <div className="container about-layout">
            <div className="about-intro">
              <SectionHeading
                eyebrow="A LITTLE ABOUT ME"
                title="Developer mindset. Continuous growth."
              />
            </div>

            <div className="about-content">
              <p>
                I'm a recent Master of Computer Applications graduate who
                enjoys developing full-stack applications and solving
                programming problems. My main focus is Java development,
                Spring Boot, REST APIs, SQL, and building useful web
                experiences.
              </p>
              <p>
                Through projects such as CareerBridge and SkillForge AI, I've
                worked with backend logic, database operations, API
                integration, and frontend development. I'm looking for an
                opportunity to contribute to a development team, strengthen my
                engineering skills, and build software that solves real
                problems.
              </p>

              <a className="text-link" href="#contact">
                Let's discuss an opportunity <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="skills-section section-space" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="TECHNICAL TOOLKIT"
              title="Skills I work with."
              description="Technologies and tools I've learned and used across my development practice and projects."
            />

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-item" key={skill}>
                  <span className="skill-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{skill}</span>
                  <span className="skill-arrow" aria-hidden="true">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section section-space" id="projects">
          <div className="container">
            <SectionHeading
              eyebrow="SELECTED PROJECTS"
              title="Things I've built."
              description="Practical applications that demonstrate my interest in backend development, full-stack engineering, and solving real problems."
            />

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-topline">
                    <span className="project-number">{project.number}</span>
                    <span className="project-type">{project.type}</span>
                    <span className="project-arrow" aria-hidden="true">↗</span>
                  </div>

                  <div className="project-art" aria-hidden="true">
                    <span className="art-orbit art-orbit-one" />
                    <span className="art-orbit art-orbit-two" />
                    <span className="art-code">
                      {project.number === "01" ? "{" : "<"}
                    </span>
                    <span className="art-caption">
                      {project.number === "01"
                        ? "CONNECT · DISCOVER · APPLY"
                        : "BUILD · ANALYZE · IMPROVE"}
                    </span>
                  </div>

                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>

                  <ul className="project-features">
                    {project.features.map((feature) => (
                      <li key={feature}>
                        <span aria-hidden="true">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="project-tech">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="education-section section-space" id="education">
          <div className="container">
            <SectionHeading
              eyebrow="EDUCATION"
              title="My learning journey."
              description="The academic foundation behind my interest in software development."
            />

            <div className="education-list">
              {education.map((item, index) => (
                <article className="education-card" key={item.degree}>
                  <div className="education-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="education-details">
                    <h3>{item.degree}</h3>
                    <p>{item.college}</p>
                    <span>{item.period}</span>
                  </div>
                  <div className="education-score">
                    <strong>{item.score}</strong>
                    <span>Academic result</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-space" id="contact">
          <div className="container contact-panel">
            <span className="section-eyebrow">LET'S WORK TOGETHER</span>
            <h2>
              Have an opportunity?
              <br />
              <span>Let's build something useful.</span>
            </h2>
            <p>
              I'm interested in Java Developer, Software Developer Trainee,
              and Java Full Stack Developer opportunities.
            </p>

            <div className="contact-actions">
              <a
                className="button button-primary"
                href="mailto: hrushipradaswain@gmail.com"
              >
                Email Me <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button button-outline"
                href="https://github.com/Hrushiprada007"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                className="button button-outline"
                href="https://www.linkedin.com/in/hrushipradaswain"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">HS</span>
            <span className="brand-name">
              HRUSHI<span>.</span>
            </span>
          </a>
          <p>Designed and built with React.</p>
          <a className="back-to-top" href="#home">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
