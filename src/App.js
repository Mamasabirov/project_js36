import React from "react";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import './App.css'
import Icon from "./components/icon/Icon";

const App = () => {
  return (
    <div>
      <Navbar />
      <Icon />
      <MainRoutes />
    </div>
  );
};

export default App;
