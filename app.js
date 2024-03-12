import React from "react";
import  ReactDOM  from "react-dom/client";

const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"Hi i am a h1 tag"),
React.createElement("h2",{},"Hi i am a h2 tag")]),React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"Hi i am a h1 tag"),
React.createElement("h2",{},"Hi i am a h2 tag")])]);

console.log(parent);

    const root=ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(parent); 