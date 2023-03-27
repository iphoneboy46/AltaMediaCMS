import React from "react";
import Logo from "../../assets/images/insight-05 1.png"
import User from "../../assets/images/user.png"


function MenuBar() {
  return (
    <div className="">
      <div className="p-[10px] bg-[#E5E5E5] flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-[133px] h-[58px] mr-[100px]">
            <img className="w-[100%] h-[100%]" src={Logo} alt="" />
          </div>
          <div className="relative">
            <input className="w-[300px] py-[5px] px-[16px] bg-[#faeded] outline-none rounded-md" type="text" placeholder="Search..." />
            <i className="fa-solid fa-magnifying-glass absolute top-[50%] right-0 translate-y-[-50%] px-5 py-2 bg-[#faeded] ease-linear duration-200 rounded-tr-md rounded-br-md  hover:bg-[#FFB800]"></i>
          </div>
        </div>
        <div className="flex items-center">
            <div className="">
            <i className="fa-regular fa-envelope text-xl px-5 py-2 hover:bg-[#FFB800]"></i>
            </div>
            <div className="">
            <i className="fa-regular fa-bell text-xl mx-[30px]"></i>
            </div>
            <div className="w-[48px] h-[48px] rounded-[50%]">
                  <img className="w-[100%] h-[100%] rounded-[50%]" src={User} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
