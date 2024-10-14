import notificationFalse from "../images/notificatin1.jpg";
import notificationTrue from "../images/notification2.avif";
import { users } from "../data/users";
import { useState } from "react";
import {
  currentUserPropType,
  notificationElementType,
  headerElementsPropType,
} from "../type/type";

function Header({ notification, setnotification }: headerElementsPropType) {
  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString && JSON.parse(currentUserString);
  const [profileShowTrue, setprofileShowTrue] = useState(false);
  const profileShow = () => {
    setprofileShowTrue((prev: boolean) => !prev);
  };

  const notificationsShowString = localStorage.getItem("bidNotification");
  const notificationsShow =
    notificationsShowString && JSON.parse(notificationsShowString);
  if (notificationsShow === null) {
    setnotification(false);
  } else {
    notificationsShow.map((element: notificationElementType) => {
      if (element.name !== currentUser.name) {
        if (element.history.length !== 0) {
          console.log(element);
          setnotification(true);
        }
      }
    });
  }
  const handleProfileView = (user: currentUserPropType) => {
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        name: user.name,
        image: user.image,
      })
    );
    window.location.reload();
  };

  const [showNotification, setshowNotification] = useState(false);

  const showNotifications = () => {
    setshowNotification((prev) => !prev);
  };

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
              onClick={showNotifications}
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
      {profileShowTrue && (
        <div className="absolute z-[10px] top-[130px] right-[10px] flex gap-[10px]">
          {users.map((user) => (
            <div
              className="w-[50px] h-[50px] rounded-full"
              style={{
                backgroundImage: `url(${user.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={() => handleProfileView(user)}
            ></div>
          ))}
        </div>
      )}
      <div className="flex flex-col absolute top-[130px] right-[20px] gap-[5px]">
        {showNotification &&
          notificationsShow.map((notification: notificationElementType) => (
            <div className="h-[30px] bg-slate-100 border-[2px] p-[5px]">{notification.history}</div>
          ))}
      </div>
    </>
  );
}

export default Header;


