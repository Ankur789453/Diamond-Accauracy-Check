import React from 'react'
import './App.css'
import Button from '@mui/material/Button';
import {BrowserRouter as Router,  Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'
import Price from './components/Price';

const App = () => {
  return (
    <>
    <div
        className = "cont"
        style={{
          flexDirection: 'column',
        }}
      >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict" element={<Form />} />
          <Route path="/price" element={<Price />} />
        </Routes>
      </Router>

      </div>
            
    </>
  )
}

export default App