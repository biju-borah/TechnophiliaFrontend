import React, { Component } from "react";
import './style.css'
import { Link } from "react-router-dom";
export class Register extends Component {
  render() {
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
            />
          </div>

          <div className="form-group">
            <label>Scholar id</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <Link to="/Login" href="">sign in?</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Register;
