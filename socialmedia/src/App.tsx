import { QueryClientProvider, QueryClient } from "react-query";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserSelection from "./page/UserSelection";
import RQSuperHeroes from "./page/RQSuperHeroes";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<UserSelection />} />
        <Route path="/RQheroes" element={<RQSuperHeroes />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
