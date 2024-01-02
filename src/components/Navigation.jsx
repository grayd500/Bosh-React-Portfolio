// portfolio-project/src/components/Navigation.jsx:
import { NavLink } from 'react-router-dom';
import './Navigation.css'; // Ensure the CSS file is linked

function Navigation() {
  return (
    <nav className="navigation">
      <h1 className="site-title">Dave Gray</h1>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" end>About Me</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" className="nav-link">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;




