import React, { createContext } from 'react';
import CompC from "./ComponentC"
import CompA from "./ComponentA"

const FirstName=createContext()
const LastName=createContext()
const Context=()=>{
    return(
        <>
        <FirstName.Provider value={"sakib"}>
        <LastName.Provider value={"hasan"}>
        <CompC/>
        <CompA/>
        </LastName.Provider>
        
        </FirstName.Provider>   
        </>
    )
}

export default Context;

export {FirstName,LastName};