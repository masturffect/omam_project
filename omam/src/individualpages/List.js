import React from 'react'
import { Button } from '../Components/Buttons'
import {Link} from 'react-router-dom'

function List(){
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
            <h1>A reading list that brought everything together!</h1>
        </div>
    )
}

export default List;