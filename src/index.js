import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContextProvider";
import { ThemeProvider } from "@emotion/react";
import { THEME } from "./helpers/consts";
import AuthContextProvider from "./contexts/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </AuthContextProvider>  
  </BrowserRouter>
    
);
