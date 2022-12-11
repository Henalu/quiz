import React from 'react'
import { Bar } from 'react-chartjs-2'
//Tenemos que importar de esta manera para que funcione
import { Chart as ChartJS} from 'chart.js/auto'

const BarChart = ({chartData}) => {
  return (
    <Bar data={chartData}/>
  )
}

export default BarChart
