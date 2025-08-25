import { useState } from 'react'
import { Routes, Route, } from "react-router-dom";
import './App.css'
import Dashboard from './pages/Dashboard/dashboard';
import Jobs from "./pages/jobs/jobs"
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import ResumeReview from './pages/Resumereview/resumereview';
import Home from './pages/Home/Home';
import HireTalent from './pages/Hiretalent/hiretalent';
import LoginPage from './pages/Login/login';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  
  return (
    <>
      <Sidebar collapsed={!isSidebarOpen} toggleCollapsed={toggleSidebar} />
      <Header onToggleSidebar={toggleSidebar} />
      <div className='ml-16 max-sm:ml-0'>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/ai-review" element={<ResumeReview />} />
        <Route path="/hire-talent" element={<HireTalent />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      </div>
    </>
  )
}

export default App
