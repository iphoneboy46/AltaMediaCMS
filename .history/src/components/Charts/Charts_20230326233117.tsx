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
     
      uv: 145,
      
    },
    {
      name: "Thứ 3",
      uv: 170,
     
    },
    {
      name: "Thứ 4",
      uv: 160,
      
    },
    {
      name: "Thứ 5",
      uv: 220,
      
    },
    {
      name: "Thứ 6",
      uv: 180,
    
    },
    {
      name: "Thứ 7",
      uv: 160,
      
    },
    {
      name: "CN",
      uv: 190,
      
    },
  ];

  return (
    <div className="w-[100%] ">
      <ResponsiveContainer width="100%" aspect={5}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis   dataKey="name" />
          <YAxis dataKey="label" type="number" domain={[140,260]}  allowDataOverflow={true} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#FF9100"
            fill="#FAB963"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;
