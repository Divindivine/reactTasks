import axios from "axios";

export async function deleteUsers(id: number) {
  const response = await axios.delete(
    `https://gorest.co.in/public/v2/users/${id}`,
    {
      headers: {
        Authorization:
          "Bearer 1aa930fddeb210881d261a8611f01890fa14ea903ec39395afe10d691b5ed92c",
      },
    }
  );
  return response.data;
}
