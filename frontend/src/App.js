// src/App.jsx
import React from 'react';
// import RouteComponent from '.';  // Import RouteComponent
import Navbar from './components/Navbar';  // Import Navbar
import Footer from './components/Footer';  // Import Footer
import RouteComponent from './routes/routes';

const App = () => {
  return (
    <div>
      <Navbar />
      <RouteComponent />  {/* Route rendering */}
      <Footer />
    </div>
  );
};

export default App;
