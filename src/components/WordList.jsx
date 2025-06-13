// src/components/Wordlist.jsx

import Wordcard from './Wordcard.jsx';


const WordList = (props) => {

  // Show the list of seached words, pass the details to the child component (Wordcard)
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
