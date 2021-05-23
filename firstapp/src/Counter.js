import React,{useState} from 'react';
import "./counter.css"


function App(){
    // const state=useState()
    const [num,setNum]=useState(0)
    const [position,setPosition]=useState(100)
    function incNum(){
        if(num<10){
            setNum(num+1)
        }else{setNum(num-10)}
        // console.log(num);
    }
    function incWidth(){
        setPosition(position+10)
    }
    let time=new Date().toTimeString()
    const [theTime,updateTime]=useState(time)

  function getTime(){
        time=new Date().toTimeString()
        updateTime(time) 
  }
  setInterval(getTime,1000)

  let bgColor="lightgreen"
  const [color,setColor]=useState(bgColor)
function cngClr(){
    console.log("color");
    const colors=["pink","yellow","lightblue"]
    let index=Math.floor(Math.random()*4)
    bgColor=colors[index]
    console.log(index);
    setColor(bgColor)
}


return(
    <>
    <h1 style={{width:`${position}px`,background:"pink"}} >{num}</h1>
    <button onClick={incNum} >Click</button> 
    <button onClick={incWidth}>Click</button> 
    
    <div className="timer">
    <h2>{theTime}</h2>
    </div>
    
    <div style={{
        backgroundColor: `${color}`,
        height:"80vh",
        display:'flex',
        justifyContent:"center",
        alignItems:"center"
    }}>
   <button onClick={cngClr} style={{padding:"3px"}}>Change Color</button>
    </div>
    </>
    )
}

export default App;



