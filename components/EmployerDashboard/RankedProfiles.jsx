import React, { useState, useEffect } from 'react';
import ProfileDisplay from './ProfileDisplay';

const RankedProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call to fetch ranked profiles
    const fetchProfiles = async () => {
      try {
        // Replace with actual API endpoint
        const response = await fetch('/api/ranked-profiles');
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) {
    return <div className="p-6">Loading profiles...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Ranked Candidate Profiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((profile) => (
          <ProfileDisplay key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default RankedProfiles;