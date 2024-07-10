import React from "react";
import { Link } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";
import { IoSearch, IoPerson, IoChatbubble } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
      <div className="h-16 w-[100%] bg-blue-600 flex justify-between items-center sticky px-16 top-0 z-50">
        <div className="w-[25%]">
          <span className="text-white font-bold text-2xl ml-5 cursor-pointer">
            <Link to={"/"}>
              SGK<span className="text-black">Media</span>
            </Link>
          </span>
        </div>
        <div className="w-[50%]">
          <div className="w-full h-8 bg-white rounded-full flex items-center">
            <IoSearch size={20} className="text-xl ml-3" />
            <input
              type="text"
              placeholder="Search for friend post or Video"
              className="border-none w-4/5 focus:outline-none ml-2"
            />
          </div>
        </div>
        <div className="w-[25%] flex items-center justify-around text-white gap-5">
          <div>
            <span className="mr-2 text-lg cursor-pointer hover:underline underline-offset-8">
              Home
            </span>
            <span className="mr-2 text-lg cursor-pointer hover:underline underline-offset-8">
              TimeLine
            </span>
          </div>
          <div className="flex items-center">
            <div className="relative mr-4 cursor-pointer">
              <IoPerson size={20} />
              <span
                className="w-4 h-4 bg-red-600 rounded-full text-white absolute top-[-5px] 
              right-0 flex items-center justify-center text-xs"
              >
                1
              </span>
            </div>
            <div className="relative mr-4 cursor-pointer">
              <IoChatbubble size={20} />
              <span
                className="w-4 h-4 bg-red-600 rounded-full text-white absolute top-[-5px] 
              right-0 flex items-center justify-center text-xs"
              >
                2
              </span>
            </div>
            <div className="relative mr-4 cursor-pointer">
              <IoMdNotifications size={20} />
              <span
                className="w-4 h-4 bg-red-600 rounded-full text-white absolute top-[-5px] 
              right-0 flex items-center justify-center text-xs"
              >
                1
              </span>
            </div>
          </div>
          <Link to={"/profile"}>
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="w-9 h-9 rounded-full object-cover cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
