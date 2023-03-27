import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
function Charts() {
  const data = [
    {
      name2 : "260tr",
      name: "Thứ 2",
      uv: 150,
      
    },
    {
      name: "Thứ 3",
      uv: 30,
     
    },
    {
      name: "Thứ 4",
      uv: 20,
      
    },
    {
      name: "Thứ 5",
      uv: 20,
      
    },
    {
      name: "Thứ 6",
      uv: 10,
    
    },
    {
      name: "Thứ 7",
      uv: 23,
      
    },
    {
      name: "CN",
      uv: 34,
      
    },
  ];

  return (
    <div className="w-[100%] h-[100%] bg-yellowMain">
      <ResponsiveContainer width="100%" aspect={2}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 260]} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;
