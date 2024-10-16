import { useEffect, useState } from "react";
import { AUCTION_LIST, CURRENT_USER } from "../constants";
import notificationFalse from "../images/notificatin1.jpg";
import notificationTrue from "../images/notification2.avif";
import { auctionElementType, headerElementsPropType } from "../type/type";
import Notifications from "./Notifications";
import Profiles from "./Profiles";

function Header({ notification, setnotification }: headerElementsPropType) {
  const currentUserString = localStorage.getItem(CURRENT_USER);
  const currentUser = currentUserString && JSON.parse(currentUserString);
  const auctionListString = localStorage.getItem(AUCTION_LIST);
  const auctionList = auctionListString && JSON.parse(auctionListString);
  const [profileShowTrue, setprofileShowTrue] = useState(false);
  const profileShow = () => {
    setprofileShowTrue((prev: boolean) => !prev);
  };

  useEffect(() => {
    if (!auctionList) {
      setnotification(false);
      return;
    }

    auctionList.map((house: auctionElementType) => {
      if (house.bids[0].name !== currentUser.name) {
        setnotification(true);
        return;
      }
    });
  }, [auctionList, currentUser]);

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
              className="w-[50px] h-[50px] rounded-full cursor-pointer"
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
            className="w-[50px] h-[50px] rounded-full cursor-pointer"
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
      {profileShowTrue && <Profiles />}
      <Notifications
        showNotification={showNotification}
        auctionList={auctionList}
        currentUser={currentUser}
      />
    </>
  );
}

export default Header;
