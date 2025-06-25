import { useEffect, useState } from 'react'
import './App.css'
import { Card, data } from './components/Card.jsx'
import { distance } from "fastest-levenshtein";

function App() {
  const allIndices = data.map((_, i) => i);

  const [isFlipped, setIsFlipped] = useState(false)
  const [history, setHistory] = useState([allIndices[Math.floor(Math.random() * allIndices.length)]])
  const [currentPos, setCurrentPos] = useState(0)
  const [guess, setGuess] = useState('')
  const [inputError, setInputError] = useState(false)
  const [inputCorrect, setInputCorrect] = useState(false)
  const [streak, setStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)
  const [isShuffled, setIsShuffled] = useState(false)

  const [guessHistory, setGuessHistory] = useState([''])

  const updateGuessHistory = (index, newValue) => {
        const newItems = [...guessHistory]; // Create a shallow copy of the array
        newItems[index] = newValue; // Modify the copied array
        setGuessHistory(newItems); // Update the state with the new array
  };

  const getRandomIndex = () => {
    const allIndices = data.map((_, i) => i);
    const seen = new Set(history);
    const unseen = allIndices.filter(i => !seen.has(i));
    if (unseen.length === 0) return null;
    return unseen[Math.floor(Math.random() * unseen.length)];
  }

  const handlePrev = () => {
    if (currentPos > 0) {
      setCurrentPos(currentPos - 1);
      setIsFlipped(false);

      setGuess(guessHistory[currentPos - 1])
      setInputCorrect(guessHistory[currentPos - 1] ? true : false)
      setInputError(false)
    }
  }

  const handleNext = () => {
    if (currentPos < history.length - 1) {
      setCurrentPos(currentPos + 1);

      setGuess(guessHistory[currentPos + 1])
      setInputCorrect(guessHistory[currentPos + 1] ? true : false)

    } else {
      const newIndex = getRandomIndex();
      if (newIndex === null) return; // No more unseen cards
      setHistory(prev => [...prev, newIndex]);
      setCurrentPos(currentPos + 1);

      setGuess('');
      setInputCorrect(false);
      setGuessHistory(prev => [...prev, ''])
    }
    setIsFlipped(false);
    setInputError(false)
  }

  const handleFlip = () => setIsFlipped(!isFlipped)
  
  const handleInput = (e) => {
    setGuess(e.target.value)
    setInputError(false);
  }

  const normalizeString = (s) => {
    return s
    .toLowerCase()
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, "")     
    .trim();
  }

  const isValidGuess = (guess, answer) => {
    const normGuess = normalizeString(guess)
    const normAnswer = normalizeString(answer)
    const errorThreshold = Math.round(answer.length * .2)

    // console.log("normGuess: "+normGuess)
    // console.log("normAnswer: "+normAnswer)
    // console.log(errorThreshold)
    return distance(normAnswer, normGuess) <= errorThreshold;
  }
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reset
    // check if valued entered is correct
    const answer = data[history[currentPos]].answer

    if (isValidGuess(guess, answer)) {
      const newStreak = streak + 1
      setStreak(newStreak)
      setLongestStreak(Math.max(newStreak, longestStreak))
      setIsFlipped(true);

      // disable the text input
      setInputCorrect(true);
      updateGuessHistory(currentPos, guess);
      setInputError(false);
    } else {
      setStreak(0)
      setInputError(true);
    }
  }

  const reshuffle = () => {
    // randomly choose first card
    const allIndices = data.map((_, i) => i);
    setHistory([allIndices[Math.floor(Math.random() * allIndices.length)]])
    setCurrentPos(0)
    setStreak(0)
    setIsShuffled(false)
    setGuessHistory([''])
    setInputCorrect(false)
    setInputError(false)
    setGuess('')
  }

  const handleShuffle = () => {
    // set an alert
    setIsShuffled(true)
  }

  return (
    <div className='appContainer'>
      <h1>Name that Dog!</h1>
      <div className='textContainer'>
        <div className='inner'>
          <p>Test your knowledge of dog breeds by naming each dog on the flashcards! <br/>
        Click the card to flip over when you've made your guess.</p>
        </div>
      <div className='streakContainer'>
        <div className='inner'>
          <p>Longest Streak: {longestStreak}</p>
          <p className={`streakLabel ${streak >= 3 ? "onFire" : ""}`}>
            Streak: {streak} {streak >= 3 ? "🔥" : ""}
          </p>
        </div>
      </div>
      </div>
      {isShuffled && <div className="modalOverlay show"></div>}
      <div className={`popup ${isShuffled ? "show" : ""}`}>
        <div className='inner'>
          <p>Reshuffling will reset your current streak. Would you still like reshuffle?</p>
          <div className='popupButtons'>
            <button 
              onClick={() => {setIsShuffled(false)}}
              >
                cancel
            </button>
            <button
              onClick={() => {reshuffle()}}
            >
              continue
            </button>
          </div>
        </div>
      </div>
      <Card 
        index={history[currentPos]} 
        isFlipped={isFlipped} 
        onFlip={handleFlip}>
      </Card>
      <div className='inputContainer'>
        <form onSubmit={handleSubmit}>
          <div className='formContainer'>
            <label>
            <input 
              className={`input ${inputError ? 'inputError' : ''} ${inputCorrect ? 'correct' : ''}`} 
              type='text' value={guess} 
              onChange={handleInput}
              disabled={inputCorrect || isFlipped}
              />
            </label>
            <input className="submitBtn" type="submit" value="Submit" disabled={inputCorrect || isFlipped}/>
          </div>
        </form> 
      </div>
      <div className="controlContainer">
        <div className="buttonContainer">
          <div className='inner'>
            <button 
            className={`button ${ currentPos == 0 ? 'inactive' : ''}`} 
            onClick={handlePrev}
            >
              Prev
          </button>
          <p className="cardCounter">{currentPos + 1}/{data.length} cards</p>
          <button 
            className={`button ${ currentPos == data.length-1 ? 'inactive' : ''}` } 
            onClick={handleNext}
            >
              Next
          </button>
          </div>
        </div>
        <button
            className="shuffleBtn"
            onClick={handleShuffle}
          />
      </div>
    </div>
  )
}

export default App
