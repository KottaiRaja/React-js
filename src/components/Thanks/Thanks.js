import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';

export function Thanks(){
    return(
        <div className='ml-auto mr-auto text-center bg-danger w-50 p-5 mt-5 rounded'>
            <div className='bg-white p-5 rounded'>
                <FontAwesomeIcon icon={faHeart} className="display-1 text-danger" />
                <h1>Thank You!</h1>
                <p>We will use your feedback to improve our customer support performance.</p>
            </div>
        </div>
    )
}