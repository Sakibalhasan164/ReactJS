import React from 'react';
import Team from "../images/team.jpg"

const HeroSection = () => {
    return (
        <>
        <div className="hero">
        <div className="HeroIntro">
        <div className="text">
        <h1 className="heroTitle">Landing template for <span className="start">Startups</span> </h1>
        <p className="heroP">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
        </div>
        <div className="buttons">
        <button className="getStarted">Get started</button>
        <button className="github">View on Github</button>
        </div>
        </div>
        <div className="heroImage">
        <img src={Team} alt="Team" />
        </div>
         
        <div className="outro">
        <h1>Build up the whole picture</h1>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</p>
        </div>
        
        </div>
        </>
    );
}

export default HeroSection;
