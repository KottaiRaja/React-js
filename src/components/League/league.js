import React from "react";
import './league.css';
import rcb from './rcb.jpg';
import csk from './csk.jpg';
import { Navbar } from "../Navbar/Nav";

export function League(){
    return(
        <div>
            <Navbar/>
        <div className="Black_bg">
            <h1 className="Head_con">Super Over League</h1>
            <div className="img_com">
                <img src={rcb} className="rcb_img" />
                <img src={csk} className="csk_img" />
            </div>

        </div>
        </div>
    )
    }