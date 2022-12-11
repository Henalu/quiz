import React, { useState, useEffect, useContext } from 'react'
import Results from './Results'
import FullGameContext from '../context/FullGame'
import Timer from './Timer'
import { countScore } from '../helpers/countScore'

const Game = () => {

  const [fullGame, questions, badAnwers, goodAnswers, allAnswers, userAnswers, setUserAnswers] = useContext(FullGameContext)
  const [contador, setContador] = useState(0)
  const [score, setScore] = useState(0)

  // Pasamos a la siguiente pregunta
  const nextQuestion = (e) => {
    setContador(contador + 1)

    // Recogemos las respuestas del usuario y las guardamos en el context. Si se pasa el tiempo del temporizador se guarda un error
    if (!e) {
      let array = []
      // recogemos lo que ya habia en respuestas
      userAnswers.forEach(element => {
        array.push(element)
      });
      // le añadimos la respuesta nueva
      array.push('out of time')

      // guardamos las respuestas antiguas y las nuevas
      setUserAnswers(array)
    } else if (userAnswers.length === 0) {
      let array = [e.target.value]
      setUserAnswers(array)
    } else {
      let array = []
      // recogemos lo que ya habia en respuestas
      userAnswers.forEach(element => {
        array.push(element)
      });
      // le añadimos la respuesta nueva
      array.push(e.target.value)

      // guardamos las respuestas antiguas y las nuevas
      setUserAnswers(array)
    }

    // Importamos la funcion de los helpers
    countScore(contador, userAnswers, goodAnswers, setScore)
  }

  return (
    <div className='game'>
      {contador < 10
        ? (
          <div className='theGame'>
            <Timer nextQuestion={nextQuestion} />
            <h2 className='question'>{questions[contador]}</h2>

            <ul className='options'>
              {
                allAnswers[contador].map((option, i) => {
                  return (<li key={i}><button className='option' value={option} onClick={e => nextQuestion(e)}>{option}</button></li>)
                })
              }
            </ul>
          </div>
        )
        : <Results score={score} />
      }
    </div>
  )
}

export default Game
