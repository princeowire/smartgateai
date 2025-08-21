import { useState } from 'react'
import { Routes, Route, } from "react-router-dom";
import './App.css'
import Dashboard from './pages/Dashboard/dashboard';
import Jobs from './pages/jobs/jobs';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <Sidebar collapsed={!isSidebarOpen} toggleCollapsed={toggleSidebar} />
      <Header onToggleSidebar={toggleSidebar} />
      <div className='ml-16'>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        {/* <Route path="/charts" element={<ChartPage />} /> */}
      </Routes>
      </div>
    </>
  )
}

export default App
