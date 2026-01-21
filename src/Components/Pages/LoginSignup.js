// import React from 'react'
// import './CSS/LoginSignup.css'

// const LoginSignup = () => {
//   return (
//     <div className='loginsignup'>
//       <h1>Sign Up</h1>
//       <div className='loginsignup-container'>
//         <input type='text' placeholder='Your Name'/>
//         <input type='email' placeholder='Email Address'/>
//         <input type='password' placeholder='Password'/>
//       </div>
//       <button>Continue</button>
//       <p className='loginsignup-login'>Already have an account?<span>Login here</span></p>
//       <div className='loginsignup-agree'>
//         <input type='checkbox' name='' id=''/>
//         <p>By continue, I agree to the terms of use & privacy policy</p>
//       </div>
//     </div>
//   )
// }

// export default LoginSignup



import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'

const LoginSignup = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agree: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="loginsignup">
      <form className="loginsignup-container" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="loginsignup-agree">
          <input
            type="checkbox"
            name="agree"
            id="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          <label htmlFor="agree">
            By continuing, I agree to the terms of use & privacy policy
          </label>
        </div>

        <button type="submit">Continue</button>

        <p className="loginsignup-login">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  )
}

export default LoginSignup
