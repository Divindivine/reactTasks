import axios from "axios";
import { eachUserDataType } from "../type/type";

export async function updateUser(id: number, updatedUser: eachUserDataType) {
  const response = await axios.put(
    `https://gorest.co.in/public/v2/users/${id}`,
    updatedUser,
    {
      headers: {
        Authorization:
          "Bearer 1aa930fddeb210881d261a8611f01890fa14ea903ec39395afe10d691b5ed92c",
      },
    }
  );
  return response.data;
}
