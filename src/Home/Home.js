import React, { useRef } from 'react';
import Section from '../Section.js';
import About from '../About.js';

export default function Home() {
  const aboutRef = useRef(null); // Create a ref for the About section

  let HomeS = ['Java-Script Developer', 'React Developer', 'Python Developer', 'Full Stack Developer'];
  let HomeP = 'In this website I put a compilation of all my coding projects and my learning journey. Hope you enjoy!';
  let HomeT = "Hi, I'm Nitay Newman";

  // Function to handle scroll to About section
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Section Strings={HomeS} Title={HomeT} Paragraph={HomeP} scrollToAbout={scrollToAbout} />
      <About  ref={aboutRef} />
      <p></p>
    </>
  );
}
