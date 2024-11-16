import { useGetFavorites } from "../api/database/movies/useGetFavorites";
import { useRemoveFromFavorites } from "../api/database/movies/useRemoveFromFavorites";
import { FavoritesDataType, FavoritesMoviePropType } from "../type/type";

function FavoriteMovies({
  setFavClicked,
  currentUser,
  favorites,
}: FavoritesMoviePropType) {
  const removeFromFavorites = useRemoveFromFavorites();
  const removeClicked = (movie: FavoritesDataType) => {
    removeFromFavorites.mutate(movie);
  };
  const { data, isLoading, isError } = favorites;
  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error on Fetching favorites</span>;

  return (
    <div className="w-full h-full top-0 right-0 absolute z-1 flex items-center justify-center">
      <div className="bg-white p-[10px] rounded-[20px] flex flex-col w-1/4">
        <div
          className="p-[22px] w-min text-[20px] cursor-pointer hover:p-[15px] hover:text-[29px]"
          onClick={() => setFavClicked(false)}
        >
          <span>✖</span>
        </div>
        <div
          className="w-full flex flex-col gap-[30px] max-h-[500px] overflow-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {!data.length ? (
            <span className="text-center font-bold text-[25px]">
              Your Favorites are empty!
            </span>
          ) : (
            data.map((movie: FavoritesDataType) => (
              <div className="w-full flex gap-[10px] items-center justify-between border-b-2 border-black">
                <div
                  className="w-1/4 min-w-[150px] h-[200px] rounded-[10px]"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>
                <span className="max-w-1/4 truncate font-bold text-[25px]">
                  {movie.title}
                </span>
                <button
                  className="text-nowrap p-[20px] text-white text-[20px] font-bold rounded-[10px] bg-[#D2122E] hover:bg-[#B31b1B]"
                  onClick={() => removeClicked(movie)}
                >
                  remove favorites
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default FavoriteMovies;
