import React from 'react';
import { Link } from 'react-router-dom';

const EmployerSidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg h-screen">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <Link 
              to="/adjust-criteria"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
            >
              Adjust Criteria
            </Link>
          </li>
          <li>
            <Link 
              to="/ranked-profiles"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
            >
              Ranked Profiles
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmployerSidebar;