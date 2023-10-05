/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import './Cards.css'

const Cards = () => {

    const [cards, setCards] = useState([])
    const [selectedCards, setSelectedCards] = useState([])

    useEffect(() => {
        fetch('card.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    function handleClicked(card){
        setSelectedCards([...selectedCards, card])
    }

    console.log(selectedCards);

    return (
        <div>
            <div className="body-container">
                <div className="cards-container">
                    {
                        cards.map(card => <Card 
                            key={card.id} 
                            card={card}
                            handleClicked = {handleClicked}
                        ></Card>)
                    }
                </div>
                <div>
                    <h4>Credit Hour Remaining 7 hr</h4>
                    <hr />
                    <h3>Course Name</h3>
                    <ol>
                        {
                            selectedCards.map(card => (
                                <li>{card.name}</li>
                            ))
                        }
                    </ol>
                    <hr />
                    <p>Total Credit Hour: 13</p>
                    <hr />
                    <p>Total Price: 4800 USD</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;