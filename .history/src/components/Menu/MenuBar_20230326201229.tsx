import React from "react";
import Logo from "../../assets/images/insight-05 1.png"

function MenuBar() {
  return (
    <div className="">
      <div className="p-[10px] bg-[#E5E5E5]">
        <div className="flex items-center  justify-between">
          <div className="w-[133px] h-[58px] mr-[50px]">
            <img className="w-[100%] h-[100%]" src={Logo} alt="" />
          </div>
          <div className="">
            <input className="w-[80%] py-[10px] px-[16px]" type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
