import React from "react";
import { Users } from "../data/Data";
import OnlineFriend from "./OnlineFriend";
import { Link } from "react-router-dom";
import { FaGift } from "react-icons/fa";

const Rightbar = ({ profile }) => {
  const HomeRigthBar = () => {
    return (
      <>
        <div className="flex items-center ">
          <FaGift className="w-10 h-10 mr-2.5 mt-5" size={50} />

          <span className="font-light text-base">
            <b>Roje Fosters </b> and <b>5 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img src="" alt="" className="w-full rounded-lg my-7" />
        <h3 className="text-lg font-medium mb-2.5">Online Friends</h3>
        <ul className="list-none p-0 m-0">
          {Users.map((u) => (
            <Link to={"/profile"}>
              {" "}
              <OnlineFriend key={u.id} user={u} />
            </Link>
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h3 className="text-lg font-medium mb-2.5">Users information</h3>
        <div className="mb-7">
          <div className="mb-2.5">
            <span className="font-medium mr-3.5 text-gray-600">City:</span>
            <span className="font-light">New York</span>
          </div>
          <div className="mb-2.5">
            <span className="font-medium mr-3.5 text-gray-600">From:</span>
            <span className="font-light">Asia</span>
          </div>
          <div className="mb-2.5">
            <span className="font-medium mr-3.5 text-gray-600">
              Relationship:
            </span>
            <span className="font-light">Single</span>
          </div>
          <h2 className="text-lg font-medium mb-2.5"> User friends Lists</h2>
          <div className="grid grid-cols-3 justify-between">
            <div className="flex flex-col mb-5 cursor-pointer">
              <img
                className="w-[100px] h-[100px] object-cover rounded-md"
                src="https://www.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg"
                alt=""
              />
              <span className="text-center text-[20px] font-bold">
                John Carter
              </span>
            </div>
            <div className="flex flex-col mb-5 cursor-pointer">
              <img
                className="w-[100px] h-[100px] object-cover rounded-md"
                src="https://www.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg"
                alt=""
              />
              <span className="text-center text-[20px] font-bold">
                SGk Khan
              </span>
            </div>
            <div className="flex flex-col mb-5 cursor-pointer">
              <img
                className="w-[100px] h-[100px] object-cover rounded-md"
                src="https://www.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg"
                alt=""
              />
              <span className="text-center text-[20px] font-bold">
                John Carter
              </span>
            </div>
            <div className="flex flex-col mb-5 cursor-pointer">
              <img
                className="w-[100px] h-[100px] object-cover rounded-md"
                src="https://www.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg"
                alt=""
              />
              <span className="text-center text-[20px] font-bold">
                SGk Khan
              </span>
            </div>
            <div className="flex flex-col mb-5 cursor-pointer">
              <img
                className="w-[100px] h-[100px] object-cover rounded-md"
                src="https://www.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg"
                alt=""
              />
              <span className="text-center text-[20px] font-bold">
                John Carter
              </span>
            </div>
            <div className="flex flex-col mb-5 cursor-pointer">
              <img
                className="w-[100px] h-[100px] object-cover rounded-md"
                src="https://www.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg"
                alt=""
              />
              <span className="text-center text-[20px] font-bold">
                SGk Khan
              </span>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div>
        <div>{profile ? <ProfileRightBar /> : <HomeRigthBar />}</div>
      </div>
    </>
  );
};

export default Rightbar;
