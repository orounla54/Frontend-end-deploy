import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import ThemeProvider from "./utils/ThemeContext";
import App from "./App";
import { AuthProvider } from "./utils/Auth/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
