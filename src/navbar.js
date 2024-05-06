import './App.css';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
      <>
      <header className="Header">
            <Link to="/" className="logo">Nitay Newman.</Link>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/Python">Python</Link>
            <Link to='/React'>React</Link>
            <Link to="/Js">Java-Script</Link>
            <Link to="/contact">Contact</Link>
      
          </nav>
        </header>
      </>
    )
}
  