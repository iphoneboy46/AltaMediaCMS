import React from 'react'
import Charts from '../Charts/Charts'
import PieChart from '../../PieChart/PieChart'
import PieChart2 from '../../PieChart/PieChart2'
import "./Home.css"

function Home() {
  return (
    <div className="w-[80%] bg-[white] p-10 absolute top-20 left-[15%] h-[100vh]">
        <div className="">
            <h1 className="text-[black] text-[36px] font-[700]">Thống kê</h1>
        </div>
        <div className="flex items-center justify-between mt-[50px] mb-[20px]">
           <div> <h2 className="text-[black] text-[18px] font-[600]">Doanh thu</h2></div>
           <div>
             <input className="" type="date" value="" />
           </div>
        </div>
        <Charts />
        <div className="mt-[50px]">
          <h3 className="text-[14px] font-[500]">Tổng doanh thu theo tuần</h3>
          <div className="flex items-center"><h1 className="text-[24px] font-[700] mr-2">525.145.000</h1> <p className="text-[14px] font-[600]">đồng</p></div>
        </div>
        <div className="flex items-start p-10 justify-between relative">
          <div className="flex-1">
            <input type="date" value="2018-07-22" />
          </div>
          <div className="flex-1">
            <PieChart />
          </div>
          <div className="flex-1">
            <PieChart2 />
          </div>
          <div className="flex-1 relative h-[200px]">
              <div className="absolute top-[10%] right-0">
                <div className="flex items-center mb-5">
                  <span className="block w-[50px] h-[20px] bg-[#4F75FF] mr-2"></span> <h2 className="text-[14px] font-[400]">Vé đã sử dụng</h2>
                </div>
                <div className="flex items-center">
                  <span className="block w-[50px] h-[20px] bg-[#FF8A48] mr-2"></span> <h2>Vé chưa sử dụng</h2>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Home