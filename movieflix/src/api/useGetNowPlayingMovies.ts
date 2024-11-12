import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetNowPlayingMovies = () => {
    return useQuery({
        queryKey:['nowplaying'],
        queryFn:getNowPlayingMovies
    })
}

async function getNowPlayingMovies() {
    const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing')
}