import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
    confirmPassword: '',
    user_type: '',
  });

  const [passwordValid, setPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.user_type !== 'tenant' && formData.user_type !== 'owner') {
      alert('Invalid user_type. Please select "tenant" or "owner".');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    if (!passwordValid) {
      alert('Password must include at least one uppercase letter, one number, and one special character.');
      return;
    }

    fetch('http://127.0.0.1:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('User created successfully!');

        alert('User created successfully!');

        navigate('/login');
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPasswordValid(validatePassword(password));
    handleChange(event);
  };

  return (
    <div className="signup-container">
      <div className="left-half">
        <h2>Get Started Now</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handlePasswordChange}
            required
          />
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </label>
          <select
            name="user_type"
            value={formData.user_type}
            onChange={handleChange}
            required
          >
            <option value="">Select User Type</option>
            <option value="tenant">Tenant</option>
            <option value="owner">Owner</option>
          </select>
          <button className="signup-button" type="submit">
            Sign Up
          </button>
          <div className="sign-up-options">
            <p>Or sign up with:</p>
            <div className="signup-buttons-wrapper">
              <button className="signup-google-button">Sign up with Google</button>
              <button className="signup-apple-button">Sign up with Apple</button>
            </div>
          </div>
        </form>
      </div>
      <div className="right-half">
      </div>
    </div>
  );
};

export default SignUp;
