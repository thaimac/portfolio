import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProjectNavArrows = ({ currentIndex, totalProjects, onNext, onPrev }) => {
  return (
    <div className="navigation-arrows">
      <button className="prev-button" onClick={onPrev} disabled={currentIndex === 0}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button className="next-button" onClick={onNext} disabled={currentIndex === totalProjects - 1}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default ProjectNavArrows;