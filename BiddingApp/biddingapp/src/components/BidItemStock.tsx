import { useNavigate } from "react-router-dom";
import { productItemsPropType } from "../type/type";

function BidItemStock({ element }: productItemsPropType) {
  const navigate = useNavigate();
  return (
    <>
      {element.sold ? (
        <div className="w-[116px] h-[44px] rounded-[4px] bg-slate-100 mt-[20px] flex items-center justify-center">
          <span>Sold Out</span>
        </div>
      ) : (
        <button
          className="w-[116px] h-[44px] rounded-[4px] bg-black mt-[20px]"
          onClick={() => navigate("/bidnow", { state: element })}
        >
          <span className="text-white">Place Bid</span>
        </button>
      )}
    </>
  );
}

export default BidItemStock;