import { userImages } from "../images/userImage";
import { PostOwnerPropType } from "../type/type";
import { useGetUserById } from "../api/useGetUserById";

function PostOwner({ userID, currentUser }: PostOwnerPropType) {
  const { data, isLoading, isError } = useGetUserById(userID);
  if (isLoading)
    return (
      <div className="w-full flex justify-between p-[10px]">
        <span className="text-[20px] font-bold">Loading users...</span>
      </div>
    );
  if (isError)
    return (
      <div className="w-full flex justify-between p-[10px]">
        <span className="text-[20px] font-bold">User not found</span>
      </div>
    );
  return userID === currentUser.id ? (
    <div className="w-full flex justify-between">
      <div
        className="w-[40px] h-[40px] rounded-full"
        style={{
          backgroundImage: `url(${
            userImages[currentUser.imageID ? currentUser.imageID : 0]
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div>{data.name}</div>
    </div>
  ) : (
    <div className="w-full flex justify-between">
      <div className="bg-black w-[40px] h-[40px] rounded-full"></div>
      <div>{data.name}</div>
    </div>
  );
}

export default PostOwner;
