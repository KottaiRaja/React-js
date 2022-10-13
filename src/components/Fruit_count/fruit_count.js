import React, { useState } from "react";
import './fruit.css';
import mango from './mango.png';
import banana from './banana1.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from "../Navbar/Nav";

export function Fruit_count(){
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);
    return(
        <div>
           <Navbar/> 
            <div className="Background">
                
                <div className="box mt-3">
                    <h1 className="head2">Boe ate {count1} mangoes {count2} bananas</h1>
                <div className="row m-auto pt-5">
                    <div className="ml-auto mr-auto">
                        <img src={mango} className="mango_img" /><br/>
                        <button onClick={() => setCount1(count1+1)} className="btn btn-primary mt-4">Eat Mango</button>
                    </div>
                    <div className="ml-auto mr-auto">
                        <img src={banana} className="banana_img" /><br/>
                        <button onClick={() => setCount2(count2+1)} className="btn btn-primary mt-4">Eat Banana</button>
                    </div>
                </div>

                </div>

            </div>
        </div>
    )
}