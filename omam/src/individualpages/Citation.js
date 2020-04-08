import React from 'react'
import { Button } from '../Components/Buttons'
import {Link} from 'react-router-dom'

function Citation(){
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
            <h1>Welcome to the website's citations!</h1>
        </div>
    )
}

export default Citation;