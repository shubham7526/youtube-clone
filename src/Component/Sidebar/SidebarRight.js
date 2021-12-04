import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoCard from '../VideoId/VideoCard';
import VideoList from '../VideoList/VideoList';

const SidebarRight=({videoListDetail, filterSidebarVideoList, sidebarVideoList })=> {
                      
  return (
    <div className="side-bar-right">
       {
        sidebarVideoList.map(detail => <VideoCard  detail={detail} key={detail.id} filterSidebarVideoList={filterSidebarVideoList} /> )
           } 
    </div>
  )
}

export default SidebarRight;
