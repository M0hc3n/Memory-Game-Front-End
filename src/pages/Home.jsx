import React , {useState} from 'react'

import {Link } from "react-router-dom"

function Home() {
  const [ playerName, setPlayerName] = useState("")

  const handleChange = (e) => {
    setPlayerName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='main-container home'>
        <h1>Welcome to Memory Game ! </h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="player-name">Who's playing ? </label>
            <input type="text" id='player-name' name='player-name' value={playerName} placeholder='Joe Doe' onChange={handleChange} required />
            <Link to={`/game/${playerName}`} className='new-game-btn'>Let's Play !</Link>
        </form>
    </section>
  )
}

export default Home