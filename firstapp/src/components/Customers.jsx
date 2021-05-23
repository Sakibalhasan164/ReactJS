import React from 'react';
import CustomerCard from "./CustomerCard"
import "../styles/website.css"


const Customers = () => {
    return (
        <>
        <div className="customers">
        <div className="intro">
        <h1>Customer testimonials</h1>
        <p>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
        </div>
        <div className="reviews">
        <CustomerCard author="Roman Level"></CustomerCard>
        <CustomerCard author="Ben Stafford"></CustomerCard>
        <CustomerCard author="Sakib Hasan"></CustomerCard>
        </div>
        </div>
        </>
    );
}

export default Customers;
