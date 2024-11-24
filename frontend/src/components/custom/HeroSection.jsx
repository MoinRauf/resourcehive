import React from "react";
import { Link } from "react-router-dom";
import heroImage from "./../assets/hero1.png"; 
import { motion } from "framer-motion"; 

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: "brightness(1.05)", 
        }}
      />

      {/* 
  Logo at Top-Left 
  <div className="absolute top-4 left-4 text-black font-bold text-2xl z-10">
    ResourceHive
  </div> 
*/}

      {/* Main Content */}
      <div className="relative z-10 text-center text-black">
        {/* Animated Heading */}
        <motion.h1
          className="text-6xl font-bold mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to ResourceHive
        </motion.h1>

        {/* Buttons */}
        <div className="space-x-4">
          {/* Login Button */}
          <Link
            to="/login"
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-custom-gray transition-all"
          >
            Login
          </Link>

          {/* Signup Button */}
          <Link
            to="/sign_up"
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-custom-gray transition-all"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
