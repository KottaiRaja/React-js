import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";

export function Navbar(){
    return(

        <div className="Nav">
            <ul className="ulist">

                <Link to='/'><li>Hello World</li></Link>
                <Link to='/Congrats'><li>Congrats_card</li></Link>
                <Link to='/League'><li>League</li></Link>
                <Link to='/Tech-Card'><li>Tech-Card</li></Link>
                <Link to='/Feedback'><li>Feedback</li></Link>
                <Link to='/Fruit_count'><li>Fruit_count</li></Link>
                <Link to='/count'><li>count</li></Link>
                <Link to='/Json'><li>Json</li></Link>
                
            </ul>

        </div>

    )
}