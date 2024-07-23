import React from 'react';
import '../Job.css'; // Import CSS for styling

const Job = ({ experience }) => {
    const { company, position, duration, description } = experience;

  return (
    <div className="work-experience">
      <h3>{company}</h3>
      <p><strong>{position}</strong></p>
      <p>{duration}</p>
      <p>{description}</p>
    </div>
  );
};

export default Job;