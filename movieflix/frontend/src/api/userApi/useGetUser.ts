import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { LoginUserDataType } from "../../type/type";

export const useGetUser = () => {
  return useMutation({
    mutationFn: getUser,
    onError: (error) => alert(`No match in database`),
    onSuccess(data) {
      localStorage.setItem("currentUser", JSON.stringify(data));
    },
  });
};

async function getUser(userData: LoginUserDataType) {
  const response = await axios.post("http://localhost:5000/user", userData);
  return response.data;
}
