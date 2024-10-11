import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css"; // Import the CSS file
import Register from "./OrgRegister";
import Login from "./OrgLogin";
import StudentRegister from "./studentRegister.js";
import StudentLogin from "./StudentLogin";

function WelcomePage() {
  return (
    <div className="welcome-page">
      <h1>Welcome to Toga</h1>
      <h2>Simplifying Event Registration and Management</h2>
      <div className="button-container">
        {/* Organization buttons */}
        <Link to="/register">
          <button>Register your Student Organization</button>
        </Link>
        <Link to="/login">
          <button>Organization Login</button>
        </Link>

        {/* Student buttons */}
        <Link to="/student-register">
          <button>Student Registration</button>
        </Link>
        <Link to="/student-login">
          <button>Student Login</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/student-login" element={<StudentLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
