import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import ProtectedRoute from "../src/lib/ProtectedRoute"; // 👈 import it

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const location = useLocation();
  const hideLayout = ["/login", "/signup"].includes(location.pathname);

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
      <div className={`${hideLayout ? "ml-0" : "ml-16 max-sm:ml-0"}`}>
        <Routes>
          {/* 🔓 Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />

          {/* 🔐 Protected Routes */}
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
