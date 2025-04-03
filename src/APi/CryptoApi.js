import axios from "axios";

const CryptoApi = async () =>{
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        return response.data;
    }
    catch (e) {
        console.log(`Error Occcured While Fetching Data:${e}`);
        return [];
    }
}

export default CryptoApi