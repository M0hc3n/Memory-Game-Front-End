import React from 'react'

import Card from './Card'

// importing axios
import axios from 'axios'

const { useState, useEffect } = React

function Cards(props) { 
    
    const { icons ,selectedCards, newGame, playerName,
            setSelectedCards,finishedCards, checkCards} = props

    const [moves, setMoves] = useState(0)


    useEffect(() => {
        if(finishedCards.length === 20){
            console.log('WON ! ');
            
            axios.post('http://localhost:5000/api/v1/players', {fullName: playerName, highScore: moves})
        }
    }, [finishedCards])
    
    useEffect(() => {
        setMoves(0)
    }, [newGame])
    

    const handleClick = (id) => {
        if(! finishedCards.includes(id) ){
            switch (selectedCards.length) {
                case 0:
                    setSelectedCards([id])
                    break;
                case 1:
                    if(id !== selectedCards[0]){
                        setSelectedCards(selectedCards.concat(id))
                        checkCards(selectedCards[0], id)
                        setMoves(prev => prev + 1)
                    }
                    break;
                case 2:
                    setSelectedCards([id])                        
                    break;
                default:
                    break;
            }
        }
    }

    const cardsList = icons.map((icon,index) => {
        return (
        <Card key={index} id={index} icon={icon} clicked={selectedCards.includes(index)}
              disabled={finishedCards.includes(index)} handleClick={handleClick}/>

        )
    })

  return (
    <>
        <div className='cards-container'>
            {cardsList}
        </div>
        <div className='game-result'>
            <p>Moves : {moves} </p>
            <p>Left : {10 - finishedCards.length / 2}</p>
        </div>
        {
            finishedCards.length === 20 &&
            <> 
                <div className="winning-statement">
                    Congrats {playerName} ! You did it within {moves} moves !
                </div>
            </>
      }
    </>
  )
}

export default Cards