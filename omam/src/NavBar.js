import React from'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <ul>
            <li><Link to="/author">Author</Link></li>
            <li><Link to="/citations">Citation</Link></li>
            <li><Link to="/credits">Credits</Link></li>
            <li><Link to="/data">Data</Link></li>
            <li><Link to="/list">List</Link></li>
            <li><Link to="/map">Map</Link></li>
            <li><Link to="/methods">Methods</Link></li>
            <li><Link to="/history">History</Link></li>

        </ul>
    )
}

export default NavBar;