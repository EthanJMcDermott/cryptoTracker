const CryptoCurrency = ( {coin} ) => {
    return (
        <div className="cryptoCurrency">
            <div className="coinInfo">
                {coin.name}
            </div>
            <div className="coinInfo">
                {coin.symbol}
            </div>
            <div className="coinInfo">
                ${coin.quote.USD.price.toFixed(2)}
            </div>
            <div className="coinInfo" style={{color: coin.quote.USD.percent_change_24h > 0 ? "green" : "red"}}>
                {coin.quote.USD.percent_change_24h.toFixed(2)}
            </div>
        </div>
    )
}

export default CryptoCurrency