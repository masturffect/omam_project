import React from 'react'
import { Button } from '../Components/Buttons'
import {Link} from 'react-router-dom'
import Backdrop from "./Methods_Image1.jpg"

function Methods(){
    return(
        <div>
      <Link to ='/'>
          <Button
            onClick = {() => {
              console.log("You clicked me");
            }}
            type="button"
            buttonStyle="btn--home"
            buttonSize="btn--large"
            >HOME
          </Button>
      </Link>
            <img src={Backdrop}></img>      
            <h1>Our methods!</h1>
        </div>
    )
}

export default Methods;