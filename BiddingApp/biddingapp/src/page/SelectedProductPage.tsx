import React from "react";
import { productElementPropType } from "../type/type";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

function SelectedProductPage() {
  const { state } = useLocation();
  const productsString = localStorage.getItem("products");
  const products = productsString && JSON.parse(productsString);
  
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
            ${state.currentBid}
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
          <div className="flex justify-between items-center mt-[20px] border-b border-black">
            <div className="flex gap-[10px] items-center">
              <div className="w-[25px] h-[25px] rounded-full"></div>
              <span className="text-[18px]">divn</span>
            </div>
            <span className="text-[16px]">$340</span>
          </div>
          <div className="flex justify-between items-center">
            <input placeholder="Enter Amount" className="w-[150px] h-[50px] rounded-[6px] mt-[20px]"/>
            <button
              className="w-[116px] h-[44px] rounded-[4px] bg-black mt-[20px] text-white"
              >Bid Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedProductPage;
