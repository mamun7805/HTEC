import React from 'react';
import {Link} from 'react-router-dom';

function Header(){

    return(
        <>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
            <div className = "container">
                <a class="navbar-brand" href="#"> MD Adraful Islam </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link to = "/" class="nav-link">Logout</Link>
                    </li>
                </ul>
             </div>
        </div>
    </nav>        
        </>
    )
}

export default Header;