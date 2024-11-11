import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onError: (error) => {
      alert(`error or deleting user \n error: ${error}`);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};

async function deleteUser(id: number) {
  const response = await axios.delete(
    `https://gorest.co.in/public/v2/users/${id}?access-token=534e7a263c3a9e322c2e341b47323719a21df9d26b43fe22babecd5ea8c9e92c`,
    {
      headers: {
        Authorization:
          "Bearer 1aa930fddeb210881d261a8611f01890fa14ea903ec39395afe10d691b5ed92c",
      },
    }
  );
  return response.data;
}