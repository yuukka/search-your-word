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

// https://v2.chakra-ui.com/docs/components/transitions/usage#collapse-transition

const App = () => {
  const[wordSearch, setWordSearch] = useState('');
  const [wordsData, setWordsData] = useState([]);
  const [displayedWords, setDisplayedWords] = useState([]);
  const [favWord, setFavWord] = useState([]);
  const [fullFavList, setFullFavList] = useState();

  let requestType = '';


  const searchWords = async (seachKeyword) => {
    const callApi = await jotabaSearch(seachKeyword);
    // console.log(callApi);
    setWordsData(callApi);
    // setDisplayedWords(callApi);
    filterResult(callApi)
  };
  
  const filterResult = async(result) => {
    // console.log(result);
    let wordsArray = [];
    for (let i = 0; i < 2; i++) {
      // console.log(result.words[i].senses);

      let obj = {
        reading: {
          kana: result.words[i].reading.kana,
          kanji: result.words[i].reading.kanji,
          furigana: result.words[i].reading.furigana
        },
        senses: [],
        img: ''
      }
 
      let combinedGlosses = [];

      result.words[i].senses.forEach(sense => {
        combinedGlosses = combinedGlosses.concat(sense.glosses); 
      });

      obj.senses.push({
        glosses: combinedGlosses 
      });
      // console.log(combinedGlosses[0])

      
      // const callGifApi = await gifSearch(combinedGlosses[0]);
      
      // obj.img = callGifApi.data[0].embed_url;
    try {
      const callGifApi = await gifSearch(combinedGlosses[0]);
      obj.img = callGifApi?.data?.[0]?.images?.original?.url || '';
    } catch (err) {
      console.error("GIF fetch failed:", err);
    }

      console.log(obj)

      wordsArray.push(obj);

    }
      setDisplayedWords(wordsArray);


    //const callApi = await jotabaSearch(seachKeyword); 
  };

  // useEffect(() => {
  //   console.log("Updated displayedWords:", displayedWords);
  // }, [displayedWords]); 


  // const getFavListFunction = async() => {
  //   let aaa = 'GET';
  //   let requestPayload = null;
  //   fullAirtTableList = await airTableAPI(requestPayload, aaa);
  //   console.log(fullAirtTableList);
  //   setFullFavList(fullAirtTableList);
  // }
  let getFavListFunction = async (type) => {

          let requestPayload = null;
          const fullAirtTableList = await airTableAPI(requestPayload, type);
          // console.log(fullAirtTableList);
          setFullFavList(fullAirtTableList);
  };

  // useEffect(() => {
  //   console.log("Updated favWord:", favWord);
  // }, [favWord]); 

  // useEffect(() => {
  //   console.log("Updated fullFavList:", fullFavList);
  // }, [fullFavList]); 


  return (
    <>

    <div className="main-content">
      <video autoPlay muted loop id="studyDesk">
          <source src={videoSource} />
          Your browser
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

  //<Searchbar searchWords={searchWords} wordSearch={wordSearch} setWordSearch={setWordSearch}></Searchbar>
  //<WordList wordSearch={wordSearch} displayedWords={displayedWords}></WordList>