import { useState } from 'react'

import './App.css'
import Landingpage from './pages/Landingpage/Landingpage'
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./pages/admin/Layout/AdminLayout";
import Login from './pages/admin/Login/Login'


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
