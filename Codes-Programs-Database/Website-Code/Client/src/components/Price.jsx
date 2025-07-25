import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from 'react'


const Price = () => {
    const [d, setD] = useState(0)
    useEffect(() => {
        try{

            axios.get("http://127.0.0.1:8000/").then((res) => {
                console.log(res.data);
                setD(res.data)
            
        })
        }catch(error){
            console.log(error)
        }

    }, [])

  return (
    <>
    
    <React.Fragment>
      <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
        <Box sx={{ padding: 5 }}>
          <Grid container spacing={3}>
            <h1>KNN: $ {d.price1} </h1>
            <br />
            <h1>Polynomial Regression: $ {d.price2} </h1>
          </Grid>
          
        </Box>
        </Paper>
    </React.Fragment>

    </>
  )
}

export default Price