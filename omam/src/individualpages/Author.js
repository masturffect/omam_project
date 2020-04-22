import React from 'react'
import './Author.css';
import { Button } from '../Components/Buttons'
import {Link} from 'react-router-dom'

const Author = () =>(
  
    <div className="Author">
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
      <h1>Welcome to the Author's site and his argument</h1>
      <p>My name is Andrew Fialka. I am an asisstant professor at Middle Tennesee stat University 
          where I teach Civil War and American history and conduct research on guerilla war and spatial methodologies.
      </p>
    </div>
)

export default Author;