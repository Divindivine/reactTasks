import { useState } from "react";
import { useGeComments } from "../api/useGetComments";
import { CommentPropType, EachCommentType } from "../type/type";
import { usePostComment } from "../api/usePostComment";
import deleteIcon from "../images/delete.png";
import { useDeleteComment } from "../api/useDeleteComment";

function Comments({ postId }: CommentPropType) {
  const postComment = usePostComment();
  const deleteComment = useDeleteComment();
  const { data, isLoading, isError } = useGeComments();
  const [addedComment, setAddedComment] = useState("");
  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString && JSON.parse(currentUserString);
  const AddComment = () => {
    if (addedComment === "") alert("comment cant be null");
    else {
      const comment = {
        id: Math.floor(Math.random() * 10000000),
        post_id: postId,
        name: currentUser.name,
        email: currentUser.email,
        body: addedComment,
      };
      postComment.mutate(comment);
      setAddedComment("");
    }
  };
  if (isError) return <span>Error on fetching comments</span>;
  if (isLoading) return <span>Loading Comments...</span>;
  const filterdArr = data.filter(
    (element: EachCommentType) => element.post_id === postId
  );
  return (
    <div className=" w-full flex flex-col">
      <div className="w-full overflow-auto max-h-[150px] flex flex-col">
        {filterdArr.length === 0 && (
          <span className="font-bold text-[20px] text-center p-[50px]">
            No comments Yet
          </span>
        )}
        {filterdArr.map((comment: EachCommentType) => (
          <div className="flex gap-[40px] p-[10px]">
            <span className="font-bold text-[22px] text-nowrap">
              {comment.name} :
            </span>
            <span className="text-[20px] font-serif">{comment.body}</span>
            {comment.name === currentUser.name && (
              <div className="ml-auto mr-[20px]">
                <img
                  src={deleteIcon}
                  className="h-[25px] w-[25px]"
                  alt=""
                  onClick={() => deleteComment.mutate(comment)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-[20px] items-center">
        <label className="text-wrap font-normal text-[16px]">
          add comment...
        </label>
        <input
          type="text"
          className="w-full border-[1px] border-black"
          value={addedComment}
          onChange={(e) => setAddedComment(e.target.value)}
        />
        <button
          className="p-[10px] bg-slate-500 text-white text-[20px] font-bold rounded-[8px] hover:bg-black"
          onClick={AddComment}
        >
          send
        </button>
      </div>
    </div>
  );
}

export default Comments;
