import React from 'react';

const ProfileDisplay = ({ profile }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold">{profile.name}</h3>
      <div className="mt-2 text-gray-600">
        <p>Match Score: {profile.matchScore}%</p>
        <p>Experience: {profile.experience} years</p>
        <p>Skills: {profile.skills.join(', ')}</p>
      </div>
      <div className="mt-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileDisplay;