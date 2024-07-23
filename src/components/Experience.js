import React, {useState} from 'react';
import Job from './Job';
import JobNavArrows from './JobNavArrows';

const Experience = () => {

    const workExperiences = [
        {
          company: 'Canada Revenue Agency',
          position: 'IT Analyst/Developer',
          duration: 'September 2021 - Present',
          description: 'Responsible for developing and maintaining API\'s and developing and supporting front end applications that integrated with these API\'s'
        },
        {
          company: 'Example Company 2',
          position: 'UX Designer',
          duration: 'July 2017 - December 2018',
          description: 'Designed user interfaces and conducted usability testing for mobile apps.'
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
    <div className="work-experience-container">
    <Job experience={workExperiences[currentIndex]} />
    </div>
  <JobNavArrows
    currentIndex={currentIndex}
    totalExperiences={workExperiences.length}
    onNext={handleNext}
    onPrev={handlePrev}
  />
  </div>
  );
}

export default Experience;
