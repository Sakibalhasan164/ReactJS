import React, { useEffect } from 'react';
import CodeMirror from "react-codemirror"
import "codemirror/lib/codemirror.css"
// import "@uiw/react-codemirror"
import "codemirror/mode/xml/xml"
import "codemirror/mode/css/css"
import "codemirror/mode/javascript/javascript"
import 'codemirror/theme/3024-day.css'
import 'codemirror/theme/3024-night.css'
import 'codemirror/theme/abcdef.css'
import 'codemirror/theme/ambiance.css'
import 'codemirror/theme/ambiance-mobile.css'
import 'codemirror/theme/ayu-dark.css'
import 'codemirror/theme/ayu-mirage.css'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/theme/base16-light.css'
import 'codemirror/theme/bespin.css'
import 'codemirror/theme/blackboard.css'
import 'codemirror/theme/cobalt.css'
import 'codemirror/theme/colorforth.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/theme/duotone-dark.css'
import 'codemirror/theme/duotone-light.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/elegant.css'
import 'codemirror/theme/gruvbox-dark.css'
import 'codemirror/theme/hopscotch.css'
import 'codemirror/theme/icecoder.css'
import 'codemirror/theme/idea.css'
import 'codemirror/theme/isotope.css'
import 'codemirror/theme/lesser-dark.css'
import 'codemirror/theme/liquibyte.css'
import 'codemirror/theme/lucario.css'
import 'codemirror/theme/material-darker.css'
import 'codemirror/theme/material.css'
import 'codemirror/keymap/sublime';
import '../styles/codeMirror.css'
// import {*} from "codemirror/theme"


const Editor = ({name,language,setcode,theme}) => {

  
    let options={
        lineNumbers:true,
        mode:language,
        theme:theme,
        keyMap:"sublime"
    }
    function updateCode(newCode){
        setcode(newCode)
        // console.log(newCode);
    }
    return (
        
        <div className="editor" >
        <h3>{name}</h3>
        <CodeMirror
        options={options}       
        onChange={updateCode}
        />
       </div>
    );
}

export default Editor;
