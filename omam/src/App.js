import React from 'react';
import './App.css';
import Img from './OMAMlogo.jpg';
import Author from './Author'
import Citation from './Citation'
import Credits from './Credits'
import Data from './Data'
import History from './History'
import List from './List'
import Map from './Map'
import Methods from './Methods'
import NavBar from './NavBar'
import {Route} from 'react-router-dom'


class App extends React.Component{
  render(){
    return(
    <div className="omamlogo">
      <center>
        <img src = {Img} alt="Logo"/>
      </center>

      <NavBar />
      <Route exact path="/" component={Author}/>
      <Route exact path="/citation" component={Citation}/>
      <Route exact path="/credits" component={Credits}/>
      <Route exact path="/data" component={Data}/>
      <Route exact path="/history" component={History}/>
      <Route exact path="/list" component={List}/>
      <Route exact path="/map" component={Map}/>
      <Route exact path="/methods" component={Methods}/>


    </div>
    );
  }
}

export default App

