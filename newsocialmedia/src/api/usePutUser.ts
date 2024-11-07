import axios from "axios";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EachUserDataType } from "../type/type";

export const usePutUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: putUser,
    onError: (error) =>
      alert(`Error on editing user Details \n error: ${error}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};

async function putUser( userData: EachUserDataType) {
  const response = await axios.put(
    `https://gorest.co.in/public/v2/users/${userData.id}?access-token=534e7a263c3a9e322c2e341b47323719a21df9d26b43fe22babecd5ea8c9e92c`,
    userData,
    {
      headers: {
        Authorization:
          "Bearer 1aa930fddeb210881d261a8611f01890fa14ea903ec39395afe10d691b5ed92c",
      },
    }
  );
  return response.data;
}
