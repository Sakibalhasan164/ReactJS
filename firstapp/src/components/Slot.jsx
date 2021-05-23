import React from 'react';
import "../newapp.css"

const Check=(props)=>{
       const {a,b,c}=props
    //    if(a===b && b===c && c===a){
    //        return <p style={{fontWeight:"bold"}}>they all match</p>
    //    }else{
    //        return <p style={{fontWeight:"bold"}}>they don't match</p>
    //    }
    //using a turnary oparator
return a===b && b===c && c===a ?<p>They match</p> : <p>They don't match</p>
}




class Slot extends React.Component {
    render() { 
        const {a,b,c} = this.props;
        return (
            <>
            <div className="div">
            <p>{a}</p>
            <p>{b}</p>
            <p>{c}</p>

            <Check a={a} b={b} c={c}/>
            </div>
            </>
          );
    }
}

 
export default Slot;