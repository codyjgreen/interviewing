import './App.css';
import React from "react";
import {Link} from 'react-router-dom';

function NavBar() {
    return(
      
        <header className="Header">
        <ul className="Nav">
            <li>
                <Link className="App-link" to="/peer-interviewing/">Home</Link>
            </li>
            <li>
                <Link className="App-link" to="/peer-interviewing/Engineering">Engineering</Link>
            </li>
            <li>
                <Link className="App-link" to="/peer-interviewing/Design">Design</Link>
            </li>
        </ul>
        </header>
       
    )
}

export default NavBar;