import { useState } from "react";
import { userImages } from "../images/userImage";
import BackButton from "../components/BackButton";
import CurrentUserProfile from "../components/CurrentUserProfile";
import PostField from "../components/PostField";

function HomePage() {
  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString
    ? JSON.parse(currentUserString)
    : undefined;
  const [profileClicked, setProfileClicked] = useState(false);
  if (!currentUser)
    return (
      <div className="w-screen h-screen bg-[#72A0C1] flex items-center justify-center text-[40px]">
        NO USER FOUND!!!
      </div>
    );
  return (
    <div className="w-screen h-screen bg-[#72A0C1] flex flex-col relative">
      <div className="w-full flex justify-between items-center bg-slate-700 py-[20px] px-[50px]">
        <div
          className="w-[80px] h-[80px] rounded-full cursor-pointer"
          style={{
            backgroundImage: `url(${userImages[currentUser.imageID]})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          onClick={() => setProfileClicked(true)}
        ></div>
        <span className="text-[40px] font-mono text-white">MediaMorphic</span>
      </div>
      <PostField currentUser={currentUser} />
      {profileClicked && (
        <div className="absolute top-2 left-2 w-1/6 h-1/3 bg-white rounded-[10px] flex flex-col p-[5px] border-[10px] border-black">
          <div className="w-full" onClick={() => setProfileClicked(false)}>
            <BackButton />
          </div>
          <CurrentUserProfile currentUser={currentUser} />
        </div>
      )}
    </div>
  );
}

export default HomePage;
