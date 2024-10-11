import { specificProductDetailPropType } from "../type/type";

function SpecificProductDetail({
  currentProduct,
  bid,
}: specificProductDetailPropType) {
  return (
    <>
      <span className="font-bold text-[20px] leading-[30px]">
        {currentProduct.features}
      </span>
      <span className="font-bold text-[14px] leading-[21px] text-[#90a3bf] text-left mt-[10px]">
        {currentProduct.location}
      </span>

      <span className="font-bold text-[32px] leading-[40px] mt-[20px]">
        ${bid}
      </span>

      <span className="font-semibold text-[14px] opacity-40">Current Bid</span>
      <div className="flex justify-start items-center w-full mt-[20px] gap-[5px]">
        <div className="w-[10px] h-[10px] bg-[#fc9905] rounded-full"></div>
        <span className="text-[14px] font-bold font-poppins">Live Auction</span>
      </div>
    </>
  );
}

export default SpecificProductDetail;
