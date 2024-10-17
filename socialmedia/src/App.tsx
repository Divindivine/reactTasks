import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserSelection from "./page/UserSelection";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserSelection />
    </QueryClientProvider>
  );
}

export default App;
