import { useState } from "react";
import { useLocation } from "react-router-dom";
import { eachUserDataType, homePagePropsType } from "../type/type";
import leftarrow from "../img/leftArrow.png";
import Posts from "../components/Posts";

function HomePage() {
  const { state }:homePagePropsType = useLocation();
  const currentUser: eachUserDataType = state.user;
  const users:eachUserDataType[] = state.users;
  const [showCurrentUserDetails, setShowCurrentUserDetails] = useState(false);

  return (
    <>
      <div
        className="absolute top-0 left-0 cursor-pointer"
        onClick={() => setShowCurrentUserDetails(true)}
      >
        <div
          className="w-[100px] h-[100px] rounded-[10px] flex flex-col justify-center items-center gap-[10px]"
          style={{ background: "rgba(0, 0, 0, 0.05)" }}
        >
          <div className="w-[40px] h-[40px] bg-black rounded-full"></div>
          <div className="w-[100px] truncate">
            <span className="font-poppins text-[20px]">{currentUser.name}</span>
          </div>
        </div>
      </div>
      {showCurrentUserDetails && (
        <div className="absolute top-0 left-0">
          <div className="bg-slate-100 flex flex-col p-[10px] rounded-[10px]">
            <div
              className="flex gap-[15px] bg-slate-300 w-[100px] h-[30px] justify-center items-center rounded-[5px] cursor-pointer"
              onClick={() => setShowCurrentUserDetails(false)}
            >
              <img src={leftarrow} alt="" className="h-[20px] w-[20px]" />
              <span className="text-black">back</span>
            </div>
            <div className="h-[100px] w-[100px] bg-black self-center rounded-full"></div>
            <div className="mt-[20px]">
              <span className="font-poppins text-[18px] font-semibold">ID: {currentUser.id}</span>
            </div>
            <div className="mt-[20px]">
              <span className="font-poppins text-[18px] font-semibold">Name: {currentUser.name}</span>
            </div>
            <div className="mt-[20px]">
              <span className="font-poppins text-[18px] font-semibold">Email: {currentUser.email}</span>
            </div>
            <div className="mt-[20px]">
              <span className="font-poppins text-[18px] font-semibold">Gender: {currentUser.gender}</span>
            </div>
            <div className="mt-[20px]">
              <span className="font-poppins text-[18px] font-semibold">Status: {currentUser.status}</span>
            </div>
          </div>
        </div>
      )}
      <div className="w-screen h-screen bg-[#87CEFA] flex justify-center items-center">
       <Posts  users={users}/>
      </div>
    </>
  );
}

export default HomePage;
