import React, { useState } from "react";
import { Navbar } from "../Navbar/Nav";
import "./Count.css";

export function Count(){

    const [count,setCount] = useState(0);
    return(

      <div>
        <Navbar/>
        <div className="Count_div">
            <h1 className="Count_head1">{count}</h1>
            <div className="btn_div">
            <button onClick={() => setCount(count + 1)} className="Count_btn1">Increment</button>
            <button onClick={() => setCount(count - 1)} className="Count_btn3">Decrement</button>
            <button onClick={() => setCount(count * 0)} className="Count_btn2">Reset</button>
            </div>
        </div>
        </div> 
    )
}