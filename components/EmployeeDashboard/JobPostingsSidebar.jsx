import React from 'react';
import { Briefcase, Building, ChevronRight } from 'lucide-react';
import './JobPostingsSidebar.css';

const JobPostingsSidebar = ({ jobPostings, selectedDepartment, onDepartmentSelect }) => {
  return (
    <div className="sidebar-container ">
      <div className="sidebar-header">
        <h2 className="sidebar-title">
          <Building className="icon" />
          Job Postings
        </h2>
      </div>
      <div className="sidebar-content">
        {jobPostings.map((dept) => (
          <button 
            key={dept.id} 
            onClick={() => onDepartmentSelect(dept)}
            className={`sidebar-button ${selectedDepartment?.id === dept.id ? 'selected' : ''}`}
          >
            <span className="button-label">
              <Briefcase className="icon-small" />
              {dept.department}
            </span>
            <ChevronRight className="chevron-icon" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobPostingsSidebar;
