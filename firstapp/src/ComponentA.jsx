import React,{createContext, useContext} from 'react';
import {FirstName,LastName} from "./contextApi"



function CompA(){
    const fName = useContext(FirstName);
    const lName = useContext(LastName)
    return(
        <>
        <h1>Its me from the Component A {fName} {lName}</h1>
        </>
    )
}

export default CompA;