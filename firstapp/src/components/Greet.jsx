import React from "react"


//class component
class Greet extends React.Component{
render(){
    let variable=this.props.time
    if(variable >=1 && variable<12){
        return <span style={{color:"green"}}> Good Morning </span>
    }else if(variable >=12 && variable <20){
        return <span style={{color:"red"}}>Good Afternoon</span>
    }else{
        return <span style={{color:"black"}}>Good Night</span>
    }
}

}

export default Greet;