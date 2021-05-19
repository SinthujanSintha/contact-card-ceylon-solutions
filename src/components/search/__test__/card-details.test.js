import React from "react";
import ReactDOM from "react-dom"
import SearchBar from "../search-bar";


it("CardDetails renders without crashing",()=>{
    const div=document.createElement("div")
    ReactDOM.render(<SearchBar/>,div)
})