import React from 'react'
import './signup.css'

const signup = () => {
  return (
    <div className='container'>
      <div className='login-box'>
      <h1>Create Your Account</h1>

      <form>

        <div className="form-row">
            <label htmlFor="name" className="form-label">
              First Name
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
            <label htmlFor="lname" className="form-label">
              Last Name
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

          <div className="form-row">
            <label htmlFor="password" className="form-label">
              Confirm Password
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

          

      </form>
      </div>
    </div>
  )
}

export default signup
