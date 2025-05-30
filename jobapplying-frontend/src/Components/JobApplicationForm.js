import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import PopupComponent from "./PopupComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import "../style.css";

const JobApplicationListForm = () => {
  const [jobApplication, setJobApplication] = useState({
    company: "",
    position: "",
    applyDate: "",
    city: "",
    state: "",
    zipCode: "",
    applyingLink: "",
    searcWebsite: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobApplication((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5242/api/JobApplications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobApplication),
      });

      if (response.ok) {
        toast.success("✅ Job application added successfully");
        setJobApplication({
          company: "",
          position: "",
          applyDate: "",
          city: "",
          state: "",
          zipCode: "",
          applyingLink: "",
          searcWebsite: "",
        });
        // Redirect to job applications list page after successful submission
        setTimeout(() => {
          navigate("/job-applications");
        }, 1000);
      } else {
        toast.error("❌ Failed to add job application.");
      }
    } catch (error) {
      toast.error("❌ Error adding job application.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Job Applications</h1>
      {error && <p>{error}</p>}
      
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="applyDate">
          <Form.Label>Apply Date</Form.Label>
          <Form.Control
            type="date"
            name="applyDate"
            value={
              jobApplication.applyDate
            }
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="company">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter company"
            name="company"
            value={jobApplication.company}
            onChange={handleChange}
            required
          />
        </Form.Group>
      
        <Form.Group controlId="position">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter position"
            name="position"
            value={jobApplication.position}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="searcWebsite">
          <Form.Label>Search Website</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter search website"
            name="searcWebsite"
            value={jobApplication.searcWebsite}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            name="city"
            value={jobApplication.city}
            onChange={handleChange}
            required  
          />
        </Form.Group>

        <Form.Group controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter state"
            name="state"
            value={jobApplication.state}
            onChange={handleChange}
           
          />
        </Form.Group>

        <Form.Group controlId="zipcode">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter zip code"
            name="zipCode"
            value={jobApplication.zipCode}
            onChange={handleChange}
          
          />
        </Form.Group>

        <Form.Group controlId="applylink">
          <Form.Label>Applying Link</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter applying link"
            name="applyingLink"
            value={jobApplication.applyingLink}
            onChange={handleChange}
          />
        </Form.Group>
        <div style={{ textAlign: "justify", marginTop: "20px", size: "20px" }}>
        <Button type="submit" disabled={loading} variant="primary" size="lg">
          {loading ? "Submitting..." : "Submit"}
        </Button>
        </div>
        </Form>
      <ToastContainer />
    </div>
  );
};
export default JobApplicationListForm; 