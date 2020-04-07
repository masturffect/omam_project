import React from 'react';
import './App.css';
import Img from './OMAMlogo.jpg';
import { Button } from './Components/AuthorButton';
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
        <Button>Author and His Arguments</Button>
      </div>
    </div>
    );
  }
}

export default App

