import { EachUserDataType } from "../type/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const usePostUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postUser,
    onError: (error) => alert(`error on adding new user \n error: ${error}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

async function postUser(userData: EachUserDataType) {
  const response = await axios.post(
    "https://gorest.co.in/public/v2/users?access-token=534e7a263c3a9e322c2e341b47323719a21df9d26b43fe22babecd5ea8c9e92c",
    userData,
    {
      headers: {
        Authorization:
          "Bearer 534e7a263c3a9e322c2e341b47323719a21df9d26b43fe22babecd5ea8c9e92c",
      },
    }
  );
  return response.data;
}
