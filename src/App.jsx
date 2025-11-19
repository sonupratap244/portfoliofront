import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Messages from "./pages/Messages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Portfolio Main Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <PortFolio />
              <Experiance />
              <Contact />
              <Footer />
              <Toaster />
            </>
          }
        />

        {/*  Admin Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </Router>
  );
}

export default App;
