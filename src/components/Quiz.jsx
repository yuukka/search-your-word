import React, { useEffect, useState } from 'react'
import QuizCard from './QuizCard'
import { Button } from '@chakra-ui/react';
const Quiz = (props) => {

let ansOptions = [];
let ansOptionsID= [];
//  const filteredFavRecords = props.fullFavList?.records?.slice(0, 3) || [];
//   const ansOptions = filteredFavRecords.map(fav => fav.fields.furigana);
//   const ansOptionsID = filteredFavRecords.map(fav => fav.id);
  useEffect(() => {
    // console.log("Page loaded");
    let requestType = 'GET';
    const listOfFav = props.getFavListFunction(requestType);
  }, []); 


  const resetQuiz = () => {
    window.location.reload();
  };



//   useEffect(() => {
//     console.log(props.fullFavList?.records);

         
//   }, [props.fullFavList]); 
    // const quiz = 3;
    return (
        <>
            <h1>Quiz</h1>   
            {props.fullFavList?.records.length <= 1 ? 
            "You need to add at least 3 words in Favlist to play the quiz!" 
            : 
            <>
            <p>Rules: Select the corresponding Japanees word that match the English word!</p>
            <div className="flex-container">
                {props.fullFavList?.records.map((fav, i) => {
                    if (i <= 2) {
                        ansOptions.push(fav);
                        console.log(ansOptions)
                        // ansOptionsID.push(fav.id)
                        // console.log(ansOptionsID)
                        return (
                        <div className='favCard' key={fav.id} >
                        <QuizCard fav={fav} Number={i+1} ansOptions={ansOptions}></QuizCard>
                        {/* <Favcard fav={fav} getFavListFunction={props.getFavListFunction}/> */}
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