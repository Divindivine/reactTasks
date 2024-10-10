import { useState } from "react";
import { products } from "../data/products";
import ProductItems from "../components/ProductItems";
import Header from "../components/Header";
import { productElementPropType } from "../type/type";

function HomePage() {
  const [notification, setnotification] = useState(false);
  const tempCurrentUser = localStorage.getItem("currentUser");
  if (tempCurrentUser !== null) {
    return (
      <div className="w-full h-screen bg-white">
        <Header notification={notification} setnotification={setnotification} />
        <div className="w-full flex justify-center">
          <div className="w-[1052px] py-[80px] flex flex-wrap gap-[30px]">
            {products.map((element,index) => (
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
