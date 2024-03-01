import React, { Suspense, useEffect, useState } from "react";
import { getReviewsMovie } from "../../../API/api";
import { useParams } from "react-router-dom";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";

// Lazy loading ReviewCards component
const ReviewCards = React.lazy(
  () => import("./../../../components/Cards/ReviewCards"),
);

const Reviews = () => {
  // State variables
  const [reviews, setReviews] = useState([]);
  const [myRating, setMyRating] = useState(0);
  const [myReview, setMyReview] = useState("");
  const [myPost, setMyPost] = useState(false);

  // Current date
  const date = new Date();

  // Extracting id from URL parameters
  const { id } = useParams();

  // State variable for user review
  const [userReview, setUserReview] = useState([
    {
      myProfileImage: (
        <IoPersonCircle className="size-14 rounded-full text-white xs:size-10" />
      ),
      myName: localStorage.getItem("username"),
      myRating: 0,
      myTime: `${date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`,
      myDate: `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`,
      myReview: "",
    },
  ]);

  // Fetch reviews for the movie on component mount
  useEffect(() => {
    getReviewsMovie(id).then((reviews) => {
      setReviews(reviews);
    });
  }, [id]);

  // Event handler for star rating click
  const handleStarClick = (i) => {
    setMyRating(i + 1);
  };

  // Update user's review content
  const getReviewValue = (value) => {
    setMyReview(value);
  };

  // Submit user's review
  const handleSubmit = () => {
    const updatedUserReview = [...userReview];

    updatedUserReview[0] = {
      ...updatedUserReview[0],
      myRating: myRating,
      myReview: myReview,
    };

    setUserReview(updatedUserReview);
    setMyPost(true);
  };

  return (
    <div className="mx-8 flex flex-col rounded-xl bg-zinc-800 p-8 font-poppins xs:mx-0 ss:rounded-b-none">
      {/* Reviews section header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-white ss:text-xl">
          Reviews
        </h1>
        <h3 className="text-base text-white/85">
          {reviews.length} {reviews.length <= 1 ? "review" : "reviews"}
        </h3>
      </div>

      {/* Horizontal divider */}
      <hr className="rounded-full border-red-500" />

      {/* Review submission form */}
      <form className="mt-6 flex flex-col items-end gap-2 rounded-sm bg-white p-4">
        <textarea
          type="text"
          onChange={({ target }) => getReviewValue(target.value)}
          placeholder="Write a review"
          className="min-h-12 w-full border-b-2 bg-transparent font-poppins text-sm outline-none"
        />
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            {/* Star rating inputs */}
            {[...Array(10)].map((_, i) => (
              <FaStar
                key={i}
                className={`size-5 cursor-pointer ${
                  i < myRating ? "text-yellow-500" : "text-gray-300"
                }`}
                onClick={() => handleStarClick(i)}
              />
            ))}
          </div>
          {/* Submit button */}
          <PiPaperPlaneRightFill
            className="size-6 cursor-pointer text-red-500"
            onClick={handleSubmit}
          />
        </div>
      </form>

      {/* Display user's review */}
      <div className="mt-6 flex flex-col gap-8">
        {userReview.map((userReview, i) => {
          return (
            <div className={`${myPost ? "flex" : "hidden"} gap-3`} key={i}>
              {userReview.myProfileImage}
              <div className="flex w-full flex-col">
                <div className="flex justify-between">
                  <div>
                    <h1 className="font-medium text-white xs:text-sm">
                      {userReview.myName}
                    </h1>
                    {/* User's rating display */}
                    <p className="mt-1 flex w-fit items-center gap-1 rounded-full bg-red-600 px-1 text-xs font-medium text-white">
                      <FaStar className="size-3" />
                      {userReview.myRating === 0
                        ? "-"
                        : userReview.myRating?.toFixed(1)}
                    </p>
                  </div>
                  {/* Timestamp display */}
                  <div className="text-right text-sm text-white/50 xs:text-xs">
                    <p>{userReview.myTime}</p>
                    <p className="mt-1">{userReview.myDate}</p>
                  </div>
                </div>
                {/* User's review content */}
                <p className="mt-4 text-xs leading-5 text-white/85">
                  {userReview.myReview}
                </p>
              </div>
            </div>
          );
        })}
        {/* Display fetched reviews */}
        {reviews.map((review) => {
          return (
            <div key={review.id} className="text-white">
              <Suspense>
                <ReviewCards review={review} />
              </Suspense>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
