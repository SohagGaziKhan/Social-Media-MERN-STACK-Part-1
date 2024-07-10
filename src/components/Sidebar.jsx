import React from "react";
import { MdOutlineRssFeed } from "react-icons/md";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdInsertChartOutlined } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { IoMdBookmark, IoMdClose } from "react-icons/io";
import { IoHelpOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { Users } from "../data/Data";

const Sidebar = () => {
  return (
    <div className="w-[400px] top-12 h-[calc(100vh-50px)] overflow-scroll sticky">
      <div className="p-5 px-8">
        <ul className="p-0 m-0 list-none">
          <li className="flex items-center mb-5 gap-5">
            <MdOutlineRssFeed className="mr-4" size={25} />
            <span className="text-xl cursor-pointer hover:underline underline-offset-8">
              Feed
            </span>
          </li>
          <li className="flex items-center mb-5 gap-5">
            <IoChatbubbleEllipses className="mr-4" size={25} />
            <span className="text-xl cursor-pointer hover:underline underline-offset-8">
              Chats
            </span>
          </li>
          <li className="flex items-center mb-5 gap-5">
            <MdInsertChartOutlined className="mr-4" size={25} />
            <span className="text-xl cursor-pointer hover:underline underline-offset-8">
              Video
            </span>
          </li>
          <li className="flex items-center mb-5 gap-5">
            <MdGroups className="mr-4" size={25} />
            <span className="text-xl cursor-pointer hover:underline underline-offset-8">
              Groups
            </span>
          </li>
          <li className="flex items-center mb-5 gap-5">
            <IoMdBookmark className="mr-4" size={25} />
            <span className="text-xl cursor-pointer hover:underline underline-offset-8">
              Bookmarks
            </span>
          </li>
          <li className="flex items-center mb-5 gap-5">
            <IoHelpOutline className="mr-4" size={25} />
            <span className="text-xl cursor-pointer hover:underline underline-offset-8">
              Questions
            </span>
          </li>
          <li className="flex items-center mb-5 gap-5">
            <MdWork className="mr-4" size={25} />
            <span className="text-xl cursor-pointer hover:underline underline-offset-8">
              Jobs
            </span>
          </li>
          <li className="flex items-center mb-5 gap-5">
            <MdEvent className="mr-4" size={25} />
            <span className="text-xl cursor-pointer hover:underline underline-offset-8">
              Events
            </span>
          </li>
          <li className="flex items-center mb-5 gap-5">
            <FaSchool className="mr-4" size={25} />
            <span className="text-xl cursor-pointer hover:underline underline-offset-8">
              Courses
            </span>
          </li>
        </ul>
        <div className="flex gap-5 items-center cursor-pointer">
          <button className="w-36 border-none p-2.5 rounded-md font-bold text-lg">
            Show More
          </button>
          <IoMdClose size={20} />
        </div>
        <hr className="my-5 h-2" />
        <ul className="p-0 m-0 lint-none">
          {Users.map((u) => (
            <div className="flex items-center mr-4 gap-5 px-8 py-4">
              <h1 className="text-xl cursor-pointer">{u.username}</h1>
              <img
                src={u.profilePicture}
                alt=""
                className="h-[40px] w-[40px] rounded-full cursor-pointer object-cover gap-5"
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
