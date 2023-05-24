import { useState } from 'react'
import './index.css';
import './App.css'
import FontBold from './elements/FontBold/FontBold'
import Button from './elements/Button/Button'
import Input from './elements/Input/Input'
import { MdOutlineDashboard } from 'react-icons/md'

import Modal from './elements/Modal/Modal'
import Landingpage from './pages/Landingpage/Landingpage'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from './pages/admin/Layout/AdminLayout'

function App() {
  
  return (
    <div>
      <Routes>
        <Route index element={<Landingpage/>}/>
        <Route path='admin/*' element={<AdminLayout/>}/>
      </Routes>
    </div>
    
  )
}

export default App
