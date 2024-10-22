import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts } from "../api/getPosts";
import { eachPostType, postPropTypes } from "../type/type";

import Comments from "./ Comments";

function Posts({ users }: postPropTypes) {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  if (isLoading) {
    return <div>Loading users...</div>;
  }
  if (isError) {
    return <div>Error loading users</div>;
  }

  return (
    <div className="w-2/4 h-5/6 bg-white rounded-[15px] flex flex-col gap-[30px] p-[30px] overflow-y-auto">
      {data.map((post: eachPostType) =>
        users.map(
          (user) =>
                      (
              <div className="w-full border-[2px] flex flex-col p-[10px] gap-[15px] rounded-[10px] items-center">
                <div className="w-full flex items-center gap-[150px]">
                  <div className="flex items-center gap-[30px]">
                    <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
                    <span className="text-[22px] font-bold font-poppins uppercase text-nowrap">
                      {post.user_id === user.id ? user.name : "User Not Found"}
                    </span>
                  </div>
                  <span className="text-[18px] truncate font-poppins text-[#b8b8b8] font-semibold">
                    {post.title}
                  </span>
                </div>
                <div className="max-w-[700px]">
                  <span className="font-poppins ">{post.body}</span>
                  <Comments post={post}/>
                </div>
              </div>
            )
        )
      )}
    </div>
  );
}

export default Posts;
