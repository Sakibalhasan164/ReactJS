import React, { useState } from 'react';
import CodeMirror  from "react-codemirror"
import "./styles/codeMirror.css"
import 'codemirror/theme/monokai.css'
import 'codemirror/lib/codemirror.css';
import "codemirror/mode/xml/xml"
import "codemirror/mode/css/css"
import "codemirror/mode/javascript/javascript"


const CodeEditor = () => {
    const [code, setcode] = useState("")
    // const [iframeCode,setiframeCode ]=useState("")
    
    function updateCode(newCode){
         setcode(newCode)
    }
    let options={
        lineNumbers:true,
        theme: 'monokai',
        mode: 'javascript',
        scrollbarStyle: null,
        lineWrapping: true,
    }
    return (
        <div>
            <h1>Codemirror</h1>
            <CodeMirror
            className="editor"
            value={code}
            onChange={updateCode}
            options={options}
            >
            </CodeMirror>
           <iframe srcDoc={
               `<html>
               <script> 
               ${code}
               </script>
               </html>`
           }
           
            height="200" width="300" >        
           </iframe>
            </div>
    );
}

export default CodeEditor;
