import { useMutation } from "@tanstack/react-query";
import { userDataType } from "../../../type/type";
import axios from "axios";

export const useAddUser = () => {
  return useMutation({
    mutationFn: addUser,
    onError: (error) => alert(`email already in use or ${error}`),
  });
};

async function addUser(userData: userDataType) {
  const response = await axios.post(
    "http://localhost:5000/movieflix/users/new",
    userData
  );
  return response.data;
}
