import React from 'react';
import Img from './OMAMlogo.jpg';
import { Button } from './Components/Buttons'

import {Link} from 'react-router-dom'

function Home(){
      return(
      <div>
        <div className="omamlogo">
          <center>
            <img src = {Img} alt="Logo"/>
          </center>

  
        </div>
        <div>
        <Link to ='/author'>
          <Button
            onClick = {() => {
              console.log("You clicked me");
            }}
            type="button"
            buttonStyle="btn--author"
            buttonSize="btn--large"
            >AUTHOR AND HIS ARGUMENTS
            </Button>
            </Link>
        </div>
        <div>
        <Link to ='/map'>
          <Button
            onClick = {() => {
              console.log("You clicked me");
            }}
            type="button"
            buttonStyle="btn--map"
            buttonSize="btn--large"
            >INTERACTIVE MAP</Button>
            </Link>
        </div>
        <div>
        <Link to ='/list'>
          <Button
            onClick = {() => {
              console.log("You clicked me");
            }}
            type="button"
            buttonStyle="btn--readings"
            buttonSize="btn--large"
            >READINGS LIST</Button>
            </Link>
        </div>
        <div>
        <Link to ='/citation'>
          <Button
            onClick = {() => {
              console.log("You clicked me");
            }}
            type="button"
            buttonStyle="btn--citation"
            buttonSize="btn--large"
            >FOLLOWING A CITATION?</Button>
            </Link>
        </div>
        <div>
        <Link to ='/history'>
          <Button
            onClick = {() => {
              console.log("You clicked me");
            }}
            type="button"
            buttonStyle="btn--proj"
            buttonSize="btn--large"
            >PROJECT HISTORY</Button>
            </Link>
        </div>
        <div>
        <Link to ='/methods'>
          <Button
            onClick = {() => {
              console.log("You clicked me");
            }}
            type="button"
            buttonStyle="btn--methods"
            buttonSize="btn--large"
            >METHODS</Button> 
            </Link>
        </div>
        <div>
        <Link to ='/data'>
          <Button
            onClick = {() => {
              console.log("You clicked me");
            }}
            type="button"
            buttonStyle="btn--data"
            buttonSize="btn--large"
            >DATA</Button> 
            </Link>
        </div>
        <div>
        <Link to ='/credits'>
          <Button
            onClick = {() => {
              console.log("You clicked me");
            }}
            type="button"
            buttonStyle="btn--credits"
            buttonSize="btn--large"
            >CREDITS, CONTRIBUTORS, AND BUILDERS</Button> 
            </Link>
        </div>
        
      </div>
      );
}
  
export default Home; 