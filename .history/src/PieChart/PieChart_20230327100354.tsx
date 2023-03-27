import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Org", "Blue"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["#FF8A48", "#4F75FF"],
      borderColor: ["#FF8A48", "#4F75FF"],
      borderWidth: 1,
    },
  ],
};

function PieChartPage() {
  return (
    <div className="">
        <div>
        <h1 className="font-[800] text-[18px]">Gói gia đình</h1>
      </div>
      <div className="">
        <Doughnut data={data} />
      </div>
    
    </div>
  );
}

export default PieChartPage;
