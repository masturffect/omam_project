import React from 'react';
import './App.css';
import Img from './OMAMlogo.jpg';
import { Button } from './Components/AuthorButtoyuun';
import GlobalFonts from './fonts/fonts';
//import Credits from './individualpages/Credits'
//import Data from './individualpages/Data'
//import History from './individualpages/History'
//import List from './individualpages/List'
//import Map from './individualpages/Map'
//import Methods from './individualpages/Methods'
//import NavBar from './NavBar'
//import {Route} from 'react-router-dom'


class App extends React.Component{
  render(){
    return(
    <div>
      <div className="omamlogo">
        <center>
          <img src = {Img} alt="Logo"/>
        </center>
        <Wrapper> 
            <GlobalFonts />
        </Wrapper>
    
    
    </div>
      <div>
        <Button>Author and His Arguments</Button>
      </div>
    </div>
    );
  }
}

export default App

