import { useState } from "react";
import axios from "axios";

const Login = () => {
  // Step 1: Set up state to store form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Step 2: Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate form data (basic check)
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    // Clear error message before sending request
    setErrorMessage("");
    setLoading(true);

    try {
      const response = await axios.post("https://resourcehive-backend.vercel.app/api/v1/users/login", {
        email,
        password,
      });

      // Handle successful login
      console.log(response.data); // You can handle success response here (like saving token, etc.)
      setLoading(false);

      // Store the token in localStorage after successful login
      const token = response.data.token; // Assuming the token is in response.data.token
      if (token) {
        localStorage.setItem("authToken", token); // Save the token in localStorage
      }

      // Optionally, you can redirect the user or show a success message
      // For example, redirecting to a dashboard after successful login:
      // window.location.href = "/dashboard"; 

    } catch (error) {
      setLoading(false);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || "Login failed. Please try again.");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
