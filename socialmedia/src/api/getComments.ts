import axios from "axios";

export async function getComments() {
  const response = await axios.get("https://gorest.co.in/public/v2/comments");
  return response.data;
}
