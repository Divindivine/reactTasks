import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  auctionElementType,
  auctionListType,
  currentUserPropType,
  productElementPropType,
} from "../type/type";
import BiddersList from "../components/BiddersList";
import SpecificProductDetail from "../components/SpecificProductDetail";

function SelectedProductPage() {
  const { state } = useLocation();
  const currentProduct:productElementPropType = state;
  const auctionListString = localStorage.getItem("auctionlist");
  const auctionList: auctionListType = auctionListString
    ? JSON.parse(auctionListString)
    : [];
  const [amount, setamount] = useState<number>();
  let isTrue = false;
  let bid = 0;
  auctionList.map((product: auctionElementType) => {
    if (product.id === currentProduct.id) {
      bid = product.bids[0].bid;
    }
  });
const navigate = useNavigate();
  const handleBack = () =>{
    navigate("/products")
  }

  const currentUserString = localStorage.getItem("currentUser");
  const currentUser: currentUserPropType =
    currentUserString && JSON.parse(currentUserString);
  const handleBid = () => {
    if (amount && typeof bid === "number") {
      if (amount > bid) isTrue = true;
      else isTrue = false;
    }

    if (isTrue && amount !== undefined) {
      const exists = auctionList.some((obj) => obj.id === currentProduct.id);

      if (auctionList.length === 0 || exists === false) {
        const temp2 = [
          {
            name: currentUser.name,
            photo: currentUser.image,
            bid: amount,
          },
        ];
        const temp1 = currentProduct.id;
        auctionList.push({ id: temp1, bids: temp2 });
        localStorage.setItem("auctionlist", JSON.stringify(auctionList));
      } else {
        auctionList.map((element: auctionElementType) => {
          if (element.id === currentProduct.id) {
            element.bids.push({
              name: currentUser.name,
              photo: currentUser.image,
              bid: amount,
            });
          }
          element.bids.sort((a, b) => b.bid - a.bid);
        });
        localStorage.setItem("auctionlist", JSON.stringify(auctionList));
      }
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
        <button 
        className="w-[116px] h-[44px] rounded-[4px] bg-slate-300 text-black"
        onClick={handleBack}
         >Back</button>
        </div>
        <div className="w-[427px] flex flex-col font-poppins text-left ">
       <SpecificProductDetail currentProduct={currentProduct} bid={bid}/>
          <div className="flex flex-col max-h-[300px] overflow-scroll">
            <BiddersList auctionList={auctionList} currentProduct={currentProduct}/>
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
              onClick={() => handleBid()}
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
