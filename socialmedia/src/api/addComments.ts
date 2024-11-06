import axios from "axios";
import { eachCommentType } from "../type/type";

export async function addComments(id: number, comment: string) {
  const response = await axios.post(
    `https://gorest.co.in/public/v2/users/${id}/comments`,
    comment,
    {
      headers: {
        Authorization:
          "Bearer 1aa930fddeb210881d261a8611f01890fa14ea903ec39395afe10d691b5ed92c",
      },
    }
  );
  return response.data;
}
