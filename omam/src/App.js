import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './home';
import Author from './individualpages/Author'
import Citation from './individualpages/Citation'
import Credits from './individualpages/Credits'
import Data from './individualpages/Data'
import History from './individualpages/History'
import List from './individualpages/List'
import Map from './individualpages/Map'
import Methods from './individualpages/Methods'


class App extends React.Component{
  render(){
    return(
      <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/author" component={Author}/>
      <Route exact path="/citation" component={Citation}/>
      <Route exact path="/credits" component={Credits}/>
      <Route exact path="/data" component={Data}/>
      <Route exact path="/history" component={History}/>
      <Route exact path="/list" component={List}/>
      <Route exact path="/map" component={Map}/>
      <Route exact path="/methods" component={Methods}/>
      </div>
    )
  }
}

export default App
