import React from 'react'
import Charts from '../Charts/Charts'

function Home() {
  return (
    <div className="w-[80%] bg-[white] p-10 absolute top-20 left-0">
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
    </div>
  )
}

export default Home