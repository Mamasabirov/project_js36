import React from "react";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Catalog from "./components/catalog/Catalog";
import Promotion from "./components/catalog/Promotion";

const App = () => {
  return <div>
    <Navbar/>
    <Catalog/>
    <Promotion/>
    <MainRoutes/>
  </div>;
};

export default App;
