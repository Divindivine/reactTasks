import React from "react";
import { MovieType, SpecificMovieDetailPropType } from "../type/type";
import { useAddToFavorites } from "../api/database/movies/useAddToFavorites";

function SpecificMovieDetail({
  setViewMovieDetail,
  clickedMovie,
  currentUser,
}: SpecificMovieDetailPropType) {
  const addToFavorite = useAddToFavorites();
  const favoriteClicked = (movie: MovieType) => {
    setViewMovieDetail(false);
    const obj = {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
      overview: movie.overview,
      user_id: currentUser.id,
    };
    addToFavorite.mutate(obj);
  };

  return (
    <div className="w-full h-full top-0 right-0 absolute z-1  flex items-center justify-center">
      <div className="bg-white p-[10px] rounded-[20px] flex flex-col w-[500px] ">
        <div
          className="p-[22px] w-min text-[20px] cursor-pointer hover:p-[15px] hover:text-[29px]"
          onClick={() => setViewMovieDetail(false)}
        >
          <span>✖</span>
        </div>
        <div
          className="w-full min-h-[350px] h-full rounded-[20px]"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${clickedMovie.backdrop_path})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <span className="font-">{clickedMovie.overview}</span>
        <button
          className="w-full p-[20px] text-white text-[25px] font-bold mt-[40px] rounded-[10px] bg-[#D2122E] hover:bg-[#B31B1B]"
          onClick={() => favoriteClicked(clickedMovie)}
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
}

export default SpecificMovieDetail;
