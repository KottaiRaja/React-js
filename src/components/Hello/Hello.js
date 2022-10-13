import React from "react";
import './Hello.css';
import { Navbar } from "../Navbar/Nav";

export function Hello(){
    return(
        <div>
            <Navbar/>
            <h1 className="Head">Hello World!</h1>
        </div>
       
    )
}