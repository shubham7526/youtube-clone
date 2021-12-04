import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = ()=>{

    return(
        <div className="d-flex justify-content-between">
            <div class="bg-danger navbar-dark m-2 p-2 badge">
                <Navbar.Brand href="/">YouTube</Navbar.Brand>           
            </div>
            <form class="d-flex p-2">
                <input placeholder="Search" aria-label="Search" type="search" class="mr-2 form-control"/>
                <button type="button" class="btn btn-outline-success" >Search</button>
            </form>
                
        </div>
    )
}

export default NavBar;

  