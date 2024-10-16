import { auctionElementType, currentUserPropType } from "../type/type";

type notificationPropType = {
  showNotification: boolean;
  auctionList: auctionElementType[];
  currentUser: currentUserPropType;
};

function Notifications({
  showNotification,
  auctionList,
  currentUser,
}: notificationPropType) {
  return (
    <div className="flex flex-col bg-slate-100 border-[2px] border-black absolute top-[130px] right-[20px] gap-[5px]">
      {showNotification &&
        auctionList.map(
          (house: auctionElementType) =>
            house.bids[0].name !== currentUser.name && (
              <div key={house.id} className="h-[30px] p-[5px] font-poppins mx-[10px] border-b-[1px] ">
                {house.bids[0].name} has bidded ${house.bids[0].price} for the
                house no:{house.id}
              </div>
            )
        )}
    </div>
  );
}

export default Notifications;
