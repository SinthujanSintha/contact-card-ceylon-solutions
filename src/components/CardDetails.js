import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom"
import {selectedCardReducer} from "../redux/reducers/cardReducer";
import "./CardDetails.css"
import {selectedCard} from "../redux/actions/cardAction";

const CardDetails = () => {
    const {cardId} = useParams()
    const dispatch = useDispatch()
    console.log(cardId)
    const cards = useSelector((state => state.allCards.cards))
    const card=useSelector((state => state.card))
    const fetchProductDetails = () => {
        const card = cards.find(card => card.PHONE === cardId);
        dispatch(selectedCard(card))
    }
    const {NAME,LOCATION,DOB,PHOTO,DESCRIPTION,PHONE,EMAIL}= card

    useEffect(() => {
        if (cardId && cardId !== "")fetchProductDetails()
    }, [cardId])
    return (<div>
        <div className="row">
            <div className="col-lg-7 mx-auto text-white text-center pt-5">
                <h1 className="display-4">{NAME} Profile Page</h1>
            </div>
        </div>
        <div className="row py-5 px-4">
            <div className="col-xl-4 col-md-6 col-sm-10 mx-auto">
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className="px-4 pt-0 pb-4 bg-dark">
                        <div className="media align-items-end profile-header">
                            <div className="profile mr-3">
                                <img src={PHOTO} alt="..." width="130" className="rounded mb-2 img-thumbnail"/>
                            </div>
                            <div className="media-body mb-5 text-white">
                                <h4 className="mt-0 mb-0">{NAME}</h4>
                                <p className="small mb-4"> <i className="fa fa-map-marker mr-2"/>{LOCATION}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-light  p-4 d-flex justify-content-end text-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mt-5 d-block">{PHONE}</h5><small className="text-muted"> <i className="fa fa-phone-square mr-1"/>Tel-No</small>
                            </li>
                            &nbsp;&nbsp;
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mt-5 d-block">{EMAIL}</h5><small className="text-muted"> <i className="fa fa-envelope mr-1"/>Email</small>
                            </li>
                        </ul>
                    </div>


                    <div className="py-4 bg-light rounded shadow-sm">
                        <h5 className="mb-0 ml-4">About me</h5>
                        <div className="p-4 bg-light rounded shadow-sm">
                            <p className="font-italic mb-0">{DESCRIPTION}</p>
                        </div>
                        <a href="/" className="btn btn-dark btn-sm btn-block">Back To Home</a>
                    </div>
                </div>
            </div>

        </div>

    </div>
)
}

export default CardDetails