import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetNumberOfFavorites = (id: number) => {
  return useQuery({
    queryKey: ["totalFav"],
    queryFn: () => getNumberOfFavorites(id),
  });
};

async function getNumberOfFavorites(id: number) {
  const response = await axios.get(
    `http://localhost:5000/movieflix/favorites/total/${id}`
  );
  return response.data;
}
