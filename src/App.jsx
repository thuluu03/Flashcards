import { useState } from 'react'
import './App.css'
import { Card, data } from './components/Card.jsx'


function App() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [history, setHistory] = useState([0])
  const [currentPos, setCurrentPos] = useState(0)

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

  return (
    <div className='appContainer'>
      <h1>Name that Dog!</h1>
      <p>Test your knowledge of dog breeks by naming each dog on the flashcards!</p>
      <p> Click the card to flip over when you've made your guess.</p>
      <Card index={history[currentPos]} isFlipped={isFlipped} onFlip={handleFlip}></Card>
      <div className="buttonContainer">
        <button className={`button ${ currentPos == 0 ? 'inactive' : ''}`} onClick={handlePrev}>Prev</button>
        <p className="cardCounter">{currentPos + 1}/{data.length} cards</p>
        <button className={`button ${ currentPos == data.length-1 ? 'inactive' : ''}` } onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default App
