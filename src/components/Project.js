import React from 'react';
import '../Project.css'; // Import CSS for styling

const Project = ({ experience }) => {
    const { name, description, techUsed, link } = experience;
    
  return (
    <div className="project">
      <h3>{name}</h3>
      <p><strong>{description}</strong></p>
      <p>{techUsed}</p>
      <p>{link}</p>
    </div>
  );
};

export default Project;