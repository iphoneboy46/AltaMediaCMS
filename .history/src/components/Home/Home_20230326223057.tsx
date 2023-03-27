import React from 'react'
import Charts from '../Charts/Charts'

function Home() {
  return (
    <div className="w-[80%] bg-[white] p-10">
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
    </div>
  )
}

export default Home