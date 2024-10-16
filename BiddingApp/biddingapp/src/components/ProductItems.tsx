import { useMemo } from "react";
import { AUCTION_LIST } from "../constants";
import { auctionElementType, productItemsPropType } from "../type/type";
import BidItemStock from "./BidItemStock";

function ProductItems({ element }: productItemsPropType) {
  const auctionListString = localStorage.getItem(AUCTION_LIST);
  const auctionList = auctionListString && JSON.parse(auctionListString);
  const latestBidPrice = useMemo(() => {
    if (!auctionList?.length) {
      return;
    }
    const productDetails = auctionList.find(
      (item: auctionElementType) => item.id === element.id
    );
    return productDetails?.bids[0].price;
  }, [auctionList, element]);

  return (
    <div className="w-[269px] h-[348px] border-[1px] flex flex-col">
      <span className="font-bold text-[20px] leading-[30px] font-poppins text-left ml-[10px]">
        {element.features}
      </span>
      <div className="flex justify-between">
        <span className="font-bold text-[14px] leading-[21px] text-[#90a3bf] text-left ml-[10px]">
          {element.location}
        </span>
        <span className="font-bold text-[14px] leading-[21px] text-[#90a3bf] text-left mr-[10px]">
          House no: {element.id}
        </span>
      </div>

      <div
        className="w-[269px] h-[186px] rounded-[6px] mt-[20px]"
        style={{
          backgroundImage: `url(${element.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex justify-between">
        <div className="h-[44px] w-[77px] flex flex-col mt-[20px]">
          {
            <span
              className={`${
                latestBidPrice
                  ? "font-bold text-[20px]"
                  : "font-normal text-[14px] whitespace-nowrap"
              }`}
            >
              ${latestBidPrice || "0 Bid Not Yet Started"}
            </span>
          }

          <span className="font-semibold text-[14px]">Current Bid</span>
        </div>
        <div>
          <BidItemStock element={element} />
        </div>
      </div>
    </div>
  );
}

export default ProductItems;
