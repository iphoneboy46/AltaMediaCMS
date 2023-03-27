import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function PieChartPage() {
  return (
    <div className='flex items-center'>
       
    </div>

  )
}

export default PieChartPage



