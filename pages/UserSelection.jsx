import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Users } from 'lucide-react';
import './UserSelection.css';

const UserSelection = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const handleContinue = async () => {
    if (!selectedRole) return;
    
    setIsLoading(true);
    try {
      // Simulate API call to save user role
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (selectedRole === 'employer') {
        navigate('/employer-dashboard');
      } else {
        navigate('/employee-dashboard');
      }
    } catch (error) {
      console.error('Error saving role:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Choose Your Role</h1>
            <p className="text-gray-600">Select how you want to use the platform</p>
          </div>

          <div className="space-y-4">
            <div
              className={`role-card p-4 border rounded-lg cursor-pointer ${
                selectedRole === 'employer'
                  ? 'selected border-blue-500 bg-blue-50'
                  : 'border-gray-200'
              }`}
              onClick={() => handleRoleSelection('employer')}
            >
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">I'm an Employer</h3>
                  <p className="text-gray-500">Post jobs and find great talent</p>
                </div>
              </div>
            </div>

            <div
              className={`role-card p-4 border rounded-lg cursor-pointer ${
                selectedRole === 'employee'
                  ? 'selected border-blue-500 bg-blue-50'
                  : 'border-gray-200'
              }`}
              onClick={() => handleRoleSelection('employee')}
            >
              <div className="flex items-center">
                <div className=" bg-blue-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">I'm an Employee</h3>
                  <p className="text-gray-500">Find jobs and grow your career</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleContinue}
            disabled={!selectedRole || isLoading}
            className={`continue-btn w-full mt-8 py-3 px-4 rounded-lg font-semibold text-white 
              ${selectedRole && !isLoading
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-300 cursor-not-allowed'
              }`}
          >
            <div className="flex items-center justify-center">
              {isLoading ? (
                <>
                  <div className="loading-spinner mr-2"></div>
                  <span>Processing...</span>
                </>
              ) : (
                'Continue'
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSelection;