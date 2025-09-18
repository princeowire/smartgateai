import { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/dashboard";
import Jobs from "./pages/jobs/jobs";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import ResumeReview from "./pages/resume/resumereview";
import Home from "./pages/Home/Home";
import HireTalent from "./pages/Hiretalent/hiretalent";
import LoginPage from "./pages/Login/login";
import Signup from "./pages/signup/signup";
import ProtectedRoute from "../src/lib/ProtectedRoute"; 
import ChatBot from "./pages/Chatbot/ChatBot";
import LandingPage from "./pages/Landing/landingPage";
import FloatBot from "./components/chatbot-main/floatBot";

import { auth } from "./lib/firebase"; 
import { useAuthState } from "react-firebase-hooks/auth"; // ✅

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [user, loading] = useAuthState(auth); // ✅ get auth state

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const location = useLocation();
  const hideLayout = ["/login", "/signup", "/onboarding"].includes(location.pathname);

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>; // or spinner
  }

  return (
    <>
      {!hideLayout && (
        <Sidebar
          collapsed={!isSidebarOpen}
          toggleCollapsed={toggleSidebar}
          setCollapsed={setSidebarOpen}
        />
      )}

      {!hideLayout && <Header onToggleSidebar={toggleSidebar} />}
      {!hideLayout && <FloatBot />}

      <div className={`${hideLayout ? "ml-0" : "ml-16 max-sm:ml-0"}`}>
        <Routes>
          {/* Root route → depends on auth */}
          <Route
            path="/"
            element={
              user ? <Home /> : <Navigate to="/onboarding" replace />
            }
          />

          {/* Onboarding page (public) */}
          <Route path="/onboarding" element={<LandingPage />} />

          {/* Auth pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobs"
            element={
              <ProtectedRoute>
                <Jobs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chatbot"
            element={
              <ProtectedRoute>
                <ChatBot />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ai-review"
            element={
              <ProtectedRoute>
                <ResumeReview />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hire-talent"
            element={
              <ProtectedRoute>
                <HireTalent />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
