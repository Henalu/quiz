import React, {} from 'react'
import BarChart from '../components/BarChart'
import { eraseResults } from '../helpers/eraseResults'

const Stats = () => {
  var allScores = []
  var scoresData = {}

  if (!localStorage.allScores || JSON.parse(localStorage.allScores).length === 0) {
    allScores = 'There are no scores yet'
  } else {
    allScores = (JSON.parse(localStorage.getItem('allScores')))

    scoresData = {
      labels: allScores.map(data => data.date),
      datasets: [{
        label: "score",
        data: allScores.map(data => data.score),
        backgroundColor: ['#219ebc', '#2a9d8f', '#023047', '#ffb703', '#fb8500']
      }]
    }
  }


  return (
    <div className='stats'>
      <h2 className='title'>All Results</h2>
      {allScores === 'There are no scores yet'
        ? (
          <h3>{allScores}</h3>
        ) : (
          <div className='chart'>
            <BarChart chartData={scoresData} />
            <p>Para borrar los datos actuales e iniciar un nuevo historial pulse <button className='eraseData' onClick={eraseResults}>aquí</button></p>
          </div>
        )
      }

    </div>
  )
}

export default Stats
