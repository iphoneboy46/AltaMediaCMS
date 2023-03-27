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
    <div className="flex items-center">
      <div>
        <h1>Gói gia đình</h1>
      </div>
      <Doughnut data={data} />
    </div>
  );
}

export default PieChartPage;
