import { useState } from 'react'
import './App.css'
import { Card, data } from './components/Card.jsx'
import { distance } from "fastest-levenshtein";

function App() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [history, setHistory] = useState([0])
  const [currentPos, setCurrentPos] = useState(0)
  const [guess, setGuess] = useState('')
  const [inputError, setInputError] = useState(false)
  const [streak, setStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)

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
    }
  }

  const handleNext = () => {
    if (currentPos < history.length - 1) {
      setCurrentPos(currentPos + 1);
    } else {
      const newIndex = getRandomIndex();
      if (newIndex === null) return; // No more unseen cards
      setHistory(prev => [...prev, newIndex]);
      setCurrentPos(prev => prev + 1);
    }
    setIsFlipped(false);
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
    .replace(/\s+/g, " ")     
    .trim();
  }

  const isValidGuess = (guess, answer) => {
    const normGuess = normalizeString(guess)
    const normAnswer = normalizeString(answer)
    
    const answerWords = normAnswer.split(" ");
    return answerWords.some(word => distance(normGuess, word) <= 2);
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
      setGuess('')
      // TODO: disable the text input
    } else {
      setStreak(0)
      setInputError(true);
    }
  }

  const handleShuffle = () => {
    // set an alert

    // randomly choose first card
    const allIndices = data.map((_, i) => i);
    setHistory([allIndices[Math.floor(Math.random() * allIndices.length)]])
    setCurrentPos(0)
    setStreak(0)
  }

  return (
    <div className='appContainer'>
      <h1>Name that Dog!</h1>
      <p>Test your knowledge of dog breeds by naming each dog on the flashcards!</p>
      <p> Click the card to flip over when you've made your guess.</p>
      <div className='streakContainer'>
        <p>Longest Streak: {longestStreak}</p>
        <p>Streak: {streak}</p>
      </div>
      <Card 
        index={history[currentPos]} 
        isFlipped={isFlipped} 
        onFlip={handleFlip}>
      </Card>
      <div className='inputContainer'>
        <form onSubmit={handleSubmit}>
          <label>
            <input 
              className={`input ${inputError ? 'inputError' : ''}`} 
              type='text' value={guess} 
              onChange={handleInput}/>
          </label>
          <input type="submit" value="Submit"/>
        </form> 
      </div>
      <div className="buttonContainer">
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
      <div>
        <button
          className="shuffleBtn"
          onClick={handleShuffle}
        />
      </div>
    </div>
  )
}

export default App
