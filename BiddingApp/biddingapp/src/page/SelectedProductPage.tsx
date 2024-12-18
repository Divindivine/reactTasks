import { useState } from "react";
import { useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";
import BiddersList from "../components/BiddersList";
import SpecificProductDetail from "../components/SpecificProductDetail";
import {
  auctionElementType,
  auctionListType,
  currentUserPropType,
  productElementPropType,
} from "../type/type";
import { AUCTION_LIST, CURRENT_USER } from "../constants";

function SelectedProductPage() {
  const { state } = useLocation();
  const currentProduct: productElementPropType = state;
  const auctionListString = localStorage.getItem(AUCTION_LIST);
  const auctionList: auctionListType = auctionListString
    ? JSON.parse(auctionListString)
    : [];
  const [amount, setamount] = useState<number>();
  let isTrue = false;
  let bid = 0;
  auctionList.map((product: auctionElementType) => {
    if (product.id === currentProduct.id) {
      bid = product.bids[0].price;
    }
  });
  const currentUserString = localStorage.getItem(CURRENT_USER);
  const currentUser: currentUserPropType =
    currentUserString && JSON.parse(currentUserString);
  const handleBid = (
    user: currentUserPropType,
    product: productElementPropType
  ) => {
    if (amount && typeof bid === "number") {
      if (amount > bid) {
        isTrue = true;
      }
    }

    if (isTrue && amount !== undefined) {
      const exists = auctionList.some((obj) => obj.id === currentProduct.id);
      if (auctionList.length === 0 || exists === false) {
        const temp2 = [
          {
            name: currentUser.name,
            photo: currentUser.image,
            price: amount,
          },
        ];
        const temp1 = currentProduct.id;
        auctionList.push({ id: temp1, bids: temp2 });
      } else {
        auctionList.map((element: auctionElementType) => {
          if (element.id === currentProduct.id) {
            element.bids.push({
              name: currentUser.name,
              photo: currentUser.image,
              price: amount,
            });
          }
          element.bids.sort((a, b) => b.price - a.price);
        });
      }
      localStorage.setItem(AUCTION_LIST, JSON.stringify(auctionList));
      window.location.reload();
    } else {
      alert("please enter amount more than the currentbid");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f0f4fb]">
      <div className="flex gap-[20px]">
        <div className="flex flex-col justify-between">
          <div
            className="w-[531px] h-[340px] rounded-[15px]"
            style={{
              backgroundImage: `url(${currentProduct.image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <BackButton page={"/products"} />
        </div>
        <div className="w-[427px] flex flex-col font-poppins text-left ">
          <SpecificProductDetail currentProduct={currentProduct} bid={bid} />
          <div className="flex flex-col max-h-[300px] overflow-y-auto">
            <BiddersList
              auctionList={auctionList}
              currentProduct={currentProduct}
            />
          </div>
          <div className="flex justify-between items-center">
            <input
              placeholder="Enter Amount"
              type="number"
              className="w-[150px] h-[50px] rounded-[6px] mt-[20px]"
              onChange={(e) => setamount(+e.target.value)}
            />
            <button
              className="w-[116px] h-[44px] rounded-[4px] bg-black mt-[20px] text-white"
              onClick={() => handleBid(currentUser, currentProduct)}
            >
              Bid Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedProductPage;
