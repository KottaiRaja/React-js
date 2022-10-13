import React from "react";
import './Feedback.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceMeh,faFaceSadCry, faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Nav";

export function Feedback(){
    return(
        <div>
            <Navbar/>
        <div className="bg-warning BG p-5 w-50 ml-auto mr-auto mt-5 rounded">
            <div className="pt-3 text-center bg-white pb-4 rounded">
                <h2>How satisfied are you with our customer support performance?</h2>
                <div className="Emojis m-auto pt-5">
                    <Link to='/Thanks'><FontAwesomeIcon icon={faFaceSmile} className="smile ml-1 display-1" /></Link> 
                    <Link to='/Thanks'><FontAwesomeIcon icon={faFaceSadCry} className="sad ml-lg-5 ml-md-3 ml-sm-2 display-1" /></Link>
                    <Link to='/Thanks'><FontAwesomeIcon icon={faFaceMeh} className="blank ml-lg-5 ml-md-3 ml-sm-2 display-1" /></Link>
                </div>
            </div>
        </div>
        </div>
    )
}