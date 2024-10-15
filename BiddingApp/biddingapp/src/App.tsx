import "./App.css";
import InitialPage from "./page/InitialPage";
import { Routes, Route } from "react-router-dom";
import SelectedProductPage from "./page/SelectedProductPage";
import HomePage from "./page/HomePage";
import { createContext } from "react";
import { useState } from "react";
import { currentUserPropType, userPropType } from "./type/type";   
import { CURRENT_USER } from "./constants";

export const UserContext = createContext<userPropType | null>(null);

function App() {
  const user = localStorage.getItem(CURRENT_USER);
  const currentuser = user && JSON.parse(user);
  const [currentUser, setcurrentUser] = useState(
    currentuser || ({} as currentUserPropType)
  );

  localStorage.setItem("currentUser", JSON.stringify(currentUser));

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
