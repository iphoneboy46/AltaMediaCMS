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
      name: "Thứ 2",
      uv: 4000,
      
    },
    {
      name: "Thứ 3",
      uv: 3000,
     
    },
    {
      name: "Thứ 4",
      uv: 2000,
      
    },
    {
      name: "Thứ 5",
      uv: 2780,
      
    },
    {
      name: "Thứ 6",
      uv: 1890,
    
    },
    {
      name: "Thứ 7",
      uv: 2390,
      
    },
    {
      name: "CN",
      uv: 3490,
      
    },
  ];

  return (
    <div className="w-[100%] h-[100%] bg-yellowMain">
      <ResponsiveContainer width="100%" aspect={5}>
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
          <YAxis dataKey="money" />
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
