import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoCard from '../VideoId/VideoCard'
import './VideoList.css';

const VideoList=({videoListDetail, filterSidebarVideoList })=>{
    
    return(
        <div className="video-list">
           {
               videoListDetail.map(detail => <VideoCard  detail={detail} key={detail.id} filterSidebarVideoList={filterSidebarVideoList} /> )
           }            
        </div>
    )
    
}

export default VideoList;