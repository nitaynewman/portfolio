import './App.css';
import Typed from 'typed.js'
import React, { useEffect, useRef } from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

       

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
              <h3><span ref={typedRef}></span></h3>
              <p>
                  { Paragraph }
              </p>
              <div className="btn-box">
                  <a>
                    <Link path='/' className="LInk">
                      Information
                    </Link>
                  </a>
                  <a>
                  <Link to='/contact' className="LInk">
                    Let's Talk
                  </Link>
                  </a>
              </div>
          </div>
          <div className="home-sci">
              <a>
              <Link to="/contact" >
                <li className="bx bxl-gmail"></li>
              </Link>
              </a>
              <a href="https://github.com/nitaynewman?tab=repositories"><i className="bx bxl-github"></i></a>
              <a href="/"><i className="bx bxl-linkedin"></i></a>
          </div>
          <span className="home-imgHover"></span>
      </section>
    )
  }
  