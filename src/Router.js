import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, 
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import VideoList from './Component/VideoList/VideoList';
import About from './Component/About/About';
import Setting from './Component/Setting/Setting';
import './Router.css';
import Sidebar from './Component/Sidebar/Sidebar';
import PlayContent from './Component/PlayContent/PlayContent';

const PageRouter = ({videoListDetail}) =>{

    const[sidebarVideoList, setSidebarVideoList]= useState([]);

    const filterSidebarVideoList = (currentId)=>{
        let newVideoList= videoListDetail.filter(data => data.id!==currentId);
        setSidebarVideoList(newVideoList)   
    };   
    
    return (
        <Router>
            <div className="body d-flex">
                <div className="col-2 sidebar">
                    <Sidebar />
                </div>
                <Switch>
                    <Route path="/video/:id">
                        <PlayContent videoListDetail={videoListDetail} filterSidebarVideoList={filterSidebarVideoList} sidebarVideoList={sidebarVideoList}/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/setting">
                        <Setting/>
                    </Route>
                    <Route path="/">
                        <VideoList videoListDetail={videoListDetail} filterSidebarVideoList={filterSidebarVideoList}/>
                    </Route>
                </Switch>
            </div>
        </Router>
        )
}
 export default PageRouter;