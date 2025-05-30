// src/Components/JobApplicationList.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button"; // Import Button from Bootstrap
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Button from "@mui/material/Button";

const JobApplicationList = () => {
  const [jobApplications, setJobApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // useNavigate hook

  // Fetch job applications from API
  const fetchJobApplications = async () => {
    try {
      const response = await fetch("http://localhost:5242/api/JobApplications");
      const data = await response.json();
      setJobApplications(data);
    } catch (error) {
      console.error("Error fetching job applications:", error);
    }
  };

  useEffect(() => {
    fetchJobApplications();
  }, []);


  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job application?");
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5242/api/JobApplications/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        toast.success("✅ Job application deleted successfully");
        setJobApplications((prev) => prev.filter((job) => job.id !== id)); // Update UI
        setTimeout(() => {
          navigate("/job-applications"); // Navigate to the job applications list page after delete
      }, 1000);
      } else {
        toast.error("❌ Failed to delete job application.");
      }
    } catch (error) {
      toast.error("❌ Error deleting job application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Job Applications</h1>
      {jobApplications.length > 0 ? (
         <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
          <Table aria-label="job applications table">
            <TableHead>
              <TableRow>
                <TableCell>Job ID</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Search Website</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Zip Code</TableCell>
                <TableCell>Applying Link</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobApplications.map((job) => (
                <TableRow key={job.id}>
                  <TableCell>{job.id}</TableCell>
                  <TableCell>{job.company}</TableCell>
                  <TableCell>{job.position}</TableCell>
                  <TableCell>{job.searchWebsite}</TableCell>
                  <TableCell>{job.city}</TableCell>
                  <TableCell>{job.state}</TableCell>
                  <TableCell>{job.zipCode}</TableCell>
                  <TableCell sx={{ maxWidth: 250, overflow: 'hidden', textOverflow: 'ellipsis' }}>{job.applyingLink}</TableCell>
                  <TableCell>
                  <Button
                    onClick={() => handleDelete(job.id)}
                    variant="contained"
                    color="error"
                    size="small"
                    disabled={loading}
                  >
                    {loading ? "Deleting..." : "Delete"}
                  </Button>
              </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      ) : (<p>No job applications found.</p>)}

     
      <ToastContainer />
    </div>
  );
};

export default JobApplicationList;