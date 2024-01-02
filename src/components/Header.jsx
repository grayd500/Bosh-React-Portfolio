// project-portfolio/src/components/Header.jsx:
import Navigation from './Navigation';
import './Header.css'; // assuming you will create a separate CSS file for the header

function Header() {
  return (
    <header className="header">
      <Navigation />
      {/* You can add more content to the header here if needed */}
    </header>
  );
}

export default Header;

