import React from "react";
import Logo from "../../assets/images/insight-05 1.png"

function MenuBar() {
  return (
    <div className="">
      <div className="p-[10px] bg-[#E5E5E5]">
        <div className="flex items-center">
          <div className="w-[133px] h-[58px] mr-[100px]">
            <img className="w-[100%] h-[100%]" src={Logo} alt="" />
          </div>
          <div className="">
            <input className="w-[300px] py-[5px] px-[16px] bg-[#faeded]" type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
