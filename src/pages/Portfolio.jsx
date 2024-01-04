// src/pages/Portfolio.jsx:
import Project from '../components/Project';
import projectsData from '../projectData'; // make sure this import path is correct

function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="portfolio">
        {projectsData.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            imageUrl={project.imageUrl}
            deployedUrl={project.deployedUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
