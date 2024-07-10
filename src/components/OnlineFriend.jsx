import React from "react";

const OnlineFriend = ({ user }) => {
  return (
    <div>
      <li className="flex items-center gap-3 mb-3.5">
        <div className="relative mr-2.5">
          <img
            src={user.profilePicture}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="w-3 h-3 rounded-full bg-[limegreen] absolute top-[-2px] right-0 border-2 border-white"></span>
        </div>
        <span className="font-medium">{user.username}</span>
      </li>
    </div>
  );
};

export default OnlineFriend;
