import React from "react";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Icon from "./components/icon/Icon";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Icon />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
