// portfolio-project/src/components/Footer.jsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer style={{ background: '#1E2749', color: 'white', textAlign: 'center', padding: '1rem' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <a href="https://www.linkedin.com/in/grayd500/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/grayd500" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://stackoverflow.com/users/20343904/david-gray" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
        {/* Add other platforms as needed */}
      </div>
    </footer>
  );
}

export default Footer;

  