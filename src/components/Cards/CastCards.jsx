import React from "react";

const CastCards = (props) => {
  // Base image URL for fetching cast profile image
  const baseImgUrl = process.env.REACT_APP_BASE_IMG_URL;

  return (
    // Container for each cast card
    <div className="pb-6">
      {/* Displaying cast profile image */}
      <img
        src={`${baseImgUrl}${props.credit?.profile_path}`}
        alt="cast-img"
        className="min-h-[187px] rounded-md sm:min-h-[150px]"
      />
      {/* Displaying cast name */}
      <p className="mt-2 font-poppins text-sm font-medium text-white">
        {props.credit.name}
      </p>
      {/* Displaying character played by the cast */}
      <p className="mt-1 font-poppins text-xs text-white/75">
        {props.credit.character}
      </p>
    </div>
  );
};

export default CastCards;
