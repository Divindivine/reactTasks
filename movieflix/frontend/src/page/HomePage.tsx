import { useEffect, useState } from "react";
import { MovieType } from "../type/type";
import NowPlayingMovies from "../components/NowPlayingMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import SpecificMovieDetail from "../components/SpecificMovieDetail";
import UpcomingMovies from "../components/UpcomingMovies";
import favIcon from "../img/fav.svg";
import { useGetNumberOfFavorites } from "../api/database/movies/useGetNumberOfFavorites";

function HomePage() {
  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString && JSON.parse(currentUserString);
  
  let firstChar = currentUser.user_name.substring(0, 1);
  const [viewProfile, setViewProfile] = useState(false);
  const CloseProfile = () => {
    viewProfile && setViewProfile(false);
  };

  const [viewMovieDetail, setViewMovieDetail] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({} as MovieType);
  const movieClicked = (movie: MovieType) => {
    setViewMovieDetail(true);
    setClickedMovie(movie);
  };

  const {data, isLoading, isError} = useGetNumberOfFavorites(currentUser.id);
  if(isLoading) return <span>Loading...</span>
 if(isError) return <span>error on fetching favorites</span>

  return (
    <div
      className="w-screen h-screen bg-black flex flex-col p-[20px] font-poppins"
      onClick={CloseProfile}
    >
      <div className="flex self-end gap-[100px] items-center">
        <div className="bg-white p-[10px] rounded-full cursor-pointer hover:bg-slate-400 relative">
          <div className="absolute -top-5 right-0 text-white text-[20px] font-bold">{data[0].count}</div>
          <img className="w-[50px] h-[50px]" src={favIcon} alt="" />
        </div>

        {viewProfile ? (
          <div className="p-[20px] bg-slate-800 flex flex-col m-[30px] rounded-[10px] text-white">
            <span
              className=" font-sans cursor-pointer text-[20px] m-[10px] w-min rounded-full p-[5px] hover:bg-white"
              onClick={() => setViewProfile(false)}
            >
              ✖
            </span>
            <div className="flex flex-col">
              <span className="font-bold">
                name:{" "}
                <span className="font-mono"> {currentUser.user_name}</span>
              </span>
              <span className="font-bold">
                email: <span className="font-mono">{currentUser.email}</span>
              </span>
            </div>
          </div>
        ) : (
          <div
            className="p-[20px] bg-[#EE82EE] w-[70px] h-[70px] flex items-center justify-center rounded-full m-[30px] cursor-pointer"
            onClick={() => setViewProfile(true)}
          >
            <span className="text-white text-[50px]">{firstChar}</span>
          </div>
        )}
      </div>

      <div
        className="flex flex-col overflow-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <NowPlayingMovies movieClicked={movieClicked} />
        <TopRatedMovies movieClicked={movieClicked} />
        <UpcomingMovies movieClicked={movieClicked} />
      </div>
      {viewMovieDetail && (
        <SpecificMovieDetail
          setViewMovieDetail={setViewMovieDetail}
          clickedMovie={clickedMovie}
          currentUser={currentUser}
        />
      )}
    </div>
  );
}

export default HomePage;
