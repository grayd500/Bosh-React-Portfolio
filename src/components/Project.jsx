// portfolio-project/src/components/Project.jsx
import PropTypes from 'prop-types';

function Project({ title, image, deployedLink, repoLink }) {
    return (
      <div className="project">
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">View App</a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
    );
  }
  
  Project.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    deployedLink: PropTypes.string.isRequired,
    repoLink: PropTypes.string.isRequired
  };

  export default Project;