import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
  labels: ['Blue', 'Ogr'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        '#4F75FF',
        '#FF8A48',
        
      ],
      borderColor: [
        '#4F75FF',
        '#FF8A48',
        
      ],
      borderWidth: 1,
    },
  ],
};

function PieChartPage() {
  return (
    <div className='flex items-center'>
       <Doughnut data={data} />
    </div>

  )
}

export default PieChartPage



