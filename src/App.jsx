import CryptoList from "./Component/CryptoList.jsx";
import {QueryClient, QueryClientProvider } from "@tanstack/react-query";


function App() {

 const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
        <CryptoList/>
    </QueryClientProvider>
  )
}

export default App
