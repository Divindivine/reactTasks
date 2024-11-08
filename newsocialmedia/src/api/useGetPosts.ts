import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetPosts = () => {
  return useQuery({ queryKey: ["posts"], queryFn: getPost });
};

async function getPost() {
  const response = await axios.get(
    "https://gorest.co.in/public/v2/posts?access-token=534e7a263c3a9e322c2e341b47323719a21df9d26b43fe22babecd5ea8c9e92c",
    {
      headers: {
        Authorization:
          "Bearer 1aa930fddeb210881d261a8611f01890fa14ea903ec39395afe10d691b5ed92c",
      },
    }
  );
  return response.data;
}
