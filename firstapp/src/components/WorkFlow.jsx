import React from 'react';
import Card from "./WebsiteCard"
import "../styles/website.css"
import star from "../images/star.svg"
import chat from "../images/chat.svg"
import doc from "../images/doc.svg"
import head from "../images/head.svg"
import globe from "../images/globe.svg"
import like from "../images/like.svg"

const WorkFlow = () => {
    return (
        <>
    <div className="workflowCard">
        <Card imgSrc={doc}></Card>
        <Card imgSrc={star}></Card>
        <Card imgSrc={chat}></Card>
        <Card imgSrc={head}></Card>
        <Card imgSrc={globe}></Card>
        <Card imgSrc={like}></Card>
        
        </div>
        </>
    );
}

export default WorkFlow;
