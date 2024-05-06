import logo from './logo.svg';
import './App.css';
import Home from './Home/Home.js'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Python from './python/pyHome.js';
import Typed from 'typed.js'
import React, { useEffect, useRef } from 'react';
import JavaScript from './Java-Script/JavaScript.js';
import ReactPage from './React/React.js';
import Contact from './contact/contact.js';
import ToDoList from './projects/todolist/ToDoList.js';
import PigGame from './projects/pigGame/PigGame.js';
import Calc from './projects/calc/Calc.js';
import Popcorn from './projects/popcorn/popcorn.js';
import GuessNum from './projects/guessNum/guessNum.js';
import Navbar from './navbar.js';


// import typed from 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import Typed from './App.test'

export default function App() {


  return (
    <Router>
        <Switch>
      <div className="App">
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/Python'>
            <Python />
          </Route>
          <Route exact path='/Js'>
            <JavaScript />
          </Route>
          <Route exact path='/React'>
            <ReactPage />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
      </div>
        </Switch>
        <Switch>
          <Route exact path='/projects/packing-agent'>
            <ToDoList />
          </Route>
          <Route exact path='/projects/pig-game'>
            <PigGame />
          </Route>
          <Route exact path='/projects/calc'>
            <Calc />
          </Route>
          <Route exact path='/projects/popcoren-time'>
            <Popcorn />
          </Route>
          <Route exact path='/projects/guess-num'>
            <GuessNum />
          </Route>
        </Switch>
    </Router>
  );
}

// function Navbar() {
//   return (
//     <>
//     <header className="Header">
//           <Link to="/" className="logo">Nitay Newman.</Link>
//         <nav className="navbar">
//           <Link to="/">Home</Link>
//           <Link to="/Python">Python</Link>
//           <Link to='/React'>React</Link>
//           <Link to="/Js">Java-Script</Link>
//           <Link to="/contact">Contact</Link>
    
//         </nav>
//             </header>
//     </>
//   )
// }





// function Section({ Strings, Title, Paragraph }) {
//     const typedRef = useRef(null);
    
//       useEffect(() => {
//         const options = {
//           strings: Strings,
//           typeSpeed: 100,
//           backSpeed: 100,
//           backDelay: 1000,
//           loop: true
//         };
//         const typed = new Typed(typedRef.current, options);
//         return () => {
//           typed.destroy();
//         };
//       }, [Strings]);
  
  
//     return(
//       <section className="home">
//           <div className="home-content">
//               <h1>{ Title }</h1>
//               <h3>I'm a <span ref={typedRef}></span></h3>
//               <p>
//                   { Paragraph }
//               </p>
//               <div className="btn-box">
//                   <a href="/">Hire Me</a>
//                   <a href="/">Let's Talk</a>
//               </div>
//           </div>
//           <div className="home-sci">
//               <a href="/"><i className="bx bxl-facebook"></i></a>
//               <a href="/"><i className="bx bxl-twitter"></i></a>
//               <a href="/"><i className="bx bxl-linkedin"></i></a>
//           </div>
//           <span className="home-imgHover"></span>
//       </section>
//     )
//   }
  



