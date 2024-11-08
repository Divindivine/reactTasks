import React from "react";
import { CurrentUserPropType } from "../type/type";
import { userImages } from "../images/userImage";

function CurrentUserProfile({ currentUser }: CurrentUserPropType) {
  return (
    <div className="w-full flex flex-col gap-[20px] items-start p-[10px] text-[20px] font-normal">
      <div
        className="w-[80px] h-[80px] rounded-full self-center"
        style={{
          backgroundImage: `url(${
            userImages[currentUser.imageID ? currentUser.imageID : 0]
          })`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-full truncate">
        userId: <span className="font-mono font-bold">{currentUser.id}</span>
      </div>
      <div className="w-full truncate">
        name: <span className="font-mono font-bold">{currentUser.name}</span>
      </div>
      <div className="w-full truncate">
        email: <span className="font-mono font-bold">{currentUser.email}</span>
      </div>
      <div className="w-full truncate">
        gender:{" "}
        <span className="font-mono font-bold">{currentUser.gender}</span>
      </div>
    </div>
  );
}

export default CurrentUserProfile;
