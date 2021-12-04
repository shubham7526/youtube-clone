import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

const Sidebar=()=> {
    let history = useHistory();
    const goTo=(loct)=>{
        const location = {
            pathname: `/${loct}`,
        }
        history.push(location)      
    }

                      
  return (
    <div >
        <div onClick={() => goTo("")}>
            <button className="d-block btn btn-outline-success m-5 sidebar-button" >Home</button>         
        </div>
        <div onClick={() => goTo("about")}>
            <button className="d-block btn btn-outline-success m-5 sidebar-button" >About</button>         
        </div>
        <div onClick={() => goTo("setting")}>
            <button className="d-block btn btn-outline-success m-5 sidebar-button" >Setting</button>         
        </div>
    </div>
  )
}

export default Sidebar;
