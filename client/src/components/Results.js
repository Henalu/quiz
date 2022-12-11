import React, { useEffect, useState, useContext } from 'react'
import FullGameContext from '../context/FullGame'

const Results = ({score}) => {

  const [fullGame, questions, badAnwers, goodAnswers, allAnswers, userAnswers, setUserAnswers] = useContext(FullGameContext)

  const [resultColor, setResultColor] = useState('')

  useEffect(() => {
    scoreColor()
  }, [])

  const scoreColor = () => {
    let color = ''
    if (score === 0) {
      color = 'horrible'
    } else if (score > 0 && score < 3) {
      color = 'terrible'
    } else if (score > 2 && score < 5) {
      color = 'bad'
    } else if (score > 4 && score < 7) {
      color = 'good'
    } else if (score > 6 && score < 10) {
      color = 'veryGood'
    } else if (score === 10) {
      color = 'perfect'
    }

    return (setResultColor(color))
  }

  return (
    <section className='results'>
      {
        <div className='results'>
          <h2 className='finalResult'>Score</h2>
          <h2 id='total' className={resultColor}>{score}/10</h2>
          <div className='colorIndex'>
            <div className='correct'>Correct Answer</div>
            <div className='incorrect'>Incorrect Answer</div>
            <div className='solution'>Solution</div>
          </div>

          <div className='evaluation'>
            <ul className='allResults'>
              {questions.map((question, i) => {
                return (
                  <li key={i} className='resultsOption'>
                    <h2 className='allQuestions'>{question}</h2>
                    {allAnswers[i].map((option, index) => {
                      if (option === userAnswers[i] && option === goodAnswers[i]) {
                        return <p className='allAnswers correct' key={index}>{option}</p>
                      } else if ((option === userAnswers[i] && option !== goodAnswers[i])) {
                        return <p className='allAnswers incorrect' key={index}>{option}</p>
                      }else if(option !== userAnswers[i] && option === goodAnswers[i]){
                        return <p className='allAnswers solution' key={index}>{option}</p>
                      } else {
                        return <p className='allAnswers' key={index}>{option}</p>
                      }
                    })}
                  </li>
                )
              })}
            </ul>

          </div>
        </div>

      }
    </section>
  )
}

export default Results
