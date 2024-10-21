import axios from "axios";

export async function getSingleUser(id: number) {
  const response = await axios.get(
    `https://gorest.co.in/public/v2/users/${id}`
  );
  return response.data;
}
