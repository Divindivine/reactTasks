import React from "react";
import { MovieCategoryPropType, MovieType } from "../type/type";
import { useGetUpcomingMovies } from "../api/streamingApi/useGetUpcomingMovies";

function UpcomingMovies({ movieClicked }: MovieCategoryPropType) {
  const { data, isLoading, isError } = useGetUpcomingMovies();
  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>error on fetching upcoming movies</span>;

  return (
    <div className="w-full flex flex-col gap-[10px]">
      <span className="text-[#808080] font-bold text-[50px]">
        Upcoming Movies
      </span>
      <div
        className="flex gap-[20px] w-full overflow-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {data &&
          data.results.map((movie: MovieType) => (
            <div
            key={movie.id}
              className="min-w-[300px] mzx-w-[300px] min-h-[400px] max-h-[400px] cursor-pointer p-[20px] hover:p-0"
              style={{ transition: "padding 0.5s" }}
              onClick={() => movieClicked(movie)}
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
  );
}

export default UpcomingMovies;







