import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./common/Navigation";
import "bulma/css/bulma.css";
import "rsuite/dist/rsuite.min.css"; // or 'rsuite/dist/rsuite.min.css'
import MainRoutes from "./routes/MainRoutes";
import { Footer } from "./common/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="">
      <Navigation />
      <MainRoutes />
      {location.pathname !== "/about-us" && location.pathname !== "/" && (
        <Footer />
      )}
    </div>
  );
}

export default App;
