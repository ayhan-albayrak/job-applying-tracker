import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams

const UpdateJobApplication = () => {
  const { id } = useParams(); // Get ID from URL
  const navigate = useNavigate(); // Hook for navigation

  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({
    applyDate: "",
    company: "",
    position: "",
    searcWebsite: "",
    city: "",
    state: "",
    zipCode: "",
    applyingLink: "",
  });

  useEffect(() => {
    // Fetch the job application data using the id from the URL
    const fetchJob = async () => {
      try {
        const response = await fetch(
          `http://localhost:5242/api/JobApplications/${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch job application");
        const data = await response.json();
        setJob(data);

        // Format date correctly for date input (yyyy-MM-dd)
        const formattedDate = data.applyDate
          ? new Date(data.applyDate).toISOString().split("T")[0]
          : "";

        setFormData({
          applyDate: formattedDate,
          company: data.company || "",
          position: data.position || "",
          searcWebsite: data.searcWebsite || "",
          city: data.city || "",
          state: data.state || "",
          zipCode: data.zipCode || "",
          applyingLink: data.applyingLink || "",
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchJob();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:5242/api/JobApplications/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...formData }),
      }
    );

    if (response.ok) {
      console.log("Job Application updated successfully");
      navigate("/job-applications"); // Navigate back to list
    } else {
      console.log("Failed to update Job Application");
    }
  };

  if (!job) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Apply Date</label>
        <input
          type="date"
          name="applyDate"
          value={formData.applyDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Company</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Position</label>
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Search Website</label>
        <input
          type="text"
          name="searcWebsite"
          value={formData.searcWebsite}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Zip Code</label>
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Apply Link</label>
        <input
          type="text"
          name="applyingLink"
          value={formData.applyingLink}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateJobApplication;
