import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import UserSelection from "./page/UserSelection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserSelection />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
