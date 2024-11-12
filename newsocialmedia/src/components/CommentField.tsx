import { useState } from "react";
import commentIcon from "../images/commentIcon.webp";
import BackButton from "./BackButton";
import { useGeComments } from "../api/useGetComments";
import Comments from "./Comments";
import { CommentFieldPropType } from "../type/type";

function CommentField({ postId }: CommentFieldPropType) {
  const [commentIconClicked, setCommentIconClicked] = useState(false);
  return commentIconClicked ? (
    <div className="w-full p-[10px]">
      <div className="w-full border-[2px] border-black p-[10px]">
        <div className="w-full" onClick={() => setCommentIconClicked(false)}>
          <BackButton />
        </div>
        <Comments postId={postId}/>
      </div>
    </div>
  ) : (
    <div className="w-ful mt-auto flex justify-center items-center p-[30px]">
      <img
        src={commentIcon}
        alt=""
        className="w-[50px] h-[50px] hover:w-[70px] hover:h-[70px]"
        onClick={() => setCommentIconClicked(true)}
      />
    </div>
  );
}

export default CommentField;
