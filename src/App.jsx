import { useState } from 'react'
import './App.css'
import { Card, data } from './components/Card.jsx'


function App() {
  const [index, setIndex] = useState(0)

  const handlePrev = () => {
    if (index >= 1) {
      setIndex(index-1)
    }
  }

  const handleNext = () => {
    if (index < data.length - 1) {
      setIndex(index+1)
    }
  }

  return (
    <>
      <h1>Name that Dog!</h1>
      <Card index={index}></Card>

      <div className="container">
        <button className={`button ${ index == 0 ? 'inactive' : ''}`}onClick={handlePrev}>Prev</button>
        <button className={`button ${ index == data.length-1 ? 'inactive' : ''}` }onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default App
