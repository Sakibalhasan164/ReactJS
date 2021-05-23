import React,{createContext} from 'react';
import {FirstName,LastName} from "./contextApi"


function ComponentC(){
return(
<>
<FirstName.Consumer>
{(fName)=>{
    return(
        <LastName.Consumer>
    {(lName)=>{
        return <h2>hi {fName} {lName}! You almost Killed me</h2>
    }}
     </LastName.Consumer>
    )
}}
</FirstName.Consumer>
</>
)
}

export default ComponentC;