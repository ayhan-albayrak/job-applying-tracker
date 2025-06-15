// src/App.js
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import Navbar from "./Components/Navbar"; // Import Navbar component
import JobApplicationList from "./Components/JobApplicationList"; // Import JobApplicationList
import JobApplicationForm from "./Components/JobApplicationForm"; // Import JobApplicationForm
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import XoxOyunu from "./xoxOyunu"; // Import XoxOyunu component


function App() {
 
  return (
    
   
    <BrowserRouter>
      <div>
        <Navbar />
        <ToastContainer position="top-right" autoClose={3000} />

        <Routes>
          <Route path="/job-applications" element={<JobApplicationList />} />
          <Route path="/add-job" element={<JobApplicationForm />} />
          <Route path="/xox" element={<XoxOyunu />} /> {/* yeni rota */}
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
