import React from "react";
import { useGetNowPlayingMovies } from "../api/streamingApi/useGetNowPlayingMovies";
import { NowPlayingMovieType } from "../type/type";
import NowPlayingMovies from "../components/NowPlayingMovies";

function HomePage() {
  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString && JSON.parse(currentUserString);
  let firstChar = currentUser.user_name.substring(0, 1);

  console.log(currentUser);

  return (
    <div className="w-screen h-screen bg-black flex flex-col p-[20px] font-poppins">
      <div className="p-[20px] bg-[#EE82EE] w-[70px] h-[70px] flex items-center justify-center self-end rounded-full m-[30px] cursor-pointer">
        <span className="text-white text-[50px]">{firstChar}</span>
      </div>
      <NowPlayingMovies />
    </div>
  );
}

export default HomePage;


