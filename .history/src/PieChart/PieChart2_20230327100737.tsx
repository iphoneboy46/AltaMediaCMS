import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Vé chưa sử dụng", "Vé đã sử dụng"],
  datasets: [
    {
      label: "# of Votes",
      data: [70, 30],
      backgroundColor: ["#FF8A48", "#4F75FF"],
      borderColor: ["#FF8A48", "#4F75FF"],
      borderWidth: 1,
    },
  ],
};

function PieChartPage2() {
  return (
    <div className="flex items-center justify-center flex-col">
        <div>
        <h1 className="font-[800] text-[18px]">Gói sự kiện</h1>
      </div>
      <div className="">
        <Doughnut data={data} />
      </div>
    
    </div>
  );
}

export default PieChartPage2;
