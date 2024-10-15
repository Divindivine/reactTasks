import { useEffect, useState } from "react";
import { users } from "../data/users";
import notificationFalse from "../images/notificatin1.jpg";
import notificationTrue from "../images/notification2.avif";
import {
  auctionElementType,
  currentUserPropType,
  headerElementsPropType,
} from "../type/type";
import { AUCTION_LIST, CURRENT_USER } from "../constants";

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
          auctionList.map(
            (house: auctionElementType) =>
              house.bids[0].name !== currentUser.name && (
                <div className="h-[30px] bg-slate-100 border-[2px] p-[5px]">
                  {house.bids[0].name} has bidded ${house.bids[0].price} for the
                  house no:{house.id}
                </div>
              )
          )}
      </div>
    </>
  );
}

export default Header;
