import { QueryClient } from "@tanstack/react-query";
import UserSelection from "./page/UserSelection";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";

const queryClient = new QueryClient();

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserSelection />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;