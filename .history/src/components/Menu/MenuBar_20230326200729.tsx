import React from "react";
import Logo from "../../assets/images/insight-05 1.png"

function MenuBar() {
  return (
    <div className="">
      <div className="p-[10px] bg-[#E5E5E5]">
        <div className="w-[133px] h-[58px]">
          <img className="w-[100%] h-[100%]" src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
