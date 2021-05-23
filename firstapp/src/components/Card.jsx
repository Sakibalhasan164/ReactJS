import React from "react"
import "../index.css"


//class component
class Card extends React.Component{

render(){
    return(  
        
   <div className="card">
   <img className="img" src={this.props.source} alt={this.props.alt} />
   <h2>{this.props.chnlName}</h2>
   <br></br>
  <p className="catag">{this.props.catag}</p>
   <a href={this.props.link} target="_blank" rel="noopener noreferrer">Visit</a>
   </div>
  
  )
 
}
}

export default Card;