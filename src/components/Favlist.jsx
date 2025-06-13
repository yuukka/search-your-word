// src/components/Favlist.jsx

import React, { useState, useContext, useEffect } from "react";
import Favcard from './Favcard'
import { airTableAPI } from '../api/airTable'


const Favlist = (props) => {

    // Get the full Favorite list from Airtabel when the page loaded
    let requestType = 'GET';
    useEffect(() => {
        props.getFavListFunction(requestType);
    }, []); 

    // Show the list of Favorite word that the user saved previously from the Wordcard (search result)
    return (
        <>
        <h1>Favlist</h1>        
        <div className="flex-container">
            {props.fullFavList?.records.map((fav) => (
                <div className='favCard' key={fav.id} >
                <Favcard fav={fav} getFavListFunction={props.getFavListFunction}/>
                </div>
            ))}
        </div>
        </>

    );
};

export default Favlist;