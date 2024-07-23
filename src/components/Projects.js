import React, { useState} from 'react';
import Project from './Project';
import ProjectNavArrows from './ProjectNavArrows';
import '../Project.css';

const Projects = () => {
    const projects = [
        {
          name: 'Example Company 1',
          description: 'Software Developer',
          techUsed: 'January 2019 - Present',
          link: 'Responsible for developing web applications using React and Node.js.'
        },
        {
          name: 'Example Company 2',
          description: 'UX Designer',
          techUsed: 'July 2017 - December 2018',
          link: 'Designed user interfaces and conducted usability testing for mobile apps.'
        }
      ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex(currentIndex + 1);
    };
    
    const handlePrev = () => {
     setCurrentIndex(currentIndex - 1);
    };

  return (
    <div>
    <div className="project-container">
        <Project experience={projects[currentIndex]} />
    </div>
    <ProjectNavArrows
        currentIndex={currentIndex}
        totalExperiences={projects.length}
        onNext={handleNext}
        onPrev={handlePrev}
    />
    </div>
  );
}

export default Projects;
