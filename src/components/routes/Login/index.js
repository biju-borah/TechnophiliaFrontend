import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import db from "../../../database/FirebaseConfig.jsx";

function Login() {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    let name = localStorage.getItem('name')
    if (name) {
      navigate('/dashboard')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function login(e) {
    e.preventDefault();
    db.collection("Students").onSnapshot((snapshot) => {

      snapshot.docs.forEach(doc => {
        let data = doc.data()
        if (data.email === email) {
          if (data.password === password) {
            console.log('auth')
            localStorage.setItem('name', data.name)
            navigate('/dashboard/main')
          }
        }
      })
    });

  }
  return (
    <div>
      <form>
        <h3>Sign In</h3>

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

        <div className="form-group">
          <div className="custom-control custom-checkbox" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0' }}>
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              style={{ width: '20px' }}
            />
            <label className="custom-control-label" htmlFor="customCheck1" style={{ marginTop: '0' }}>
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block" onClick={(e) => login(e)}>
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="/">password?</a>
        </p>
      </form>
    </div>);
}

export default Login;

