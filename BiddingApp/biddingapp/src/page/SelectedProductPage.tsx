import React from "react";
import { auctionListType, productElementPropType } from "../type/type";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { useState } from "react";
import { triggerAsyncId } from "async_hooks";

function SelectedProductPage() {
  const { state } = useLocation();
  const auctionListString = localStorage.getItem("auctionlist");
  const auctionList = auctionListString ? JSON.parse(auctionListString) : [];
  const [amount, setamount] = useState<number>();
  let isTrue = false;
  const [currentbid, setcurrentbid] = useState<number>(0);
  auctionList &&
    auctionList.map((product: auctionListType) => {
      if (product.id === state.id) {
        setcurrentbid(product.bid[0].bid);
      }
    });

  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString && JSON.parse(currentUserString);
  console.log(currentUser);
  const handleBid = () => {
    if (amount) {
      if (amount > currentbid) isTrue = true;
      else isTrue = false;
    }

    if (isTrue) {
      if (auctionList.length === 0) {
        const temp = {
          name: currentUser.name,
          photo: currentUser.image,
          bid: amount,
        };
        const temp1 = state.id;
        auctionList.push({ temp1, temp });
      } else {
        auctionList.map((element: auctionListType) => {
          if (element.id === state.id) {
            auctionList.bid.push({
              name: currentUser.name,
              photo: currentUser.image,
              bid: amount,
            });
          }
        });
        const sortedBidList = auctionList.sort(
          (a: auctionListType, b: auctionListType) => {
            const highestBidA =
              a.bid.length > 0 ? Math.max(...a.bid.map((bid) => bid.bid)) : 0;
            const highestBidB =
              b.bid.length > 0 ? Math.max(...b.bid.map((bid) => bid.bid)) : 0;
            return highestBidB - highestBidA;
          }
        );
        localStorage.setItem("auctionlist", JSON.stringify(sortedBidList));
      }
    } else {
      alert("please enter amount more than the currentbid");
    }
    // if(amount){
    //   if(amount > currentbid){
    //     isTrue = true;
    //   }
    //   else{
    //     isTrue = false
    //   }
    // }
    // // amount ? (amount > currentBid ? (isTrue = true) : (isTrue = false)) : null;
    // if(amount && isTrue){
    //   products.map((product: productElementPropType) => {
    //     if (product.id === state.id) {
    //       product.bid.push({name:currentUser.name,photo:currentUser.photo,bid:amount})
    //     }
    //   });
    //   const sortedProducts = products.sort((a:productElementPropType, b:productElementPropType) => {
    //     const highestBidA = a.bid.length > 0 ? a.bid[0].bid : 0;
    //     const highestBidB = b.bid.length > 0 ? b.bid[0].bid : 0;
    //     return highestBidB - highestBidA;
    //   });
    //   localStorage.setItem("products",JSON.stringify(sortedProducts))
    // }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f0f4fb]">
      <div className="flex gap-[20px]">
        <div
          className="w-[531px] h-[340px] rounded-[15px]"
          style={{
            backgroundImage: `url(${state.image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="w-[427px] flex flex-col font-poppins text-left ">
          <span className="font-bold text-[20px] leading-[30px]">
            {state.features}
          </span>
          <span className="font-bold text-[14px] leading-[21px] text-[#90a3bf] text-left mt-[10px]">
            {state.location}
          </span>

          <span className="font-bold text-[32px] leading-[40px] mt-[20px]">
            ${currentbid}
          </span>

          <span className="font-semibold text-[14px] opacity-40">
            Current Bid
          </span>
          <div className="flex justify-start items-center w-full mt-[20px] gap-[5px]">
            <div className="w-[10px] h-[10px] bg-[#fc9905] rounded-full"></div>
            <span className="text-[14px] font-bold font-poppins">
              Live Auction
            </span>
          </div>
          {/* here ownwards bidders list */}
          {auctionList ? (
            auctionList.map(
              (product: auctionListType) =>
                product.id === state.id &&
                product.bid.map((bidders) => (
                  <div className="flex justify-between items-center mt-[20px] border-b border-black">
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
            )
          ) : (
            <span className="font-poppins text-[20px] font-semibold">
              you are first to bid
            </span>
          )}
          <div className="flex justify-between items-center">
            <input
              placeholder="Enter Amount"
              type="number"
              className="w-[150px] h-[50px] rounded-[6px] mt-[20px]"
              // value={amount}
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
