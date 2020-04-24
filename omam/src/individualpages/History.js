import React from 'react'
import { Button } from '../Components/Buttons'
import {Link} from 'react-router-dom'
import {Hist} from '../photos/History_01.jpg'
import "./History.css"

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
            buttonSize="btn--homesize"
            >HOME
          </Button>
      </Link>
      </div>
  )
}
export default History;