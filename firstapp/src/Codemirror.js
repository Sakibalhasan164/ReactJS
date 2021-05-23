import React, { useState } from 'react';
import Editor from "./components/Editor"
import "./styles/codeMirror.css"
import Themes from "./components/Themes"
import SplitPane from "react-split-pane"


const Codemirror = () => {
     const [html, sethtml] = useState("")
     const [css, setcss] = useState("")
     const [js, setjs] = useState("")
     const [theme, settheme] = useState("dracula")
    return (
        <>
        <Themes settheme={settheme}></Themes>
         
        
       
        <div className="editorWraper">
        
        <Editor 
        language="xml" 
        name="html"
        setcode={sethtml}
        theme={theme}
        /> 

        
        <Editor 
        language="css" 
        name="css"
        setcode={setcss}
        theme={theme}
        />  
        <Editor 
        language="javascript" 
        name="js"
        setcode={setjs}
        theme={theme}
        /> 
        </div> 


        <div className="iframeContainer">
        <iframe 
        srcDoc={`
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<style>${css}</style>
<body>
${html}
</body>
<script>${js}</script>
</html>
        `}
         frameborder="0"
         ></iframe>
</div>
</>
    );
}

export default Codemirror;


