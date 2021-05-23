import React from "react"
import Card from "./components/Card"

import "./index.css"
import data from "./Img&Links";

//if fevTopic is  then show the fevs
// let fevTopic="programming"



function App(){
return(
    <>
    
    <h1 className="title">Youtuber to follow</h1>
    <div className="wraper">
   {data.map(
       (arr)=><Card catag={arr.catagory} key={arr.key}  source={arr.source}  chnlName={arr.chnlName} link={arr.link}  />)
    }
 
    </div>

    </>

)
}

export default App;