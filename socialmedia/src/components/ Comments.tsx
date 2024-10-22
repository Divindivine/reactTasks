import { useState } from "react";
import commentIcon from "../img/comment (Copy).png";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getComments } from "../api/getComments";
import { commentsPropType, eachCommentType } from "../type/type";
import { addComments } from "../api/addComments";

function Comments({ post }: commentsPropType) {
  const queryClient = useQueryClient();
  const [showComments, setShowComments] = useState(false);
  const [showCommentAddingArea, setShowCommentAddingArea] = useState(false);
  const [newlyAddedComment, setNewlyAddedComment] = useState("");

  const mutation = useMutation({
    mutationFn: (newComment:eachCommentType) => addComments(1, newComment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
    onError: (error) => {
      console.log("Error on adding comment", error);
    },
  });

  const callMutate = (newComment:string) =>{
    mutation.mutate(newComment);
    setShowCommentAddingArea(false)
  }
  const { data, isLoading, isError } = useQuery({
    queryKey: ["comments"],
    queryFn: getComments,
  });

  if (isLoading) {
    return <div>Loading comments</div>;
  }
  if (isError) {
    return <div>Error loading comments</div>;
  }
  const postComments = data.filter(
    (comment: eachCommentType) => comment.post_id === post.id
  );
  return (
    <>
      <img
        className="w-[20px] h-[20px] mt-[10px]"
        src={commentIcon}
        onClick={() => setShowComments((prev) => !prev)}
      />
      {showComments && (
        <div className="w-[500px] border-[1px] mt-[20px] flex flex-col overflow-y-scroll p-[10px] gap-[30px]">
          <span className="m-[10px] text-[20px] font-poppins font-bold relative">
            Comments:
            {postComments.length === 0 && (
              <span className="font-normal text-[16px]">No Comments Yet</span>
            )}
            <button
              className="absolute right-0 bg-black text-white rounded-[6px] p-[5px] text-[16px]"
              onClick={() => setShowCommentAddingArea((prev) => !prev)}
            >
              {showCommentAddingArea ? "Back" : "Add Comment"}
            </button>
          </span>
          <div>
            {postComments.map((comment: eachCommentType) => (
              <div>
                <span className="font-poppins font-semibold">
                  {comment.name} :
                </span>
                <span className="ml-[10px]">{comment.body}</span>
              </div>
            ))}
          </div>
          {showCommentAddingArea && (
            <div>
              <input
                type="text"
                placeholder="add the comment..."
                onChange={(event) => setNewlyAddedComment(event.target.value)}
              />
              <button
                className="bg-black text-white rounded-[6px] p-[5px] text-[16px]"
                onClick={()=>callMutate(newlyAddedComment)}
              >
                post comment
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Comments;
