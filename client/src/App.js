import React, { useState, useEffect } from 'react'
import Menu from "./components/Menu";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./router/MainRoutes";
import { ProviderFullgame } from './context/FullGame'


function App() {
  const [fullGame, setFullGame] = useState([])
  const [questions, setQuestions] = useState([])
  const [allAnswers, setAllAnswers] = useState([])
  const [badAnwers, setBadAnwers] = useState([])
  const [goodAnswers, setGoodAnswers] = useState([])
  const [userAnswers, setUserAnswers] = useState([])

  useEffect(() => {
    getGame()
  }, [])

  // Cargamos la partida con getGame. => game contiene toda la info de la partida
  const getGame = () => {
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple')
      .then(res => res.json())
      .then(api => {
        let game = api.results
        setFullGame(game)
        return game
      })
      .then(game => {
        let answers = []
        let incorrectAnwers = []
        let correctAnwers = []

        game.map(element => {
          let arrayAllAswers = []
          let getIncorrectAnswers = []

          // Recorremos todas las respuestas incorrectas para sacarlas de una en una a un array
          element.incorrect_answers.forEach(element => {
            getIncorrectAnswers.push(element)
            arrayAllAswers.push(element)
          });
          arrayAllAswers.push(element.correct_answer)
          
          // Recogemos las respuestas incorrectas, las correctas y un array con todas juntas
          correctAnwers.push(element.correct_answer)
          incorrectAnwers.push(getIncorrectAnswers)
          // Randomizamos las respuestas para que aparezcan desordenadas: para ello las he ordenado alfabeticamente y despues las guardo en context
          arrayAllAswers = arrayAllAswers.sort()
          answers.push(arrayAllAswers)
        })  

        //Recogemos todas las preguntas del juego
        let allQuestions = []
        game.map(element => {
          allQuestions.push(element.question)
        })
        return (setBadAnwers(incorrectAnwers), setGoodAnswers(correctAnwers), setQuestions(allQuestions), setAllAnswers(answers))
      })
  }

  return (
    <BrowserRouter>
      <ProviderFullgame value={[fullGame, questions, badAnwers, goodAnswers, allAnswers, userAnswers, setUserAnswers]}>
        <Menu />
        <MainRoutes />
      </ProviderFullgame>
    </BrowserRouter >

  );
}

export default App;
