import React, { useState } from "react";
import { Link } from 'react-router-dom';  // Import Link
import "../Navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log('Navbar is rendered'); // Check if the component renders
  return (
    <nav className="navbar">
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="/job-applications" onClick={() => setIsOpen(false)}>
            Job Apply List
          </Link>
        </li>
        <li>
          <Link to="/add-job" onClick={() => setIsOpen(false)}>
            Add Job Apply
          </Link>
        </li>
        {/* <li>
          <Link to="/update-job" onClick={() => setIsOpen(false)}>
            Update Job Apply
          </Link>
        </li>
        <li>
          <Link to="/delete-job" onClick={() => setIsOpen(false)}>
            Delete Job Apply
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
