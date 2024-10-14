import { getAllJSDocTagsOfKind } from "typescript";
import { biddersListPropType } from "../type/type";

function BiddersList({ auctionList, currentProduct }: biddersListPropType) {
  return (
    <>
      {auctionList.map(
        (product) =>
          product.id === currentProduct.id &&
          product.bids.map((bidders) => (
            <div className="flex justify-between items-center mt-[20px] border-b border-black pr-[20px]"
            key={bidders.bid}>
              <div className="flex gap-[10px] items-center">
                <div
                  className="w-[50px] h-[50px] rounded-full"
                  style={{
                    backgroundImage: `url(${bidders.photo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <span className="text-[18px]">{bidders.name}</span>
              </div>
              <span className="text-[16px]">${bidders.bid}</span>
            </div>
          ))
      )}
    </>
  );
}

export default BiddersList;