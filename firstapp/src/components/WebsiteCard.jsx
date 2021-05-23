import React from 'react';
import "../styles/website.css"

const WebsiteCard = ({imgSrc}) => {
    return (
        <>
         <div className="card">
         <div className="card-img">
         <img src={imgSrc} alt="workflow"/>
         </div>         
         <div className="title">
         <h1 className="workFlowTitle">Robust Workflow</h1>
         </div>
         <div className="workflowBody">
         <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
         </div>
         </div>   
        </>
    );
}

export default WebsiteCard;
