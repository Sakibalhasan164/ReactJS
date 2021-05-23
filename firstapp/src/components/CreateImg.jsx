import React from 'react';
import "../project1.css"

function Create(prop){
return(
    <div className="container" onClick={(e)=>{prop.setimageUrl(null)}
    
    }>
    <img src={prop.url} alt="Image"/>    
    </div>
)
}

export default Create;