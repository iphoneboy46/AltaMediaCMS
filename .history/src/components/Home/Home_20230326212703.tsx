import React from 'react'

function Home() {
  return (
    <div className="w-[80%] bg-[white] p-10">
        <div className="">
            <h1 className="text-[black] text-[36px] font-[700]">Thống kê</h1>
        </div>
        <div>
           <div> <h2 className="text-[black] text-[18px] font-[600]">Doanh thu</h2></div>
           <div>
             <input type="date" value="Tháng 4, 2021" />
           </div>
        </div>
    </div>
  )
}

export default Home