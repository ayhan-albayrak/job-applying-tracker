export const getJobApplications = async () => {
  try {
    const response = await fetch("https://localhost:5242/api/JobApplications"); // Adjust the URL as needed
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching job applications:", error);
  }
};
