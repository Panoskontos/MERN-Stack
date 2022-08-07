import * as React from 'react';
import Button from '@mui/material/Button';
import MyAppBar from './components/MyAppBar';
import BasicCard from './components/BasicCard';
import { Grid } from '@mui/material';
import { useState,useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function App() {

  const [exercises, setExercises] = useState(null);



  async function get_exercises(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("http://localhost:7001/exercises", requestOptions)
      .then(response => response.json())
      .then(result => setExercises(result))
      .catch(error => console.log('error', error));
    }


    useEffect(() => {
      get_exercises()
    },[]);

  


    
  return <>
       { console.log(exercises)}
        <MyAppBar />
        <br/>
        <Typography variant='h3' display="flex"  justifyContent="center"
          alignItems="center">
          Exercises
        </Typography>
        <br/>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {exercises?
                <>
               {exercises.map((i)=>(
                 <BasicCard duration={i.duration} description={i.description} id={i._id} />
                 ))}
                 </>
                 :
                 <>
                 <Box>
                    <CircularProgress />
                 </Box>
                 </>}
        </Grid>



  </>
  
}



export default App;
