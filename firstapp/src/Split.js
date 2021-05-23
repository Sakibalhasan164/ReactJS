import React from 'react';
import SplitPane from "react-split-pane"
import "./split.css"


const Split = () => {
    return (
        <SplitPane split="horizontal" minSize={"50%"}>
        <div>Part 1</div>
        <div>Part 2</div>
        </SplitPane>
    );
}

export default Split;
