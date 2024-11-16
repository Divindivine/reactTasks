import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FavoritesDataType } from "../../../type/type";

export const useRemoveFromFavorites = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeFromFavorites,
    onError: (error) => alert(error),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["favorites"] }),
  });
};

async function removeFromFavorites(movie: FavoritesDataType) {
  const response = await axios.delete(
    `http://localhost:5000/movieflix/${movie.user_id}/favoritemovies/${movie.id}`
  );
  return response.data;
}
