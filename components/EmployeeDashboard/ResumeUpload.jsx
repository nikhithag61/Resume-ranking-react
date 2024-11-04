import React from 'react';
import { Upload } from 'lucide-react';
import './ResumeUpload.css';

const ResumeUpload = ({ onFileUpload }) => {
  return (
    <div className="resume-upload-container">
      <label 
        htmlFor="resume-upload" 
        className="upload-label"
      >
        <Upload className="upload-icon" />
        Upload Resume
        <input
          type="file"
          id="resume-upload"
          className="file-input"
          accept=".pdf,.doc,.docx"
          onChange={onFileUpload}
        />
      </label>
    </div>
  );
};

export default ResumeUpload;
