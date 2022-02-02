import CryptoCurrency from "./CryptoCurrency"

const Coins = ({ coins, coinImages }) => {
    const coinData = []
    const coinLogos = []
    
    for (const item in coinImages){ coinLogos.push(coinImages[item])}

    for (const item in coins){ coinData.push(coins[item]) }
    console.log(coinLogos)
    return (
        <div className="coins">
            {coinData.map( (coin) => (<CryptoCurrency key={coin.id} coin={coin}/>) )}
            {/* {coinLogos.map( (logo) => (<CryptoCurrency key={logo.id+1000} logo={logo} />))} */}
        </div>
    )
    
}

export default Coins