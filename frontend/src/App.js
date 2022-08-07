import * as React from 'react';
import Button from '@mui/material/Button';
import MyAppBar from './components/MyAppBar';
import BasicCard from './components/BasicCard';
import { Grid } from '@mui/material';
import { useState,useEffect } from 'react';


function App() {

  const [exercises, setExercises] = useState([]);



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



        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
               
               
               {exercises.map((i)=>(
                 <BasicCard duration={i.duration} description={i.description} id={i._id} />
               ))}
                
            

        </Grid>



  </>
  
}



export default App;
