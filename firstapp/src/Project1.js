import React, { useState, useEffect } from "react"
import "./project1.css"
import Card from "./components/Project1"
import Create from "./components/CreateImg"

const Project=()=>{
   const [images, setimages] = useState([])
   const [term, setterm] = useState("")
   const [searcText, setsearcText] = useState("");
   
   const Exits=()=>{
    return(images.length===0?<h1>No images found</h1>:
        <span></span>)
   }



 useEffect(()=>{
     const fetchData=async()=>
     {
    const url=`https://pixabay.com/api/?key=19633680-19ce03e711dd517feafdda72d&q=${term}&image_type=photo&pretty=true`
    const request=await fetch(url)
    const response=await request.json()
    setimages(response.hits)
  
    }  
    fetchData()

 },[term])
  
function text(e){
    let value=e.target.value
     setsearcText(value)
}
function onSubmit(e){
    e.preventDefault()
setterm(searcText)
}

const [imageUrl, setimageUrl] = useState(null)

return(
<>

<div className="form">
<form  onSubmit={onSubmit}>
<input className="text" type="text" onChange={text} value={searcText}/>
<input type="submit" className="btn" value="Search"/>
</form>
</div>

<Exits></Exits>
{imageUrl && <Create url={imageUrl} setimageUrl={setimageUrl}></Create>}


<div className="wraper">
{
    images.map(image=><Card key={image.id}url={image} setimageUrl={setimageUrl}/>)
}
</div>
</>

)
}
export default Project