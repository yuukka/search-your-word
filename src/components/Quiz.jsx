// src/components/Quiz.jsx

import React, { useEffect, useState } from 'react'
import QuizCard from './QuizCard'
import { Button } from '@chakra-ui/react';

const Quiz = (props) => {
    let ansOptions = [];
    let ansOptionsID= [];

    // Get the full list of Favorite words by calling airtable API
    useEffect(() => {
        let requestType = 'GET';
        const listOfFav = props.getFavListFunction(requestType);
    }, []); 


    const resetQuiz = () => {
        window.location.reload();
    };

    // Create the quizcard only if the user has saved 3 or more words
    return (
        <>
            <h1>Quiz</h1>   
            {props.fullFavList?.records.length <= 2 ? 
            "You need to add at least 3 words in Favlist to play the quiz!" 
            : 
            <>
            <p>Rules: Select the corresponding Japanees word that match the English word!</p>
            <div className="flex-container">
                {props.fullFavList?.records.map((fav, i) => {
                    if (i <= 2) {
                        ansOptions.push(fav);
                        return (
                        <div className='favCard' key={fav.id} >
                        <QuizCard fav={fav} Number={i+1} ansOptions={ansOptions}></QuizCard>
                        </div>                      
                    )} else {
                        return null;
                    }
           
                })}
                
            </div>
            <Button onClick={resetQuiz}>Reset</Button>
            </>
            }
        </>
    );
}

export default Quiz;