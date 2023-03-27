import React from "react";
import Logo from "../../assets/images/insight-05 1.png"
import User from "../../assets/images/user.png"
import Home from "../../assets/images/Vector.png"

import { Link } from "react-router-dom";


function MenuBar() {
  return (
    <div className="">
      <div className=" p-[10px] bg-[#E5E5E5] flex items-center justify-between">
        <div className=" w-[30.5%] flex items-center justify-between">
          <div className="w-[133px] h-[58px]">
            <img className="w-[100%] h-[100%]" src={Logo} alt="" />
          </div>
          <div className="relative">
            <input className="max-w-[300px] py-[5px] px-[16px] bg-[#faeded] outline-none rounded-md" type="text" placeholder="Search..." />
            <i className="fa-solid fa-magnifying-glass absolute top-[50%] right-0 translate-y-[-50%] px-5 py-2 bg-[#faeded] ease-linear duration-200 rounded-tr-md rounded-br-md  hover:bg-[#FFB800]"></i>
          </div>
        </div>
        <div className="flex items-center">
            <div className="">
            <i className="fa-regular fa-envelope text-xl px-5 py-2 hover:bg-[#FFB800] ease-linear duration-200"></i>
            </div>
            <div className="">
            <i className="fa-regular fa-bell text-xl mr-[20px] px-5 py-2 hover:bg-[#FFB800] ease-linear duration-200"></i>
            </div>
            <div className="w-[48px] h-[48px] rounded-[50%]">
                  <img className="w-[100%] h-[100%] rounded-[50%]" src={User} alt="" />
            </div>
        </div>
      </div>
      <div className="w-[15%] bg-[#E5E5E5] h-[100vh] px-[50px]">
          <ul>
            <li>
              <a className="w-[100%]" >
                <img src={Home} alt="" /> Trang chủ
              </a>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li> 
          </ul>
      </div>
    </div>
  );
}

export default MenuBar;
