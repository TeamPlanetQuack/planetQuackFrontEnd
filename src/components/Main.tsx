import React ,
{ useEffect } 
from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import {
  PlanetsNavigationBar, 
  SolarSystemHeader,
} from '.'
// import axios from 'axios'

const Main = () => {

  useEffect(() => {
    // axios.get('http://localhost:8080/api/planets').then((response) => {
    //   console.log(response)



      
    // })
    try {
      const test = async () => {
        const options = {
          headers: {'Content-Type': 'application/json'}
        }
  
  
        const response = await fetch('http://localhost:8080/api/planets/', options );
        const res = await response.json() 
  
        return res
  
      }
      test();
      
    } catch (error) {
      console.error(error)
    }


  }, []);




    return (
      <Router>
      <div id="main">
        <SolarSystemHeader />
        <PlanetsNavigationBar />
        <Routes>

        </Routes>

      </div>
      </Router>
    );
  };
  
  export default Main;