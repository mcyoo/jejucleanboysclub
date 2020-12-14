import React from "react";
import like_icon from "./like.png";
import comment_icon from "./comment.png";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

function Feed({
  content,
  url,
  img_url,
  location,
  like_count,
  comment_count,
  scrollPosition,
}) {
  return (
    <div>
      <div className="flex text-xl lg:text-lg sm:text-sm font-bold">
        {location}
      </div>
      <a href={url}>
        <div>
          <LazyLoadImage
            alt={location}
            src={img_url}
            effect="opacity"
            scrollPosition={scrollPosition}
          />
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
        <div className="mb-4 items-center text-xl lg:text-lg sm:text-sm lg:w-80 sm:w-full">
          {content}
        </div>
      </a>
    </div>
  );
}
export default trackWindowScroll(Feed);
