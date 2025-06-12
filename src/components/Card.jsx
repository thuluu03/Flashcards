import React from "react";
import cards from "../assets/CardDeck.js"
import {useState} from 'react' 

const data = JSON.parse(cards)

const Card = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => setIsFlipped(!isFlipped);

    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="cardInner">
                <div className="cardFront">
                    <h3>What dog is this?</h3>
                    <div className="imgContainer">
                         <img className="cardImg" src={data[props.index].img}></img>
                    </div>
                </div>
            
                <div className="cardBack">
                    <h3>That's right!</h3>
                    <p>It's a {data[props.index].answer}</p>
                </div>
            </div>
        </div>
    )
}

export { Card, data };