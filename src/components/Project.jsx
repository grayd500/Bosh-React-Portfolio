// portfolio-project/src/components/Project.jsx

import PropTypes from 'prop-types';

function Project({ title, imageUrl, deployedUrl, repoUrl }) {
    return (
      <div className="project">
        <h3>{title}</h3>
        <img src={imageUrl} alt={`Screenshot of ${title}`} />
        <a href={deployedUrl} target="_blank" rel="noopener noreferrer">View App</a>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
    );
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    deployedUrl: PropTypes.string.isRequired,
    repoUrl: PropTypes.string.isRequired
};

export default Project;
