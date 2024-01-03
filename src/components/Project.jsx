// portfolio-project/src/components/Project.jsx

import PropTypes from 'prop-types';

function Project({ title, imageUrl, deployedUrl, repoUrl }) {
  return (
    <div className="project">
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={`Screenshot of ${title}`} />
      </a>
      <h3>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">{title}</a>
      </h3>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  deployedUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
};

export default Project;
