import { Link, useNavigate, useNavigation } from "react-router-dom";
import { productElementPropType, productItemsPropType } from "../type/type";

function ProductItems({ element }: productItemsPropType) {
  const ProductPage = useNavigate();
  return (
    <div className="w-[269px] h-[348px] border-[1px] flex flex-col">
      <span className="font-bold text-[20px] leading-[30px] font-poppins text-left ml-[10px]">
        {element.features}
      </span>
      <span className="font-bold text-[14px] leading-[21px] text-[#90a3bf] text-left ml-[10px]">
        {element.location}
      </span>
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
          <span className="font-bold text-[20px]">${element.currentBid}</span>
          <span className="font-semibold text-[14px]">Current Bid</span>
        </div>
        <div>
          {element.sold ? (
            <div className="w-[116px] h-[44px] rounded-[4px] bg-slate-100 mt-[20px] flex items-center justify-center">
              <span>Sold Out</span>
            </div>
          ) : (
            <button
              className="w-[116px] h-[44px] rounded-[4px] bg-black mt-[20px]"
              onClick={() => ProductPage("/bidnow",{state:element})}
            >
              <span className="text-white">Place Bid</span>
            </button>
          )}
          {}
        </div>
      </div>
    </div>
  );
}

export default ProductItems;
