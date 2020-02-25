import React from 'react';
import './App.css';
import Img from './OMAMlogo.jpg';

class App extends React.Component{
  render(){
    return(
    <div>
      <div className="omamlogo">
        <center>
          <img src = {Img} alt="Logo"/>
        </center>
      </div>
      <div className="btn1">
        <button variant="primary">Author & His Arguments</button>
      </div>
    </div>
    );
  }
}

export default App

