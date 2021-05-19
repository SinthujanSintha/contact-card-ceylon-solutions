import React, {useRef} from "react";
import "./search-bar.css"

const SearchBar = (props) => {
    const inputElement = useRef("")
    const getSearchTerm = () => {
        props.searchKeyword(inputElement.current.value)
    }
    return (
        <>
            <div className="search-bar">
                <input type="search" name="search" placeholder="Search Card Here" className="prompt" value={props.term}
                       onChange={getSearchTerm} ref={inputElement} />
                <button className="search-btn" type="submit">
                    <span>Search</span>
                </button>
            </div>
        </>
    )
}

export default SearchBar