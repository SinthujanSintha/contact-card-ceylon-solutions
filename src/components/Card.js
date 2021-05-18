import React from "react";
import {Link} from "react-router-dom";



const Card = (props) => {

    const cards=props.cards
    const renderList = cards.map((card) => {
        const {NAME, PHOTO, DESCRIPTION, PHONE, EMAIL,LOCATION,DOB} = card
        return (

                <div className="col-xs-12 col-sm-6 col-md-4">
                    <Link to={`/card/${PHONE}`}>
                    <div className="image-flip">
                        <div className="mainflip flip-0">
                            <div className="frontside">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <p><img className=" img-fluid"
                                                src={PHOTO}
                                                alt={NAME}/></p>
                                        <h4 className="card-title">{NAME}</h4>
                                        <p className="card-text"><i className="fa fa-phone-square mr-lg-1"/>&nbsp;{PHONE}</p>
                                        <p className="card-text"><i className="fa fa-envelope mr-1"/>&nbsp;{EMAIL}</p>
                                        <p className="card-text"><i className="fa fa-map-marker mr-1"/>&nbsp;{LOCATION}</p>
                                        <p className="card-text"><i className="fa fa-birthday-cake mr-1"/>&nbsp;{DOB}</p>

                                    </div>
                                </div>
                            </div>
                            <div className="backside">
                                <div className="card">
                                    <div className="card-body text-center mt-4">
                                        <h4 className="card-title">{NAME}</h4>
                                        <p className="card-text">{DESCRIPTION}</p>
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank"
                                                   href="https://www.fiverr.com/share/qb8D02">
                                                    <i className="fa fa-facebook"/>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank"
                                                   href="https://www.fiverr.com/share/qb8D02">
                                                    <i className="fa fa-twitter"/>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank"
                                                   href="https://www.fiverr.com/share/qb8D02">
                                                    <i className="fa fa-skype"/>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank"
                                                   href="https://www.fiverr.com/share/qb8D02">
                                                    <i className="fa fa-google"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>

        )
    })

    return (
        <>
            {renderList}
        </>


    )
}

export default Card