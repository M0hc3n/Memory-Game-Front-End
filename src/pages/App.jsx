import React from 'react'

// importing Game component
import Game from '../Game'

// utility function 
import { shuffle } from '../utils/functions'

// importing a react-router hook
import { useParams } from 'react-router'


const { useState , useEffect } = React

const ICONS = ['🍎','🍎','🍇','🍇', '🍓', '🍓', 
               '🍉', '🍉', '🍌','🍌','🍒', '🍒','🍐','🍐',
               '🍊', '🍊','🍋', '🍋','🍍','🍍' ]

function App() {

  const { name: playerName } = useParams()

  const [icons , setIcons] = useState(shuffle(ICONS))
  const [newGame, setNewGame] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIcons(shuffle(ICONS))
    }, 600);

  }, [newGame])
  

  return (
    <>
      <Game icons={icons} newGame={newGame} playerName={playerName} />
      <button className='new-game-btn' onClick={() => setNewGame(! newGame)}>New Game ! </button>
    </>
  )
}

export default App