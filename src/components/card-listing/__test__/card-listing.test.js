import React from "react";
import ReactDOM from "react-dom"
import CardListing from "../card-listing";


it("renders without crashing",()=>{
    const div=document.createElement("div")
    ReactDOM.render(<CardListing/>,div)
})