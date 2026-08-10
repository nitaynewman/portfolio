import React, { useState, useEffect, useCallback } from 'react';
import Section from '../Section.js';
import Footer from '../footer.js';
import '../Home/About.css';
import './Security.css';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

const SEC_STRINGS = [
  'Secure Coding (OWASP)',
  'CCNA-Level Networking',
  'DevSecOps Engineering',
  'Security Automation',
  'Infrastructure Hardening',
];
const SEC_TITLE = 'Security & Infrastructure';
const SEC_PARAGRAPH =
  'Hands-on experience in secure development, network infrastructure, and cybersecurity — backed by 650 hours of CCNA-level training and a dedicated Secure Development course.';

const CATEGORY_ORDER = [
  'Networking',
  'Cloud Infrastructure',
  'Windows & AD',
  'Linux',
  'Automation',
  'Secure Development',
];

function SecurityModal({ project, onClose }) {
  const tags = project.tags
    ? project.tags.split(',').map((t) => t.trim()).filter(Boolean)
    : [];

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <div className="sec-modal-overlay" onClick={onClose}>
      <div className="sec-modal" onClick={(e) => e.stopPropagation()}>
        <button className="sec-modal-close" onClick={onClose}>✕</button>

        {project.image ? (
          <img src={project.image} alt={project.title} className="sec-modal-image" />
        ) : (
          <div className="sec-modal-placeholder">🛡️</div>
        )}

        <div className="sec-modal-body">
          <h2 className="sec-modal-title">{project.title}</h2>

          {tags.length > 0 && (
            <div className="sec-modal-tags">
              {tags.map((tag) => (
                <span key={tag} className="security-card-tag">{tag}</span>
              ))}
            </div>
          )}

          <p className="sec-modal-description">{project.paragraph}</p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="security-card-link"
            >
              View Project ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function SecurityCard({ project, onClick }) {
  return (
    <div className="security-card" onClick={onClick}>
      {project.image ? (
        <img src={project.image} alt={project.title} className="security-card-image" />
      ) : (
        <div className="security-card-placeholder">🛡️</div>
      )}
      <div className="security-card-body">
        <h3 className="security-card-title">{project.title}</h3>
      </div>
    </div>
  );
}

export default function Security() {
  const [projects, setProjects] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/data/security`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const orderedCategories = [
    ...CATEGORY_ORDER.filter((c) => projects[c]?.length > 0),
    ...Object.keys(projects).filter(
      (c) => !CATEGORY_ORDER.includes(c) && projects[c]?.length > 0
    ),
  ];

  return (
    <div className="python">
      <Section Strings={SEC_STRINGS} Title={SEC_TITLE} Paragraph={SEC_PARAGRAPH} />

      {!loading && orderedCategories.length > 0 && (
        <div className="security-projects">
          {orderedCategories.map((category) => (
            <div key={category} className="security-category">
              <h2 className="security-category-title">{category}</h2>
              <div className="security-cards-grid">
                {projects[category].map((project) => (
                  <SecurityCard
                    key={project.id}
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedProject && (
        <SecurityModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <div className="about-container">
        <section className="about-section education-section">
          <h2 className="section-title">Training & Certifications</h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">🔒</div>
              <h3>Cyber Security Specialist – 650 Hours</h3>
              <h4>ITQ IT Experts</h4>
              <span className="education-date">Apr 2026 – Aug 2026 (in progress)</span>
              <ul className="education-list">
                <li>Cisco networking infrastructure & device security hardening</li>
                <li>Windows Server & Active Directory configuration</li>
                <li>Linux Essentials & practical administration</li>
                <li>FortiGate NGFW deployment & configuration</li>
                <li>Firewall technologies & enterprise network security</li>
              </ul>
            </div>
            <div className="education-card">
              <div className="education-icon">🛡️</div>
              <h3>Secure Development – 40 Hours</h3>
              <h4>John Bryce College, Tel Aviv</h4>
              <span className="education-date">Oct 2023 – Nov 2023</span>
              <ul className="education-list">
                <li>OWASP Proactive Controls & secure coding lifecycle</li>
                <li>Input validation, output sanitization, secure error handling</li>
                <li>Cryptography fundamentals: symmetric/asymmetric, hashing, PKI</li>
                <li>Identity & access management: JWT, OAuth 2.0, OIDC</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section experience-section">
          <h2 className="section-title">Security-Relevant Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Full Stack Developer</h3>
                  <span className="timeline-date">May 2025 – Present</span>
                </div>
                <h4 className="company-name">Mothershipcorp – Remote</h4>
                <ul className="experience-list">
                  <li>Applied OWASP-aligned secure coding practices across all full-stack development work.</li>
                  <li>Implemented secure authentication, input validation, and hardened inter-service communication in RESTful APIs.</li>
                  <li>Deployed AWS S3 with access-controlled configuration for file storage.</li>
                  <li>Built enterprise automation workflows (n8n) for DevOps processes.</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Full Stack Developer</h3>
                  <span className="timeline-date">Feb 2022 – Oct 2024</span>
                </div>
                <h4 className="company-name">IDF, 8200 Unit</h4>
                <ul className="experience-list">
                  <li>Worked in a security-cleared, high-assurance development environment within the IDF's 8200 intelligence unit.</li>
                  <li>Security requirements were embedded throughout the entire development lifecycle.</li>
                  <li>Delivered automation tools, internal tooling, and full-stack applications with strict security constraints.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
