import React from "react";
import { productElementPropType } from "../type/type";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

function SelectedProductPage() {
  const {state} = useLocation();
  console.log(state.features);
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f0f4fb]">
      <div className="flex gap-[20px]">
        <div>
    {/* {element.features} */}
        </div>
      </div>
    </div>
  );
}

export default SelectedProductPage;
