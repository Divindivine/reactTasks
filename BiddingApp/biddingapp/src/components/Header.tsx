import notificationFalse from "../images/notificatin1.jpg";
import notificationTrue from "../images/notification2.avif";
import { users } from "../data/users";
import { useState } from "react";

type headerElementsPropType = {
  notification: boolean;
  setnotification: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ notification, setnotification }: headerElementsPropType) {
  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString && JSON.parse(currentUserString);
  const [profileShowTrue, setprofileShowTrue] = useState(false);

  const profileShow = () => {
    setprofileShowTrue((prev: boolean) => !prev);
  };

  const handleProfileView = () => {

  }
 
  return (
    <>
      <div className="w-full h-[124px] border-[1px] flex justify-between items-center p-[20px]">
        <span className="font-bold text-[32px]">BIDHERE</span>
        <div className="flex gap-[30px]">
          {notification === true ? (
            <div
              className="w-[50px] h-[50px] rounded-full"
              style={{
                backgroundImage: `url(${notificationTrue})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          ) : (
            <div
              className="w-[50px] h-[50px] rounded-full"
              style={{
                backgroundImage: `url(${notificationFalse})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          )}
          <div
            className="w-[50px] h-[50px] rounded-full"
            style={{
              backgroundImage: `url(${currentUser.image}})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            onClick={profileShow}
          ></div>
        </div>
      </div>
      {
        profileShowTrue && (
          <div className="absolute z-[10px] top-[130px] right-[10px] flex gap-[10px]"
          onClick={handleProfileView}>
            {
              users.map((user) => (
                <div
              className="w-[50px] h-[50px] rounded-full"
              style={{
                backgroundImage: `url(${user.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
              ))
            }
             
            
          </div>
        )
      }
      
    </>
  );
}

export default Header;
