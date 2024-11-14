import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetNowPlayingMovies = () => {
  return useQuery({
    queryKey: ["nowplaying"],
    queryFn: getNowPlayingMovies,
  });
};

async function getNowPlayingMovies() {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmRjYzk5NmFiNDZmOGU1NTk3OTliMzQyM2NiYmVkNCIsIm5iZiI6MTczMTQ3NTA0MC4zMDkxODg4LCJzdWIiOiI2NzMxZTUxYmJjM2ZmN2I0ZDFiZWViYjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iLDdrggDOoGZiSHZeE_koMrzrSGzWW5nc47a2Ik87HA",
      },
    }
  );
  return response.data;
}
