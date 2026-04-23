import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, ArrowLeft } from "lucide-react";
import { auth } from "../firebase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/dashboard");
    } catch (err) {
      console.error("Auth error:", err.message);
      if (
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password" ||
        err.code === "auth/invalid-credential"
      ) {
        setError("Invalid email or password.");
      } else {
        setError("Sign-in failed. Please try again.");
      }
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-[500px] min-h-50 p-6 md:p-8 bg-white/30 backdrop-blur-md rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50"
      >
        <button 
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 md:top-6 md:left-6 p-2 rounded-full hover:bg-white/40 border border-transparent hover:border-white/50 transition-all text-gray-800 cursor-pointer shadow-sm hover:shadow-md z-10"
          title="Return to Portfolio"
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </button>

        <div className="flex justify-center mb-4">
          <Lock size={48} className="text-gray-800" strokeWidth={1.5} />
        </div>
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Admin Login
        </h1>

        {error && (
          <div className="mb-4 text-sm text-center text-red-600 bg-red-100/50 backdrop-blur-sm p-3 rounded-lg border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSignIn} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
          />

          <button
            type="submit"
            className="w-full px-4 py-3 text-sm font-bold text-indigo-900 bg-white/90 hover:bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out uppercase tracking-wider cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Auth;
