import { useState } from 'react'

import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./pages/admin/Layout/AdminLayout";


function App() {
  
  return (
    <div>
      
      <Routes>
                    <Route index element={<Landingpage />} />
                    <Route path="login-admin" element={<Login />} />
                    <Route path="admin/*" element={<AdminLayout />} />
               </Routes>
      
    </div>
    
  )
}

export default App;
