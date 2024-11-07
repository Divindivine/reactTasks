import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserSelection from "./page/UserSelection";
import HomePage from "./page/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/selectuser" element={<UserSelection />} />
        </Routes>
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
