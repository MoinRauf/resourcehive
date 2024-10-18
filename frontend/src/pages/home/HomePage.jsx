import { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        "https://resourcehive-b.vercel.app//login",
        {
          email,
          password,
        }
      );
      console.log("Login successful:", response.data);
      // Handle successful login (e.g., redirect or update state)
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setErrors({ submit: "Login failed. Please check your credentials." });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </div>
        {errors.submit && <span style={{ color: "red" }}>{errors.submit}</span>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default HomePage;
