import {useQuery} from '@tanstack/react-query';
import CryptoApi from "../APi/CryptoApi";
const CryptoList = () => {

  const { data, isLoading,error} = useQuery({
    queryKey: ["post"],
    queryFn: async () =>{
      return await CryptoApi();
    }
  });

  console.log("Loading:", isLoading);
  console.log("Fetched Crypto Data:", data);
  console.log("Error:", error);

  return(
    <>
      <div className="container">
        <h1 className="title">Top 10 Cryptocurrencies</h1>
        <ul className="crypto-list">
          {data.map((elem) =>{
            return(
          <li className="crypto-item" key={elem.id}>
            <img src={elem.image} alt="Crypto" className="crypto-image"/>
            <div className="crypto-details">
              <h2 className="crypto-name">{elem.name}</h2>
              <p className="crypto-price">Price: {elem.current_price}</p>
              <p className="crypto-marketcap">Market Cap: ${elem.market_cap}</p>
            </div>
          </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default CryptoList;