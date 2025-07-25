import React from 'react'
import './Home.css'
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <>
      <div
          style={{
            backgroundColor: 'transparent',
            width: '700px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
        <span className='title'>Gemvaluate</span></div>
        <Button className='butt' variant="contained"style={{ backgroundColor: '#485461' }} href='/predict' >Predict</Button>
    </>
  )
}

export default Home