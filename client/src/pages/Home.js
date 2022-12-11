import React, { useState } from 'react'
import Animation from '../components/Animation'
import Game from '../components/Game'

const Home = () => {

  // Vistas
  const [viewHome, setViewHome] = useState(true)

  // Para cambiar los estados del boton de jugar
  const [play, setPlay] = useState('Go Play')
  const [buttonGoPlay, setButtonGoPlay] = useState('buttonGoPlay')


  const goToGame = e => {
    if (play === 'Go Play') {
      setPlay('Here we Go')
      setButtonGoPlay('buttonHereWeGo')

      // Animaciones y transicion al juego
      setTimeout(() => {
        setPlay('Get Ready!!!')
      }, 1000);

      setTimeout(() => {
        setViewHome(false)
      }, 2500);

    } else {
      setPlay('Go Play')
      setButtonGoPlay('buttonGoPlay')
    }
  }


  return (
    <div>
      {/* Home */}

      {viewHome
        ?
        (<section className='main'>
          <button className={buttonGoPlay} onClick={e => goToGame(e)}>{play}</button>
          <Animation />
        </section>)
        : <Game className='game' />
        
      }


    </div >
  )
}

export default Home
