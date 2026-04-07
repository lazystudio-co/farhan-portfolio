import React from "react";

const AdminPage = () => {
  return (
    <div className="portfolio-backdrop">
      <div className="portfolio-shell flex items-center justify-center p-6">
        <div className="w-full max-w-2xl rounded-3xl p-8 md:p-10 bg-white/70 border border-white/80 shadow-[0_20px_60px_rgba(4,13,26,0.12)] backdrop-blur-sm text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#0d1625] mb-3">
            Dashboard
          </h1>
          <p className="text-[#334155]">
            Login successful and email is verified.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
