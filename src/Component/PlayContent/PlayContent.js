import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlayContent.css';
import VideoId from '../VideoId/VideoId';
import SidebarRight from '../Sidebar/SidebarRight';

const PlayContent=({videoListDetail,filterSidebarVideoList, sidebarVideoList})=> {
    let params = window.location.pathname.split("/");
    // console.log(params, "========");
    params = params[params.length - 1];
    const [{title, description, url}] = videoListDetail.filter(video => video.id === parseInt(params) )
             
  return (
    <div className="d-flex col">
        <div className="col-9 play-video">
            <VideoId url={url}/>
        </div>
        <div className="col-3 sidebar-right-video">
            <SidebarRight videoListDetail={videoListDetail} filterSidebarVideoList={filterSidebarVideoList} sidebarVideoList={sidebarVideoList} />
        </div>
        
      
    </div>
  )
}

export default PlayContent;

