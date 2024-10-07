import React, { useState } from "react";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

function Register() {
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Add organization info to Firestore
      await addDoc(collection(db, "organizations"), {
        orgName,
        email,
        school,
        uid: user.uid,
      });

      alert("Organization registered successfully!");
    } catch (error) {
      console.error("Error registering organization:", error);
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Register Organization</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Organization Name"
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Associated School"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
