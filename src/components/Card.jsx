import React from "react";
import cards from "../assets/CardDeck.js"
import {useState} from 'react' 

const data = JSON.parse(cards)

const Card = (props) => {
    const { index, isFlipped, onFlip } = props;

    return (
        <div className={`card ${isFlipped ? 'flipped' : ''} ${data[index].difficulty}`} onClick={onFlip}>
            <div className="cardInner">
                <div className="cardFront">
                    <h3>What dog is this?</h3>
                    <div className="imgContainer">
                         <img className="cardImg" src={data[index].img}></img>
                    </div>
                </div>
            
                <div className="cardBack">
                    <h3>That's right!</h3>
                    <p className="cardAnswer">It's a {data[index].answer}</p>
                    <div className="quoteContainer">
                        <div className="quoteInner">
                            <h4>Details:</h4>
                            <p className="cardDescription">{data[index].description}</p>
                            <a className="reference" href={data[index].link}>- {data[index].source}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Card, data };