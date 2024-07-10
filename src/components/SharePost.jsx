import React from "react";
import { MdPermMedia } from "react-icons/md";
import { BiSolidLabel } from "react-icons/bi";
import { MdEmojiEmotions } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const SharePost = () => {
  return (
    <div className="w-full h-[150px] rounded-[10px] shadow-md">
      <div className="p-2.5">
        <div className="flex items-center">
          <img
            className="w-[50px] h-[50px] rounded-full object-cover mr-2.5"
            src="https://img.freepik.com/free-photo/smiley-man-holding-camera-front-view_23-2149915895.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720396800&semt=ais_user"
            alt=""
          />
          <input
            type="text"
            placeholder="What's In Your mind SGK"
            className="border-none w-4/5 focus:outline-none"
          />
        </div>
        <hr className="m-5" />
        <div className="flex items-center justify-between">
          <div className="flex ml-5">
            <div className="flex items-center mr-3.5 cursor-pointer">
              <MdPermMedia className="text-[18px] mr-1 hover:text-[tomato]" />
              <span className="text-[16px] font-medium">Photo or Video</span>
            </div>
            <div className="flex items-center mr-3.5 cursor-pointer">
              <BiSolidLabel className="text-[18px] mr-1 hover:text-[blue]" />
              <span className="text-[16px] font-medium">Tag</span>
            </div>
            <div className="flex items-center mr-3.5 cursor-pointer">
              <MdLocationPin className="text-[18px] mr-1 hover:text-[green]" />
              <span className="text-[16px] font-medium">Location</span>
            </div>
            <div className="flex items-center mr-3.5 cursor-pointer">
              <MdEmojiEmotions className="text-[18px] mr-1 hover:text-[goldenrod]" />
              <span className="text-[14px] font-medium">Feelings</span>
            </div>
          </div>
          <button className="borde-none p-1.5 rounded-md bg-green-500 font-medium mr-5 cursor-pointer text-black hover:border-2 hover:border-solid border-black">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharePost;
