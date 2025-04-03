import CryptoList from "./Component/CryptoList.jsx";
import {QueryClient,QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools  } from '@tanstack/react-query-devtools';


function App() {

 const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
        <CryptoList/>
        <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
