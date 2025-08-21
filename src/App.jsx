import { useState } from 'react'
import { Routes, Route, } from "react-router-dom";
import './App.css'
import Dashboard from './pages/Dashboard/dashboard';
import Jobs from './pages/jobs/jobs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        {/* <Route path="/charts" element={<ChartPage />} /> */}
      </Routes>
    </>
  )
}

export default App
