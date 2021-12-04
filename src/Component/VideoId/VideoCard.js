import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import './VideoCard.css';

const VideoCard=({detail, filterSidebarVideoList})=>{
    
    const { title, description, id, thumbnail }= detail;   
    let history = useHistory()
    const changePath = (id) => {
        const currentId = id;
        filterSidebarVideoList(currentId);

        const location = {
            pathname: `/video/${id}`,
        }
        
        history.push(location)
        
        console.log(filterSidebarVideoList, id, "videocard")
    }


    return(
        <div className= "video-card" onClick={() => changePath(id)}>
            <Card style={{ width: "16.5rem" }}>               
                <Card.Img variant="top" src={thumbnail} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description} </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default VideoCard;