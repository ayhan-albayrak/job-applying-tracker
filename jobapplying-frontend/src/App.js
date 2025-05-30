// src/App.js
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import Navbar from "./Components/Navbar"; // Import Navbar component
import JobApplicationList from "./Components/JobApplicationList"; // Import JobApplicationList
import JobApplicationForm from "./Components/JobApplicationForm"; // Import JobApplicationForm
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter> {/* Wrap your app with BrowserRouter */}
      <div>
        <Navbar />
        <ToastContainer position="top-right" autoClose={3000}/> {/* ToastContainer for notifications */}

        <Routes>
          <Route path="/job-applications" element={<JobApplicationList />} />
          <Route path="/add-job" element={<JobApplicationForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
