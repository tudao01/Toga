import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./OrgRegister";
import Login from "./OrgLogin";
import StudentRegister from "./studentRegister.js";
import StudentLogin from "./StudentLogin";

function WelcomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", color: "gold" }}>
      <h1>Welcome to Toga</h1>
      <h2>Simplifying Event Registration and Management</h2>
      <div>
        {/* Organization buttons */}
        <Link to="/register">
          <button style={{ margin: "10px" }}>
            Register your Student Organization
          </button>
        </Link>
        <Link to="/login">
          <button style={{ margin: "10px" }}>Organization Login</button>
        </Link>

        {/* Student buttons */}
        <Link to="/student-register">
          <button style={{ margin: "10px" }}>Student Registration</button>
        </Link>
        <Link to="/student-login">
          <button style={{ margin: "10px" }}>Student Login</button>
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
