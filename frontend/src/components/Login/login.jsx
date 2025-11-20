import React from 'react'
import './login.css'
import { Link } from "react-router-dom";


const login = () => {
  return (
    <div className='container'>
      <div className='login-box'>
      <h1>Login to your account</h1>

      <form>
        <div className="form-row">
            <label htmlFor="email" className="form-label">
              Username/Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-row">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-input"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn-primary">
            Sign In
          </button>

          <div className="helper-text">
             Don't have an account?
            <Link to={"/signup"}> Sign up</Link>
          </div>

          
      </form>
      </div>
    </div>
  )
}

export default login