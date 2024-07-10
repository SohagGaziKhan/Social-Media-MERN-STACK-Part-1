import React from "react";
import SharePost from "./SharePost";
import { Posts } from "../data/Data";
import Post from "./Post";
const MainNews = () => {
  return (
    <div className="w-[900px] ">
      <div className="p-5">
        {/* this is share post list  */}
        <SharePost />
        {Posts.map((items) => (
          <Post key={items.id} post={items} />
        ))}
        {/* this is user post list  */}
      </div>
    </div>
  );
};

export default MainNews;
