import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ContactData} from "../contacts.js";
import {setCard} from "../redux/actions/cardAction"
import Card from "./Card";
import Search from "./Search";

const CardListing = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const cards = useSelector((state => state.allCards.cards))
    const dispatch = useDispatch()
    const fetchCards = () => {
        dispatch(setCard((ContactData)))
    }
    useEffect(() => {
        fetchCards()
    }, [])
    const searchHandler = (searchTerm) => {
        setSearchTerm(searchTerm)
        if(searchTerm !== ""){
            const searchCardList=cards.filter((card)=>{
                return Object.values(card).
                join(" ").
                toLowerCase().
                includes(searchTerm.toLowerCase())
            })
            setSearchResults(searchCardList)
        }
        else{
            setSearchResults(cards)
        }

    }
    return (
        <section id="team" className="pb-5">
            <div className="container">
                <h5 className="section-title h1">Contact Card</h5>
                <Search term={searchTerm}
                        searchKeyword={searchHandler}/>
                <div className="row">
                    <Card cards={searchTerm.length < 1? cards:searchResults}/>
                </div>
            </div>
        </section>

    )
}

export default CardListing