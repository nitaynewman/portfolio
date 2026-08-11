import React from 'react';
import './About.css';
import { FaCode, FaReact, FaCodepen, FaDatabase, FaCodeBranch, FaFileCode, FaShieldAlt, FaNetworkWired, FaServer, FaLock, FaUserShield, FaKey } from "react-icons/fa";

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;


const About = ({ id }) => {
  return (
    <div id={id} className="about-container">
      {/* Objective Section */}
      <section className="about-section objective-section">
        <h2 className="section-title">Objective</h2>
        <div className="section-content">
          <p className="objective-text">
            Full-stack developer with 3+ years of production experience, now building toward DevSecOps through a dedicated Secure Development course, hands-on infrastructure automation, and a 650-hour CCNA-level networking &amp; cybersecurity program.
            Applies secure coding practices (OWASP-aligned) alongside containerised deployments (Docker, Kubernetes), cloud storage (AWS S3), and enterprise workflow automation (n8n).
          </p>
          <p className="objective-text">
            Builds a bridge between development and security: comfortable writing production code and reasoning about how it can be attacked or hardened.
            Track record of shipping secure, scalable systems end-to-end — from application code to the infrastructure and network it runs on.
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
              <span className="skill-tag">Neo4j</span>
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
              <span className="skill-tag">n8n</span>
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

      {/* Security Skills Section */}
      <section className="about-section skills-section">
        <h2 className="section-title">Security Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon"><FaLock /></div>
            <h3>Secure Coding</h3>
            <div className="skill-tags">
              <span className="skill-tag">OWASP Proactive Controls</span>
              <span className="skill-tag">Input Validation</span>
              <span className="skill-tag">Output Sanitization</span>
              <span className="skill-tag">Secure Error Handling</span>
              <span className="skill-tag">JWT / OAuth 2.0 / OIDC</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><FaKey /></div>
            <h3>Cryptography</h3>
            <div className="skill-tags">
              <span className="skill-tag">Symmetric Encryption</span>
              <span className="skill-tag">Asymmetric Encryption</span>
              <span className="skill-tag">Hashing</span>
              <span className="skill-tag">PKI</span>
              <span className="skill-tag">Data in Transit & at Rest</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><FaNetworkWired /></div>
            <h3>Networking</h3>
            <div className="skill-tags">
              <span className="skill-tag">CCNA-Level</span>
              <span className="skill-tag">TCP/IP</span>
              <span className="skill-tag">Network Segmentation</span>
              <span className="skill-tag">ACLs & NAT</span>
              <span className="skill-tag">VPN / IPsec</span>
              <span className="skill-tag">Threat Management</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><FaServer /></div>
            <h3>Systems</h3>
            <div className="skill-tags">
              <span className="skill-tag">Linux Administration</span>
              <span className="skill-tag">Windows Server</span>
              <span className="skill-tag">Active Directory</span>
              <span className="skill-tag">FortiGate NGFW</span>
              <span className="skill-tag">Access Control</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><FaShieldAlt /></div>
            <h3>DevSecOps</h3>
            <div className="skill-tags">
              <span className="skill-tag">CI/CD Security</span>
              <span className="skill-tag">Docker Hardening</span>
              <span className="skill-tag">Kubernetes Security</span>
              <span className="skill-tag">AWS S3 Access Control</span>
              <span className="skill-tag">n8n Automation</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><FaUserShield /></div>
            <h3>Identity & Access</h3>
            <div className="skill-tags">
              <span className="skill-tag">JWT</span>
              <span className="skill-tag">OAuth 2.0</span>
              <span className="skill-tag">OpenID Connect</span>
              <span className="skill-tag">Role-Based Access</span>
              <span className="skill-tag">Risk Management</span>
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
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Full Stack Developer</h3>
                <span className="timeline-date">May 2025 – Present</span>
              </div>
              <h4 className="company-name">Mothershipcorp - Remote</h4>
              <ul className="experience-list">
                <li>Applied secure coding practices (OWASP-aligned) to full-stack development using React, TypeScript, and Flask in a microservices-based architecture.</li>
                <li>Built enterprise-grade automation workflows in n8n to streamline DevOps and development processes across internal systems.</li>
                <li>Designed and deployed Neo4j graph infrastructure to support AI-driven application features.</li>
                <li>Implemented AWS S3 with secure, access-controlled configuration for file storage; used PostgreSQL for relational data modeling.</li>
                <li>Developed and integrated RESTful APIs with an emphasis on secure authentication, input validation, and hardened inter-service communication.</li>
              </ul>
            </div>
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
            <h3>Cyber Security Specialist – 650 Hours</h3>
            <h4>ITQ IT Experts</h4>
            <span className="education-date">Apr 2026 – Aug 2026 (in progress)</span>
            <ul className="education-list">
              <li>Cisco networking infrastructure & security hardening</li>
              <li>Windows Server & Active Directory configuration</li>
              <li>Linux Essentials & administration fundamentals</li>
              <li>FortiGate NGFW deployment & configuration</li>
            </ul>
          </div>
          <a
            href={`${API_BASE_URL}/data/diploma/secure-development`}
            target="_blank"
            rel="noopener noreferrer"
            className="education-card education-card--link"
          >
            <div className="education-icon">🛡️</div>
            <h3>Secure Development – 45 Hours</h3>
            <h4>John Bryce College, Tel Aviv</h4>
            <span className="education-date">07/04/2024 – 11/04/2024</span>
            <ul className="education-list">
              <li>OWASP Proactive Controls & secure coding lifecycle</li>
              <li>Cryptography: symmetric/asymmetric, hashing, PKI</li>
              <li>Identity & access management: JWT, OAuth 2.0, OIDC</li>
            </ul>
          </a>
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