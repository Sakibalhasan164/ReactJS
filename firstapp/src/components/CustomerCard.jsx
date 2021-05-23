import React from 'react';
import "../styles/website.css"

const CustomerCard = ({author}) => {
    return (
        <>
         <div className="customerCard">
         <div className="review">
         <p>— Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.</p>
         </div>
         
         <div className="line"></div>
         <div className="author">
         <h3>{author}/<span>AppName</span></h3>
         </div>
         </div>
        </>
    );
}

export default CustomerCard;
