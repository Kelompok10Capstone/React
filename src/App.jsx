import { useState } from 'react'

import './App.css'
import FontBold from './elements/FontBold/FontBold'
import Button from './elements/Button/Button'
import Input from './elements/Input/Input'
import { MdOutlineDashboard } from 'react-icons/md'

import Modal from './elements/Modal/Modal'

function App() {
  
  return (
    <div>
      <Button onClick={Modal}> Hallo asd </Button>

      <FontBold> Haloo </FontBold>
      <FontBold $36> Haloo </FontBold>
      <Input 
        label='email'
        classLabel='form-label'
        className='form-control'
      />

      <MdOutlineDashboard  
        size={100}
      />

    </div>
    
  )
}

export default App
