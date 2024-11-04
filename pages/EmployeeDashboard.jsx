import React, { useState } from 'react';
import JobPostingsSidebar from '../components/EmployeeDashboard/JobPostingsSidebar';
import JobDetails from '../components/EmployeeDashboard/JobDetails';
import ResumeUpload from '../components/EmployeeDashboard/ResumeUpload';

const jobPostings = [
  {
    id: 1,
    department: 'Engineering',
    roles: [
      { id: 1, title: 'Senior Frontend Developer', location: 'Remote', experience: '5+ years' },
      { id: 2, title: 'Backend Engineer', location: 'New York', experience: '3+ years' },
    ]
  },
  // ... rest of the job postings data
];

const EmployeeDashboard = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Resume "${file.name}" uploaded successfully for ${selectedRole.title}`);
    }
  };

  return (
    <div className="fixed inset-0 flex flex-row overflow-hidden bg-gray-100">
      <aside className="w-64 md:w-72 bg-gray-800 text-white min-h-screen flex-shrink-0">
        <div className="p-4 h-full">
          <JobPostingsSidebar
            jobPostings={jobPostings}
            selectedDepartment={selectedDepartment}
            onDepartmentSelect={setSelectedDepartment}
          />
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <JobDetails
          department={selectedDepartment}
          selectedRole={selectedRole}
          onRoleSelect={setSelectedRole}
        >
          <div className="max-w-3xl mx-auto">
            {selectedRole && (
              <>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {selectedRole.title}
                </h3>
                <ResumeUpload onFileUpload={handleFileUpload} />
              </>
            )}
          </div>
        </JobDetails>
      </main>
    </div>
  );
};
export default EmployeeDashboard;