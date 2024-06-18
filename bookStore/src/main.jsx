import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Header />

      <App />
    
  </BrowserRouter>
);
