import React from 'react';
import './JobDetails.css';

const JobDetails = ({ department, selectedRole, onRoleSelect, children }) => {
  if (!department) {
    return (
      <div className="no-department-message">
        Select a department to view available positions
      </div>
    );
  }

  return (
    <div className="job-details-container">
      <h2 className="department-title">
        {department.department} Positions
      </h2>
      <div className="roles-grid">
        {department.roles.map((role) => (
          <div
            key={role.id}
            className={`role-card ${selectedRole?.id === role.id ? 'selected' : ''}`}
            onClick={() => onRoleSelect(role)}
          >
            <h3 className="role-title">{role.title}</h3>
            <div className="role-info">
              <p>Location: {role.location}</p>
              <p>Experience: {role.experience}</p>
            </div>
            {selectedRole?.id === role.id && children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDetails;
