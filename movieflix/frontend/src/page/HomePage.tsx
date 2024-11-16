import { useState } from "react";
import { MovieType } from "../type/type";
import NowPlayingMovies from "../components/NowPlayingMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import SpecificMovieDetail from "../components/SpecificMovieDetail";
import UpcomingMovies from "../components/UpcomingMovies";
import FavoriteMovies from "../components/FavoriteMovies";
import Header from "../components/Header";
import { useGetFavorites } from "../api/database/movies/useGetFavorites";

function HomePage() {
  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString && JSON.parse(currentUserString);

  const [viewProfile, setViewProfile] = useState(false);
  const CloseProfileNFavorites = () => {
    viewProfile && setViewProfile(false);
  };

  const [viewMovieDetail, setViewMovieDetail] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({} as MovieType);
  const movieClicked = (movie: MovieType) => {
    setViewMovieDetail(true);
    setClickedMovie(movie);
  };

  const [favClicked, setFavClicked] = useState(false);

  const favorites = useGetFavorites(currentUser.id);

  return (
    <div
      className="w-screen h-screen bg-black flex flex-col p-[20px] font-poppins"
      onClick={CloseProfileNFavorites}
    >
      <Header
        currentUser={currentUser}
        viewProfile={viewProfile}
        setViewProfile={setViewProfile}
        setFavClicked={setFavClicked}
        favorites={favorites}
      />
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
          favorites={favorites}
        />
      )}

      {favClicked && (
        <FavoriteMovies
          setFavClicked={setFavClicked}
          currentUser={currentUser}
          favorites={favorites}
        />
      )}
    </div>
  );
}

export default HomePage;
