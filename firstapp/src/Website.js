import React from 'react';
import Nav from "./components/WebiteNav"
import HeroSection from "./components/HeroSection"
import Workflow from "./components/WorkFlow"
import Customers from "./components/Customers"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Fotter"

import "./styles/website.css"

const Website = () => {
    return (
        <>
    
        <div className="Main-wraper">
        <Nav></Nav>
        <HeroSection></HeroSection>
        <Workflow></Workflow>
        <div className="line"></div>
        <Customers></Customers>
        <ContactForm></ContactForm>
        <Footer></Footer>
        </div>
        </>
    );
}

export default Website;
