import axios from "axios";
import { FavoritesDataType } from "../../../type/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddToFavorites = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addToFavorites,
    onError: (error) => alert(`error: ${error}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
  });
};

async function addToFavorites(movie: FavoritesDataType) {
  const response = await axios.post(
    "http://localhost:5000/movieflix/favorites/user",
    movie
  );
  return response.data;
}


