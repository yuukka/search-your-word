import React, { useState, useContext, useEffect } from "react";
import Favcard from './Favcard'
import { airTableAPI } from '../api/airTable'

const Favlist = (props) => {
    // const[wordSearch, setWordSearch] = useState('');

    let requestType = 'GET';
    // let getFavListFunction = async (type) => {

    //         let requestPayload = null;
    //         const fullAirtTableList = await airTableAPI(requestPayload, type);
    //         console.log(fullAirtTableList);
    //         setFullFavList(fullAirtTableList);
    // };

    useEffect(() => {
        props.getFavListFunction(requestType);
    }, []); 

        // console.log(props.fullFavList);
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