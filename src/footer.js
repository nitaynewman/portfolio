import { useRef } from 'react';
import './App.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_links">
        <div className="footer_link--wrapper">
          <div className="footer_link--items">
            <h2>About Me</h2>
            <Link to='/#resume'><span className="bx bx-notepad" />  My Resume</Link> 
            {/* Add the download link for CV */}
            <a href="/Resume-2025-NitayNewman.pdf" download="Resume-2025-NitayNewman.pdf"><span className='bx bxs-download' />  Download CV</a>
          </div>
          <div className="footer_link--items">
            <h2>Contact Me</h2>
            <a><Link to="/contact"><span className="bx bxl-gmail" />  Email</Link></a> 
            <a href="/"><span className="bx bx-phone" />  Phone </a>
          </div>
        </div>
        <div className="footer_link--wrapper">
          <div className="footer_link--items">
            <h2>Social Media</h2>
            <a href="/"><span className="bx bxl-linkedin" />  linkedin</a> 
            <a href="/"><span className="bx bxl-github" />  GitHub</a>
          </div>
        </div>
      </div>
      <section className="social_media">
        <div className="social_media--wrap">
          <div className="footer_logo">
            <a href="/" id="footer_logo">N. Newman</a>
          </div>
          <p className="website_rights">PORTFOLIO All rights reserved to © Nitay Newman</p>

        </div>
      </section>
    </div>
  );
}

export default Footer;
