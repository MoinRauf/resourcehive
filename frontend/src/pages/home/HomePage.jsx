import { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://resourcehive-b.vercel.app/api/v1/users/login",
        {
          email,
          password,
        },
        {
          withCredentials: true, // Ensures that cookies are included in the request
          headers: {
            "Content-Type": "application/json", // Required for JSON requests
          },
        }
      );

      console.log("Login successful:", response.data);
      // Handle successful login (e.g., redirect or update state)
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure (e.g., show an error message)
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default HomePage;
