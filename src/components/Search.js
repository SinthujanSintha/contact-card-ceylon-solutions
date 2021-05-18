import React, {useRef} from "react";

const Search =(props)=>{
    const inputElement=useRef("")
    const getSearchTerm=()=>{
        props.searchKeyword(inputElement.current.value)
    }
    return(
        <>
                <input type="text" placeholder="Search Card"
                       ref={inputElement}
                       className="prompt" value={props.term}
                       onChange={getSearchTerm}
                />
                <i className="search icon"/>
        </>
    )
}

export default Search