import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from "./components/Home"
import About from "./components/About"
import ErrorComp from "./components/Error"
import User from "./components/User"
import Search from "./components/Search"

const Router=()=>{
    return(
     <>
     <Switch>
      <Route exact path="/" 
      render={()=><Home 
        name="Home"></Home>}/>
      <Route exact path="/about" 
      render={()=><About 
        name="About"></About>} />
        <Route exact path="/search" component={Search}></Route>
      <Route exact path="/user/:name" component={User}></Route>
      
      <Route render={ErrorComp}></Route>
      </Switch>   
     </>
   )
}

export default Router;
    