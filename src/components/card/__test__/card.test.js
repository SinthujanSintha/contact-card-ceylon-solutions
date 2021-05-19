import React from "react";
import ReactDOM from "react-dom"
import Card from "../card";


it("Card renders without crashing",()=>{
    const div=document.createElement("div")
    ReactDOM.render(<Card/>,div)
})