import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

export function Json(){
    const[details,setDetails]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response)=>response.json())
        .then((data)=>{
            setDetails(data)
        })
    },[])
    return(
        <div>
            <div className="container">
                {details.map((value,index)=>(
                    <div className="row">
                        <div className="card col-lg-4 p-4 mt-3 bg-warning text-primary">
                            <p>{value.title}</p>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}