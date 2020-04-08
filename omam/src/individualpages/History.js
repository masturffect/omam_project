import React from 'react'
import { Button } from '../Components/Buttons'
import {Link} from 'react-router-dom'

function History(){
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
            <h1>Behind the scenes!</h1>
        </div>
    )
}

export default History;