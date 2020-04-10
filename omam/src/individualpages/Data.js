import React from 'react'
import { Button } from '../Components/Buttons'
import {Link} from 'react-router-dom'

function Data(){
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
            <h1>Data source!</h1>
        </div>
    )
}

export default Data;