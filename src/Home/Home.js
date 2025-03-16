import React, { useEffect } from 'react';
import Section from '../Section.js';
import About from '../About.js';
import { useLocation } from 'react-router-dom';
import Footer from '../footer.js';

export default function Home() {
  let HomeS = [
    'JavaScript Developer',
    'React Developer',
    'Python Developer',
    'Full Stack Developer',
  ];
  let HomeP = 'In this website I put a compilation of all my coding projects and my learning journey. Hope you enjoy!';
  let HomeT = "Hi, I'm Nitay Newman";

  const location = useLocation();

  // Smooth scrolling when hash is present
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]); // Only re-run this effect when the hash changes

  return (
    <>
      <Section Strings={HomeS} Title={HomeT} Paragraph={HomeP} />
      <About id="resume" />
      <Footer />
    </>
  );
}
