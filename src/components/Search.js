import React, {useRef} from "react";
import "./SearchBar.css"
const Search = (props) => {
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

export default Search