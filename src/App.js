import React from "react";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Catalog from "./components/catalog/Catalog";
import Promotion from "./components/catalog/Promotion";
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
