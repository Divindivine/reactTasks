import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetFavorites = (id: number) => {
  return useQuery({
    queryKey: ["favorites"],
    queryFn: () => getFavorites(id),
  });
};

async function getFavorites(id: number) {
  const response = await axios.get(
    `http://localhost:5000/movieflix/${id}/favoritemovies`
  );
  return response.data;
}
