import React, { useEffect } from 'react'

import Cards from './components/Cards'

const { useState } = React


function Game(props) {
  const {icons, newGame, playerName } = props

  const [selectedCards, setSelectedCards] = useState([])
  const [finishedCards, setFinishedCards] = useState([])


  useEffect(()=>{

    setFinishedCards([])
    setSelectedCards([])
    
  },[newGame])


  const checkCards = (first, second) => {
    if(first !== second && icons[first] === icons[second]){
      setFinishedCards([...finishedCards, first, second])
    } else{
      setTimeout(() => {
        setSelectedCards([])
      }, 600);
    }
  }

  return (
    <section className='main-container'>
      <h1>Have Fun !</h1>
      <Cards icons={icons} 
             selectedCards={selectedCards} 
             setSelectedCards={setSelectedCards}
             finishedCards={finishedCards}
             setFinishedCards={setFinishedCards}
             checkCards={checkCards}
             newGame={newGame}
             playerName={playerName}/>
    </section>
  )
}

export default Game