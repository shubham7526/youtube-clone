import React, { useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import VREPlayer from 'videojs-react-enhanced';
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoId=({url})=>{
    

    return(         
        <video id="my-video"  src={url} controls preload="auto" width="800" height="600" poster="MY_VIDEO_POSTER.jpg" data-setup="{}" autoPlay={true} >
            <source src={url} type="video/mp4" />       
        </video>           
    )   
}

export default VideoId;
