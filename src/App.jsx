import { useState } from 'react'
import './App.css'
import { Card, data } from './components/Card.jsx'


function App() {
  const [index, setIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const handlePrev = () => {
    if (index >= 1) {
      setIndex(index-1)
      setIsFlipped(false)
    }
  }

  const handleNext = () => {
    if (index < data.length - 1) {
      setIndex(index+1)
      setIsFlipped(false)
    }
  }

  const handleFlip = () => setIsFlipped(!isFlipped)

  return (
    <>
      <h1>Name that Dog!</h1>
      <Card index={index} isFlipped={isFlipped} onFlip={handleFlip}></Card>

      <div className="container">
        <button className={`button ${ index == 0 ? 'inactive' : ''}`} onClick={handlePrev}>Prev</button>
        <p className="cardCounter">{index + 1}/{data.length} cards</p>
        <button className={`button ${ index == data.length-1 ? 'inactive' : ''}` } onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default App
