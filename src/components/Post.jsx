import React, { useState } from "react";
import { Users } from "../data/Data";
import { FaHeart } from "react-icons/fa";
import { RiDislikeFill } from "react-icons/ri";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="w-full rounded-[10px] shadow-md my-[30px]">
      <div className="p-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={
                Users.filter((user) => user.id === post?.userId)[0]
                  .profilePicture
              }
              className="w-[32px] h-[32px] rounded-full object-cover"
              alt=""
            />
            <span className="text-[17px] font-medium mx-[10px]">
              {Users.filter((user) => user.id === post?.userId)[0].username}
            </span>
            <span className="text-[13px]">{post.date}</span>
          </div>
        </div>
      </div>
      <div className="my-[20px]">
        <span>{post.desc}</span>
        <img
          src={post.photo}
          alt=""
          className="mt-[20px] w-full max-h-[500] object-contain"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <FaHeart
            className="w-[24px] h-[24px] mr-[5px] cursor-pointer text-red-700"
            onClick={likeHandler}
          />
          <RiDislikeFill
            className="w-[24px] h-[24px] mr-[5px] cursor-pointer"
            onClick={likeHandler}
          />

          <span className="text-[15px]">{like} people like it</span>
        </div>
        <div>
          <span className="cursor-pointer border-b border-dashed border-gray-400 text-[15px]">
            {post.comment} comments
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
