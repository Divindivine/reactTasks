import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { EachCommentType } from "../type/type";

export const usePostComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postComments,
    onError: () => alert("error while adding comment"),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["comments"] }),
  });
};

async function postComments(comment: EachCommentType) {
  const response = await axios.post(
    `https://gorest.co.in/public/v2/posts/${comment.post_id}/comments?access-token=534e7a263c3a9e322c2e341b47323719a21df9d26b43fe22babecd5ea8c9e92c`,
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
