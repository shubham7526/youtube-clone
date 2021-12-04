import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Router from './Router'
import NavBar from './Component/Navbar/Navbar';
import {videoListDetail} from './data.json';

const App=()=> {
                      
  return (
    <div className="app-body">
      <div className="navbar-app"><NavBar/></div>
      <div className="row">
        <div >
          <Router videoListDetail={videoListDetail} />
        </div>
      </div>
    </div>
  )
}

export default App;
