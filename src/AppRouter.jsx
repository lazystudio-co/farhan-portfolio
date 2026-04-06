import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const AppRouter = () => (
  <Router>
    <div className="min-h-screen bg-linear-to-b from-[#cfd5dc] via-[#b9c0c9] to-[#a9b1bb]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
