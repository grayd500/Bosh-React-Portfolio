// portfolio-project/src/components/Navigation.jsx:
import { NavLink } from 'react-router-dom';
import './Navigation.css'; // assuming you will create a separate CSS file for navigation

function Navigation() {
  return (
    <nav className="navigation">
      <h1 className="site-title">Dave Gray</h1>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            About Me
          </NavLink>
        </li>
        {/* Repeat for the other navigation links */}
      </ul>
    </nav>
  );
}

export default Navigation;




