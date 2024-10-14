import { useState } from "react";
import Header from "../components/Header";
import ProductItems from "../components/ProductItems";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

function HomePage() {
  const [notification, setnotification] = useState(false);
  const tempCurrentUser = localStorage.getItem("currentUser");
  const navigate = useNavigate();
  const handleBack = (page:string) => {
    navigate(page);
  };
  if (tempCurrentUser !== null) {
    return (
      <div className="w-full h-screen bg-white">
        <Header notification={notification} setnotification={setnotification} />
        {/* <button
          className="w-[116px] h-[44px] rounded-[4px] bg-black mt-[20px] text-white absolute z-1 left-[30px]"
          onClick={() => handleBack("/")}
        >
          Back
        </button> */}
        <BackButton page="/"/>
        <div className="w-full flex justify-center">
          <div className="w-[1052px] py-[80px] flex flex-wrap gap-[30px]">
            {products.map((element, index) => (
              <ProductItems key={index} element={element} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span className="text-[32px]">Cant find the User</span>
      </div>
    );
  }
}

export default HomePage;
