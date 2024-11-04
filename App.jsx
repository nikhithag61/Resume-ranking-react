import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserSelection from './pages/UserSelection';
import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployerDashboard from './pages/EmployerDashboard';

// Import your Navbar component
// import Navbar from './components/HomePage/Navbar';

import './App.css';

// Import sub-components for EmployeeDashboard and EmployerDashboard
import JobPostingsSidebar from './components/EmployeeDashboard/JobPostingsSidebar';
import JobDetails from './components/EmployeeDashboard/JobDetails';
import ResumeUpload from './components/EmployeeDashboard/ResumeUpload';
import EmployerSidebar from './components/EmployerDashboard/EmployerSidebar';
import AdjustCriteria from './components/EmployerDashboard/AdjustCriteria';
import RankedProfiles from './components/EmployerDashboard/RankedProfiles';
import ProfileDisplay from './components/EmployerDashboard/ProfileDisplay'; 

function App() {
  return (
    
      <div>
        {/* <Navbar /> */}
        <Routes>
          {/* ... your existing routes ... */}
          
          <Route path="/ranked-profiles" element={<RankedProfiles/>} />
          <Route path="/adjust-criteria" element={<AdjustCriteria />} />
          <Route path="/user-selection" element={<UserSelection />} />
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard/>} />
          <Route path="/employer-dashboard" element={<EmployerDashboard/>} />
        </Routes>
      </div>
  
  );
}

export default App;