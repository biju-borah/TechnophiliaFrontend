import React, { useState } from 'react';
// import './style.css'
import { Link, useNavigate } from "react-router-dom";
import db from "../../../database/FirebaseConfig.jsx";

function Register() {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [id, setid] = useState('')
  const [name, setname] = useState('')

  const navigate = useNavigate()
  function registeruser(e) {
    e.preventDefault();
    db.collection("Students").add({
      name: name,
      password: password,
      id: id,
      email: email
    });
    console.log(name)
    localStorage.setItem('name', name)
    navigate('/')
  }

  return (
    <div className="container">
      <form className="form">
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Scholar id</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => setid(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block" onClick={(e) => registeruser(e)}>
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <Link to="/Login" href="">sign in?</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
