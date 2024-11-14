import React, { useState } from "react";
import { useGetNowPlayingMovies } from "../api/streamingApi/useGetNowPlayingMovies";
import { NowPlayingMovieType } from "../type/type";

function NowPlayingMovies() {
  const [viewMovieDetail, setViewMovieDetail] = useState(false);
  const { data, isLoading, isError } = useGetNowPlayingMovies();
  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>error on fetching now playing movies</span>;

  return (
    <>
    <div className="w-full flex flex-col gap-[10px]">
      <span className="text-[#808080] font-bold text-[50px]">
        Now Playing Movies
      </span>
      <div
        className="flex gap-[20px] w-full overflow-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {data &&
          data.results.map((movie: NowPlayingMovieType) => (
            <div
              className="min-w-[300px] max-w-[300px] min-h-[400px] max-h-[400px] cursor-pointer p-[20px] hover:p-0"
              style={{
                transition: "padding 0.5s",
              }}
              onClick={() => setViewMovieDetail(true)}
            >
              <div
                className="w-full h-full rounded-[20px]"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          ))}
      </div>
    </div>
    {
        viewMovieDetail && <div className="w-full h-full top-0 right-0 absolute bg-[black] opacity-40 flex items-center justify-center"></div>
    }
    </>
  );
}

export default NowPlayingMovies;
