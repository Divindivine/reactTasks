import React from "react";
import { MovieCategoryPropType, MovieType } from "../type/type";
import { useGetTopRatedMovies } from "../api/streamingApi/useGetTopRatedMovies";

function TopRatedMovies({
  movieClicked,
}: MovieCategoryPropType) {
  const { data, isLoading, isError } = useGetTopRatedMovies();
  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error on fetchin top rated movies</span>;

  return (
    <div className="w-full flex flex-col gap-[10px] mt-[50px]">
      <span className="text-[#808080] font-bold text-[50px]">
        Top Rated Movies
      </span>
      <div
        className="flex gap-[20px] w-full overflow-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {data &&
          data.results.map((movie: MovieType) => (
            <div
            key={movie.id}
              className="min-w-[300px] max-w-[300px] min-h-[400px] max-h-[400px] p-[20px] cursor-pointer hover:p-0"
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

export default TopRatedMovies;
