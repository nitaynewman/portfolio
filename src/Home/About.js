import React from 'react';
import './About.css';
import { FaCode, FaReact, FaCodepen, FaDatabase, FaCodeBranch, FaFileCode  } from "react-icons/fa";


const About = ({ id }) => {
  return (
    <div id={id} className="about-container">
      {/* Objective Section */}
      <section className="about-section objective-section">
        <h2 className="section-title">Objective</h2>
        <div className="section-content">
          <p className="objective-text">
            Experienced Full-Stack Developer with a track record of delivering high-quality software applications.
            Skilled in front-end and back-end development, with a passion for creating responsive and user-friendly applications.
          </p>
          <p className="objective-text">
            Over 3 years of proven ability to collaborate with cross-functional teams to meet project goals and deadlines.
            Dedicated and passionate developer with a strong work ethic, consistently delivering high-quality solutions.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-section skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon"><FaCode /></div>
            <h3>Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><FaReact /></div>
            <h3>Frontend</h3>
            <div className="skill-tags">
              <span className="skill-tag">React-Native</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><FaFileCode /></div>
            <h3>Backend</h3>
            <div className="skill-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">RESTful APIs</span>
              <span className="skill-tag">FastApi APIs</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><FaDatabase /></div>
            <h3>Databases</h3>
            <div className="skill-tags">
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Elasticsearch</span>
              <span className="skill-tag">S3</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><FaCodeBranch /></div>
            <h3>DevOps & Cloud</h3>
            <div className="skill-tags">
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Kubernetes</span>
              <span className="skill-tag">Openshift</span>
              <span className="skill-tag">Amazon S3</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Supabase</span>
              <span className="skill-tag">Firebase</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><FaCodepen /></div>
            <h3>Architecture</h3>
            <div className="skill-tags">
              <span className="skill-tag">Microservices</span>
              <span className="skill-tag">REST APIs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="about-section experience-section">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Full Stack Developer</h3>
                <span className="timeline-date">Feb 2022 – Oct 2024</span>
              </div>
              <h4 className="company-name">IDF, 8200 Unit</h4>
              <ul className="experience-list">
                <li>Completed full service in the IDF in 8200 unit as a full-stack developer.</li>
                <li>Developed web applications using React, Python, TypeScript, SQL, Elasticsearch, Kubernetes, and Docker.</li>
                <li>Over 100 projects in Python, React, and TypeScript ranging from automations, games, web scraping, web development, and more.</li>
                <li>Implemented RESTful APIs and integrated third-party services for automations.</li>
              </ul>
            </div>
          </div>
        </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Full Stack Developer</h3>
                <span className="timeline-date">May 2025 – Present</span>
              </div>
              <h4 className="company-name">Mothershipcorp - Remote</h4>
              <ul className="experience-list">
                <li>Worked on full-stack development of scalable web applications using React, TypeScript, and Flask in a microservices-based architecture.</li>
                <li>Utilized PostgreSQL for relational data modeling and querying and implemented Amazon S3 for scalable and secure file storage.</li>
                <li>Developed and integrated RESTful APIs, including secure authentication, data validation, and inter-service communication.</li>
              </ul>
            </div>
          </div>
      </section>

      {/* Education Section */}
      <section className="about-section education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          <div className="education-card">
            <div className="education-icon">🎓</div>
            <h3>High School - Full Bagrut</h3>
            <h4>Tora U-Mada High School, Kfar Sava</h4>
            <span className="education-date">Sep 2017 – Jul 2020</span>
            <ul className="education-list">
              <li>5 units Theory of Electricity</li>
              <li>5 units Computer Science</li>
              <li>5 units Physics</li>
              <li>5 units Mathematics</li>
              <li>5 units English</li>
            </ul>
          </div>
          <div className="education-card">
            <div className="education-icon">🔒</div>
            <h3>Course - Secure Development</h3>
            <h4>John Bryce College, Tel Aviv</h4>
            <span className="education-date">Oct 2023 – Nov 2023</span>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="about-section languages-section">
        <h2 className="section-title">Languages</h2>
        <div className="languages-grid">
          <div className="language-card">
            <div className="language-icon">🇺🇸</div>
            <h3>English</h3>
            <span className="proficiency">Native</span>
          </div>
          <div className="language-card">
            <div className="language-icon">🇮🇱</div>
            <h3>Hebrew</h3>
            <span className="proficiency">Native</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;