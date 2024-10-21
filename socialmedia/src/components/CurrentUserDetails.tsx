import React from "react";
import leftarrow from "../img/leftArrow.png";
import { currentUserDetailsPropType } from "../type/type";

function CurrentUserDetails({
  currentUser,
  setShowCurrentUserDetails,
}: currentUserDetailsPropType) {
  return (
    <div className="absolute top-0 left-0">
      <div className="bg-slate-100 flex flex-col p-[10px]">
        <div
          className="flex gap-[15px] bg-slate-300 w-[100px] h-[30px] justify-center items-center items-center rounded-[5px] cursor-pointer"
          onClick={() => setShowCurrentUserDetails(false)}
        >
          <img src={leftarrow} alt="" className="h-[20px] w-[20px]" />
          <span className="text-black">back</span>
        </div>
        <div className="h-[100px] w-[100px] bg-black self-center rounded-full"></div>
      </div>
    </div>
  );
}

export default CurrentUserDetails;

