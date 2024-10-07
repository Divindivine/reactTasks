import "./App.css";
import InitialPage from "./page/InitialPage";
import { Routes, Route } from "react-router-dom";
import SelectedProductPage from "./page/SelectedProductPage";
import HomePage from "./page/HomePage";
import { createContext } from "vm";
import { useState } from "react";
import { userPropType } from "./type/type";
import { create } from "domain";


export const UserContext = createContext()


function App() {
  const [currentUser, setcurrentUser] = useState({
    name: "Divin",
    image:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
  });
  const num = 0;
  return (
    <div className="App">
      <UserContext.Provider value={{ currentUser, setcurrentUser }}>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="products" element={<HomePage />} />
          <Route path="bidnow" element={<SelectedProductPage />}></Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
