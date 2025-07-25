import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "@mui/material/Button";
import axios from "axios";



export default function Form() {
  const [cut, setCut] = useState("");
  const [color, setColor] = useState("");
  const [Carat, setCarat] = useState("");
  const [Table, setTable] = useState("");
  const [Depth, setDepth] = useState("");
  const [X, setX] = useState("");
  const [Y, setY] = useState("");
  const [Z, setZ] = useState("");
  const [clarity, setClarity] = useState("");
  const [price, setPrice] = useState(0);
  const [XYZ, setXYZ] = useState("");

  const handleChange1 = (event) => {
    setCut(event.target.value);
  };
  const handleChange2 = (event) => {
    setColor(event.target.value);
  };
  
  const cutDict = {
    "Fair": 1,
    "Good": 2,
    "Very Good": 3,
    "Premium": 4,
    "Ideal": 5,
  }

  const colorDict = {
    "D": 7,
    "E": 6,
    "F": 5,
    "G": 4,
    "H": 3,
    "I": 2,
    "J": 1,
  }

  const clarityDict = {

    "I1": 1,
    "SI2": 2,
    "SI1": 3,
    "VS2": 4,
    "VS1": 5,
    "VVS2": 6,
    "VVS1": 7,
    "IF": 8,
  }


  const cuts = [
    "Fair",
    "Good",
    "Very Good",
    "Premium",
    "Ideal",
    
  ];

  const colors = [
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
  ]

  const clarities = [
    "I1",
    "SI2",
    "SI1",
    "VS2",
    "VS1",
    "VVS2",
    "VVS1",
    "IF",
  ]
   var count = 0;
  const onSubmitt = async (e) => {
    e.preventDefault();
    
    const xyz = XYZ.split(",");
    setX(xyz[0]);
    setY(xyz[1]);
    setZ(xyz[2]);
    const data = {
      "X":X,
      "Y":Y,
      "Z":Z,
      "carat":Carat,
      "cut":cutDict[cut],
      "color":colorDict[color],
      "clarity":clarityDict[clarity],
      "depth":Depth,
      "table":Table,
      "price":price,

    };

    // convert data to json
    
    try {

      axios.post("http://127.0.0.1:8000/", data).then((res) => {

        console.log(res.data);
        if (count == 0){

          count = 1;
          // press send button
          const sendButton = document.querySelector("#send");
          sendButton.click();

          window.location.href = "/price";

        }

       
      });

    
      
    } catch (error) {
      console.log(error);
      
    }

    // go to next page

    // go to url /price
    
    



       
    

  }

  return (
    <React.Fragment>
      <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
        <Box sx={{ padding: 5 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Carat
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="title"
                name="Carat"
                label="Carat"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
                onChange={
                  (e) => setCarat(e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                X,Y,Z
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="artist"
                name="xyz"
                label="X,Y,Z"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
                onChange={
                  (e) => setXYZ(e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Cut
              </InputLabel>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Cut</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={cut}
                  label="Cut"
                  onChange={handleChange1}
                >
                  {cuts.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Table
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="Table"
                name="Table"
                label="Table"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
                onChange={
                  (e) => setTable(e.target.value)
                }
              />
            </Grid>

            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Depth
              </InputLabel>
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="Depth"
                name="Depth"
                label="Depth"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
                onChange={
                  (e) => setDepth(e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Color
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={color}
                  label="Color"
                  onChange={handleChange2}
                >
                  {colors.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Clarity
              </InputLabel>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Clarity</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={clarity}
                  label="Clarity"
                  onChange={
                    (e) => setClarity(e.target.value)
                  }
                >
                  {clarities.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            
            <Grid item xs={12} sm={4}
            sx={{
              marginLeft: '30rem',
            }}
            >
              <Button onClick={onSubmitt} id="send" variant="contained" sx={{ color: "whitesmoke" }}>
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </React.Fragment>
  );
}