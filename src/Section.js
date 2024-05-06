import './App.css';
import Typed from 'typed.js'
import React, { useEffect, useRef } from 'react';
import Navbar from './navbar';

       

export default function Section({ Strings, Title, Paragraph }) {
    const typedRef = useRef(null);
    
      useEffect(() => {
        const options = {
          strings: Strings,
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true
        };
        const typed = new Typed(typedRef.current, options);
        return () => {
          typed.destroy();
        };
      }, [Strings]);
  
  
    return(
      <section className="home">
        <Navbar />
          <div className="home-content">
              <h1>{ Title }</h1>
              <h3>I'm a <span ref={typedRef}></span></h3>
              <p>
                  { Paragraph }
              </p>
              <div className="btn-box">
                  <a href="/">Information</a>
                  <a href="/">Let's Talk</a>
              </div>
          </div>
          <div className="home-sci">
              <a href="/"><i className="bx bxl-facebook"></i></a>
              <a href="/"><i className="bx bxl-twitter"></i></a>
              <a href="/"><i className="bx bxl-linkedin"></i></a>
          </div>
          <span className="home-imgHover"></span>
      </section>
    )
  }
  