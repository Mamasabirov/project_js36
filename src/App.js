import React from "react";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <div style={{marginTop: 'auto'}}>
        <Footer />
      </div>
      
    </div>
  );
};

export default App;
