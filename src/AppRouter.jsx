import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import AdminPage from "./pages/AdminPage";

const AppRouter = () => (
  <Router>
    <div className="min-h-screen bg-linear-to-b from-[#cfd5dc] via-[#b9c0c9] to-[#a9b1bb]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<AdminPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  </Router>
);

export default AppRouter;
