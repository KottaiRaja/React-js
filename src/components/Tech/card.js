import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './card1.css';
import HTML from './HTML.png';
import css from './css.png';
import js from './js.png';
import boot from './boot.png';
import { Navbar } from '../Navbar/Nav';


export function Card(){
   return(

    <div>
    <Navbar/>
    <div className='container-fluid Bg text-center'>
            <h1 className='text-center pt-2'>Learn 4.0 Technology</h1>
            <p className='text-center'>Anyone can learn to code, just like anyone can learn a new language. In fact, programming is kind of like speaking a foreign language -- which is exactly why they're called programming languages.</p>
       
        <div className='row outer'>

            <div className='col-lg-5 Tech'>
                <h2 className='text-danger'>HTML</h2>
                <p>The HTML content Attribute is used to given the values that are related to the http-equiv or name attribute. The content attribute can associated with the element.</p>

                <img src={HTML} className='HTML_img pb-3' />

            </div>

            <div className='col-lg-5 Tech css'>
                <h2 className='text-primary'>CSS</h2>
                <p>CSS stands for Cascading Style Sheets
                   CSS describes how HTML elements are to be displayed on screen, paper, or in other media
                   CSS saves a lot of work. It can control the layout of multiple web pages all at once</p>

                <img src={css} className='HTML_img pb-3' />

            </div>

            
            <div className='col-lg-5 Tech js'>
                <h2 className='text-warning'>Javascript</h2>
                <p>The program is executed from a binary format, which was generated from the original program source code. JavaScript is a lightweight interpreted programming language.</p>

                <img src={js} className='HTML_img pb-3' />

            </div>

            <div className='col-lg-5 Tech boot'>
                <h2 className='text-info'>Bootstrap</h2>
                <p>Bootstrap is a free, open source front-end development framework for the creation of websites and web apps.</p>

                <img src={boot} className='HTML_img pb-3' />

            </div>

        </div>  
    </div>   

    </div>   
   )
}