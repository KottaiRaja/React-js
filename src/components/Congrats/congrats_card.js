import React from "react";
import './card.css';
import profile from './congrats-card-profile-img.png';
import { Navbar } from "../Navbar/Nav";
import watch from './watch.jpg';

export function Congrats(){
    return(
        <div>

        <Navbar />
            <div className="Bg_img">
                <h1>Congratulations</h1>
                <div className="Blue_bg">
                    <img className="profile_img" src={profile} />
                    <h3>Kiran V</h3>
                    <p>Vishnu institute of Computer Education and Technology, Bhimavaram</p>
                    <img src={watch} className="watch_img" />

                </div>
            </div>
        </div>
    )
}
