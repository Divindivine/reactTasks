import { useGetNowPlayingMovies } from "../api/streamingApi/useGetNowPlayingMovies";
import { MovieCategoryPropType, MovieType } from "../type/type";

function NowPlayingMovies({ movieClicked }: MovieCategoryPropType) {
  const { data, isLoading, isError } = useGetNowPlayingMovies();
  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>error on fetching now playing movies</span>;

  return (
    <div className="w-full flex flex-col gap-[10px]">
      <span className="text-[#808080] font-bold text-[50px]">
        Now Playing Movies
      </span>
      <div
        className="flex gap-[20px] w-full overflow-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {data &&
          data.results.map((movie: MovieType) => (
            <div 
            key={movie.id}
              className="min-w-[300px] max-w-[300px] min-h-[400px] max-h-[400px] cursor-pointer p-[20px] hover:p-0"
              style={{
                transition: "padding 0.5s",
              }}
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

export default NowPlayingMovies;
