import { useState } from "react";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import ProductItems from "../components/ProductItems";
import { products } from "../data/products";
import { CURRENT_USER } from "../constants";

function HomePage() {
  const [notification, setnotification] = useState(false);
  const currentUser = localStorage.getItem(CURRENT_USER);

  if (!currentUser) {
    return (
      <div>
        <span className="text-[32px]">Cant find the User</span>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-white">
      <Header notification={notification} setnotification={setnotification} />
      <BackButton page="/" />
      <div className="w-full flex justify-center">
        <div className="w-[1052px] py-[80px] flex flex-wrap gap-[30px]">
          {products.map((element, index) => (
            <ProductItems key={index} element={element} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
