import { useState } from 'react'

import './App.css'
import FontBold from './elements/FontBold/FontBold'
import Button from './elements/Button/Button'
import Input from './elements/Input/Input'

import { Route, Routes } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md'


import Modal from './elements/Modal/Modal'

import Landingpage from './pages/Landingpages/Landingpage'
import Hero from './components/Hero/Hero'
import Feature from './components/Feature/Feature'


function App() {
  
  return (
    <div>
      
      <Landingpage/>
      
    </div>
    
  )
}

export default App
