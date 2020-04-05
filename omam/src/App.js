import React from 'react';
import './App.css';
import Img from './OMAMlogo.jpg';

class App extends React.Component{
  render(){
    return(<div>
      <center>
        <img src = {Img} alt="Logo"/>
      </center>
    </div>
    );
  }
}

export default App

