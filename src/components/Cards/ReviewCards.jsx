import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCards = (props) => {
  // Base image URL
  const baseImgUrl = process.env.REACT_APP_BASE_IMG_URL;

  return (
    <div className="flex gap-4">
      {/* Displaying the reviewer's profile picture */}
      <img
        src={`${baseImgUrl}${props.review.author_details?.avatar_path}`}
        alt="profile"
        className="size-12 rounded-full xs:size-10"
      />
      <div className="flex w-full flex-col">
        <div className="flex justify-between">
          <div>
            {/* Displaying the reviewer's name */}
            <h1 className="font-medium xs:text-sm">{props.review.author}</h1>
            {/* Displaying the reviewer's rating */}
            <p className="mt-1 flex w-fit items-center gap-1 rounded-full bg-red-600 px-1 text-xs font-medium">
              <FaStar className="size-3" />
              {props.review.author_details?.rating == null
                ? "-" // Displaying '-' if no rating is provided
                : props.review.author_details?.rating?.toFixed(1)}
            </p>
          </div>
          <div className="text-right text-sm text-white/50 xs:text-xs">
            {/* Displaying the time of the review */}
            <p>{props.review.created_at?.slice(11, 16)}</p>
            {/* Displaying the date of the review */}
            <p className="mt-1">{props.review.created_at?.slice(0, 10)}</p>
          </div>
        </div>
        {/* Displaying the review content */}
        <p className="mt-4 text-xs leading-5 text-white/85">
          {props.review.content}
        </p>
      </div>
    </div>
  );
};

export default ReviewCards;
