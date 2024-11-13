import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import HomePage from "./page/HomePage";


function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
