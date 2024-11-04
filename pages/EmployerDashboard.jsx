import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import EmployerSidebar from '../components/EmployerDashboard/EmployerSidebar';
import AdjustCriteria from '../components/EmployerDashboard/AdjustCriteria';
import RankedProfiles from '../components/EmployerDashboard/RankedProfiles';
import './EmployerDashboard.css';

const EmployerDashboard = () => {
  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    department: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/job-posting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobDetails),
      });
      const data = await response.json();
      console.log('Job posted:', data);
      // Add success notification here
    } catch (error) {
      console.error('Error posting job:', error);
      // Add error notification here
    }
  };

  return (
    <div className="dashboard-container">
      <EmployerSidebar />
      
      <div className="dashboard-content">
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="form-container">
                <h2 className="page-title">Create a new Job Posting</h2>
                <form onSubmit={handleSubmit} className="job-form">
                  <div className="form-group">
                    <label>Job Title:</label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={jobDetails.jobTitle}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Department:</label>
                    <input
                      type="text"
                      name="department"
                      value={jobDetails.department}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Description:</label>
                    <textarea
                      name="description"
                      value={jobDetails.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="submit-button">
                    Submit
                  </button>
                </form>
              </div>
            } 
          />
          <Route path="/adjust-criteria" element={<AdjustCriteria />} />
          <Route path="/ranked-profiles" element={<RankedProfiles />} />
        </Routes>
      </div>
    </div>
  );
};

export default EmployerDashboard;