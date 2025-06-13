// src/App.jsx

import React, { useEffect, useState, createContext } from 'react'
import './App.css'
import { Input } from '@chakra-ui/react'
import Searchbar from './components/Searchbar'
import { jotabaSearch } from './api/jotabaSearch'
import { airTableAPI } from './api/airTable'
import WordList from './components/WordList'
import NavBar from './components/Navbar'
import Favlist from './components/Favlist'
import { Routes, Route } from 'react-router'
import { gifSearch } from './api/gifSearch'
import Quiz from './components/Quiz'
import videoSource from './media/study_desk.mov'; 

export const FavContext = createContext();

const App = () => {
  const[wordSearch, setWordSearch] = useState('');
  const [wordsData, setWordsData] = useState([]);
  const [displayedWords, setDisplayedWords] = useState([]);
  const [favWord, setFavWord] = useState([]);
  const [fullFavList, setFullFavList] = useState();
  let requestType = '';


  // Call jotaba api/ pass the keyword that the user wish to search
  const searchWords = async (seachKeyword) => {
    const callApi = await jotabaSearch(seachKeyword);
 
    setWordsData(callApi);
    filterResult(callApi)
  };
  
  // After getting the response from jotaba, format the result in a way that would be easier to show on the Wordcard (Search result)
  const filterResult = async(result) => { 
    let wordsArray = [];
    
    for (let i = 0; i < 2; i++) {
      let obj = {
        reading: {
          kana: result.words[i].reading.kana,
          kanji: result.words[i].reading.kanji,
          furigana: result.words[i].reading.furigana
        },
        senses: [],
        img: ''
      }
      
      // concatinate as the English translation may returned in multilple arrays
      let combinedGlosses = [];
      result.words[i].senses.forEach(sense => {
        combinedGlosses = combinedGlosses.concat(sense.glosses); 
      });

      obj.senses.push({
        glosses: combinedGlosses 
      });

      // Call the GIF api based on the first English keyword
      try {
        const callGifApi = await gifSearch(combinedGlosses[0]);
        obj.img = callGifApi?.data?.[0]?.images?.original?.url || '';
      } catch (err) {
        console.error("GIF fetch failed:", err);
      }

      wordsArray.push(obj);

    }
      setDisplayedWords(wordsArray);

  };

  // Get the full list of "Favorite Words" that the user saved
  let getFavListFunction = async (type) => {
    let requestPayload = null;
    const fullAirtTableList = await airTableAPI(requestPayload, type);

    setFullFavList(fullAirtTableList);
  };

  return (
    <>
    <div className="main-content">
      <video autoPlay muted loop id="studyDesk" style={{ pointerEvents: 'none', touchAction: 'none' }} >
          <source src={videoSource} />
          Your browser does not support the video tag.
      </video>
        <h1>えいやくじしょ</h1>
        <NavBar></NavBar>
        <FavContext.Provider value={{ setFavWord, requestType }}>
          <Routes>
            <Route 
              path='/' 
              element={
                <> 
                  <Searchbar searchWords={searchWords} wordSearch={wordSearch} setWordSearch={setWordSearch}></Searchbar>
                  <WordList wordSearch={wordSearch} displayedWords={displayedWords} setFavWord={setFavWord}></WordList>
                </>
            }/>
            <Route path='/favlist' element={<Favlist getFavListFunction={getFavListFunction} fullFavList={fullFavList}></Favlist>}></Route>
            <Route path='/quiz' element={<Quiz getFavListFunction={getFavListFunction} fullFavList={fullFavList}></Quiz>}></Route>
          </Routes>
        </FavContext.Provider>      
     </div>
    </>
  )
};

export default App;