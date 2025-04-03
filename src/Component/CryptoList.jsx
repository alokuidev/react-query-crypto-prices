const CryptoList = () => {

  return(
    <>
      <div className="container">
        <h1 className="title">Top 10 Cryptocurrencies</h1>
        <ul className="crypto-list">
          <li className="crypto-item">
            <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" alt="Crypto" className="crypto-image"/>
            <div className="crypto-details">
              <h2 className="crypto-name">Bitcoin</h2>
              <p className="crypto-price">Price: $12345</p>
              <p className="crypto-marketcap">Market Cap: $1,000,000,000</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default CryptoList;