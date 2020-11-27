import React from "react";
import like_icon from "./like.png";
import comment_icon from "./comment.png";

function Feed({ content, url, img_url, location, like_count, comment_count }) {
  return (
    <div>
      <div className="flex text-xl lg:text-lg sm:text-sm">{location}</div>
      <a href={url}>
        <div>
          <img src={img_url}></img>
        </div>
        <div className="flex my-1 items-center text-xl lg:text-lg sm:text-sm">
          <div className="flex w-10 lg:w-10 lg:h-10 sm:w-6 sm:h-6">
            <img src={like_icon}></img>
          </div>
          <div className="flex">{like_count}</div>
          <div className="flex w-10 lg:w-10 lg:h-10 sm:w-6 sm:h-6">
            <img src={comment_icon}></img>
          </div>
          <div className="flex">{comment_count}</div>
        </div>
        <div className="mb-2 items-center text-xl lg:text-lg sm:text-sm">
          {content}
        </div>
      </a>
    </div>
  );
}
export default Feed;
