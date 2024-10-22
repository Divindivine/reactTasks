import axios from "axios";

export async function getUsers() {
  const response = await axios.get("https://gorest.co.in/public/v2/users");
  return response.data;
}
