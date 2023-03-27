import React from 'react'
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 56024],
  ["Eat", 13568],
  
];

export const options = {
    title: "Gói sự kiện",  
  pieHole: 0.4,
  is3D: false,
};

function PieChart() {
  return (
    <div className='flex items-center'>
        <Doughnut data={data} />
    </div>


    </div>
  )
}

export default PieChart



