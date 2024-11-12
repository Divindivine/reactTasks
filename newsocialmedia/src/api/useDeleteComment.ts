import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { EachCommentType } from "../type/type";

export const useDeleteComment = () => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: deleteComment,
    onError: (error) =>
      alert(`errror occured while deleteing comment: ${error}`),
    onSuccess: () => queryclient.invalidateQueries({ queryKey: ["comments"] }),
  });
};

async function deleteComment(comment: EachCommentType) {
  const reponse = await axios.delete(
    `https://gorest.co.in/public/v2/posts/${comment.post_id}/comments/${comment.id}?access-token=534e7a263c3a9e322c2e341b47323719a21df9d26b43fe22babecd5ea8c9e92c`,
    {
      headers: {
        Authorization:
          "Bearer 1aa930fddeb210881d261a8611f01890fa14ea903ec39395afe10d691b5ed92c",
      },
    }
  );
  return reponse.data;
}