import axios from "axios";

export async function getPosts() {
  const response = await axios.get("https://gorest.co.in/public/v2/posts");
  return response.data;
}
