import "../styles/InitialPage.css";
import Users from "../components/Users";
import { useContext, useEffect } from "react";
import { UserContext } from "../App";

function InitialPage() {

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f0f4fb]">
      <div className="flex w-[670px] flex-col items-center gap-[32px] ">
        <div className="flex flex-col">
          <span className="self-stretch text-[#000] text-center font-poppins text-[43px] font-medium leading-[63px]">
            Select your profile
          </span>
          <span className=" text-[#000] text-center font-poppins text-[24px] font-normal leading-[36px] opacity-70">
            Logged in users can view full business profiles and can save contact
            details
          </span>
        </div>
        <div className="flex justify-center items-center content-center gap-[16px] self-stretch flex-wrap">
          <Users />

          <div className="flex p-[16px] flex-col items-center gap-[13px] rounded-[23px] bg-white">
            <div className="flex w-[50px] h-[50px] p-[14px] justify-center align-center border-[2px] rounded-[15px]">
              +
            </div>
            <span className="text-[#000] text-center font-poppins text-[16px] font-medium leading-[24px]">
              Add
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InitialPage;
