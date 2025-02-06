import  { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  // Step 1: Set up state to handle form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  // Step 2: Set up a state to handle error and success messages
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Step 3: Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Step 4: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Basic validation before sending data
    if (formData.password !== formData.passwordConfirm) {
      setErrorMessage("Passwords don't match.");
      return;
    }

    // Make the API call using Axios
    try {
      const response = await axios.post('https://resourcehive-backend.vercel.app/api/v1/users/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        passwordConfirm: formData.passwordConfirm,
      });

      // On successful signup
      setSuccessMessage('Signup successful!');
      setErrorMessage(''); // Clear any previous errors
      console.log('Signup success:', response.data);
      
      // Reset the form fields
      setFormData({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
      });
    } catch (error) {
      // Handle any error that occurs during the signup request
      setErrorMessage(error.response?.data?.message || 'Something went wrong!');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      
      {/* Display error and success messages */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      
      {/* Step 5: Form for user input */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
