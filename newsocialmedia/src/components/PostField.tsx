import { PostFieldPropType, eachPostDataType } from "../type/type";
import { useGetPosts } from "../api/useGetPosts";
import PostOwner from "./PostOwner";

function PostField({ currentUser }: PostFieldPropType) {
  const { data, isError, isLoading } = useGetPosts();
  if (isError)
    return (
      <div className="w-full h-full flex items-center justify-center text-[40px]">
        Error on Fetching users!!!
      </div>
    );
  if (isLoading)
    return (
      <div className="w-full h-full flex items-center justify-center text-[40px]">
        Loading Posts...
      </div>
    );

  return (
    <div className="w-full h-full flex flex-wrap overflow-auto pt-[100px]">
      {data.map((post: eachPostDataType) => (
        <div className="w-1/3 h-1/2 p-[20px] hover:p-0 hover:border-[5px] hover:border-black ">
          <div className="w-full h-full bg-white border-[2px] border-black flex flex-col p-[10px]">
         <PostOwner />
            <span className="text-[20px] font-bold">{post.title}</span>
            <span>{post.body}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostField;