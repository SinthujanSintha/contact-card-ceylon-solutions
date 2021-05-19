import React from "react";
import ReactDOM from "react-dom"
import CardDetails from "../card-details";


it("CardDetails renders without crashing",()=>{
    const div=document.createElement("div")
    ReactDOM.render(<CardDetails/>,div)
})