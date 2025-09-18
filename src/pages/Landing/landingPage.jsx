import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          SmartGate AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 max-w-2xl text-lg text-gray-400"
        >
          Your intelligent career companion. Find jobs faster, match with the
          right employers, and unlock opportunities with AI-driven insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-10 flex gap-6 flex-wrap justify-center"
        >
          <Link to="/login">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-2xl text-lg">
              Talent Login
            </button>
          </Link>

          <Link to="/login">
            <button className="px-6 py-3 border border-gray-500 hover:bg-gray-800 transition rounded-2xl text-lg">
              Employer Login
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Smart Job Matching",
              desc: "AI-powered matching ensures candidates connect with the right roles faster than ever.",
            },
            {
              title: "Career Insights",
              desc: "Receive personalized career recommendations and skill-building paths based on market trends.",
            },
            {
              title: "Employer Tools",
              desc: "Companies can streamline hiring, filter talent, and automate outreach with ease.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-800 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center bg-black border-t border-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          Unlock Your Future with SmartGate AI
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex gap-6 justify-center flex-wrap"
        >
          <Link to="/signup">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-2xl text-lg">
              Talent Sign Up
            </button>
          </Link> 

          <Link to="/signup">
            <button className="px-8 py-4 border border-gray-500 hover:bg-gray-800 transition rounded-2xl text-lg">
              Employer Sign Up
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} SmartGate AI. All rights reserved.
      </footer>
    </div>
  );
}
