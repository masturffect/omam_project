import React from 'react';
import './App.css';
import Img from './OMAMlogo.jpg';
import { Button } from './Components/Buttons'
//import Author from './individualpages/Author'
//import Citation from './individualpages/Citation'
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

        {/* <NavBar />
        <Route exact path="/" component={Author}/>
        <Route exact path="/citation" component={Citation}/>
        <Route exact path="/credits" component={Credits}/>
        <Route exact path="/data" component={Data}/>
        <Route exact path="/history" component={History}/>
        <Route exact path="/list" component={List}/>
        <Route exact path="/map" component={Map}/>
        <Route exact path="/methods" component={Methods}/>
  */}

  {/* >>>>>>> 4c736c2af49ff574dcd901644fd94f72759535f7 */}
      </div>
      <div>
        <Button
          onClick = {() => {
            console.log("You clicked me");
          }}
          type="button"
          buttonStyle="btn--author"
          buttonSize="btn--large"
          >Author and His Arguments</Button>
      </div>
      <div>
        <Button
          onClick = {() => {
            console.log("You clicked me");
          }}
          type="button"
          buttonStyle="btn--map"
          buttonSize="btn--large"
          >Interactive Map</Button>
      </div>
      <div>
        <Button
          onClick = {() => {
            console.log("You clicked me");
          }}
          type="button"
          buttonStyle="btn--readings"
          buttonSize="btn--large"
          >Readings List</Button>
      </div>
      <div>
        <Button
          onClick = {() => {
            console.log("You clicked me");
          }}
          type="button"
          buttonStyle="btn--citation"
          buttonSize="btn--large"
          >Following a Citation?</Button>
      </div>
      <div>
        <Button
          onClick = {() => {
            console.log("You clicked me");
          }}
          type="button"
          buttonStyle="btn--proj"
          buttonSize="btn--large"
          >Project History</Button>
      </div>
      <div>
        <Button
          onClick = {() => {
            console.log("You clicked me");
          }}
          type="button"
          buttonStyle="btn--methods"
          buttonSize="btn--large"
          >Methods</Button> 
      </div>
      <div>
        <Button
          onClick = {() => {
            console.log("You clicked me");
          }}
          type="button"
          buttonStyle="btn--data"
          buttonSize="btn--large"
          >Data</Button> 
      </div>
      <div>
        <Button
          onClick = {() => {
            console.log("You clicked me");
          }}
          type="button"
          buttonStyle="btn--credits"
          buttonSize="btn--large"
          >Credits, Contributors, Builders</Button> 
      </div>
      
    </div>
    );
  }
}

export default App

