// src/components/StarshipList/StarshipList.jsx
import Wordcard from './Wordcard.jsx';

const WordList = (props) => {
    // console.log(props.displayedWords)
// console.log("displayedWords:", props.displayedWords, typeof props.displayedWords);
  return (
    <> 
        <div>🔍: {props.wordSearch}</div>
        <div className="flex-container">
        {props.displayedWords.map((displayedWord) => (
            <div className='card' key={displayedWord.reading.kana + ', '+ displayedWord.senses[0].glosses.join(', ')} >
            <Wordcard displayedWord={displayedWord}/>
            </div>
        ))}
        
        
        </div>
    </>

  );

};

export default WordList;
