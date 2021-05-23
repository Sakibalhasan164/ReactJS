import React from 'react';



const Card=(prop)=>{
    //  console.log(prop)


    
    // console.log(prop.url);
    return(
      
<>          
<div className="card" onClick={onclick}>
<img className="img" src={prop.url.webformatURL} alt="" onClick={()=>prop.setimageUrl(prop.url.webformatURL)}/> 
<div className="info">
<h2 className="name">{prop.url.user}</h2>
<p className="views">Views: {prop.url.views}</p>
<p className="Downloads">Downloads: {prop.url.downloads}</p>
</div>
</div>
</>
)
}

export default Card;