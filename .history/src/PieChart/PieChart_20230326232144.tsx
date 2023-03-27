import React from 'react'
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  
];

export const options = {
    
  pieHole: 0.4,
  is3D: false,
};

function PieChart() {
  return (
    <div className='flex items-center'>
         <Chart
      chartType="PieChart"
      width="100%"
      height="500px"
      data={data}
      options={options}
    />

<Chart
      chartType="PieChart"
      width="100%"
      height="500px"
      data={data}
      options={options}
    />
    </div>
  )
}

export default PieChart



