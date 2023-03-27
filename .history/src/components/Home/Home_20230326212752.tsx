import React from 'react'

function Home() {
  return (
    <div className="w-[80%] bg-[white] p-10">
        <div className="">
            <h1 className="text-[black] text-[36px] font-[700]">Thống kê</h1>
        </div>
        <div className="flex items-center justify-between">
           <div> <h2 className="text-[black] text-[18px] font-[600]">Doanh thu</h2></div>
           <div>
             <input type="date" value="" />
           </div>
        </div>
    </div>
  )
}

export default Home