// eslint-disable-next-line no-unused-vars
import React from "react";
import homeimage from "../../assets/homepageimage.jpeg"; // Adjust the path as needed

const HomePage = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: `url(${homeimage})`, // Set the background image
        backgroundSize: "cover", // Cover the entire area
        backgroundPosition: "center", // Center the image
      }}
    >
      <h1 style={{ color: "white", position: "absolute", top: "20px", left: "20px" }}>
        Welcome to the Homepage
      </h1>
      {/* Other content can go here */}
    </div>
  );
};

export default HomePage;
