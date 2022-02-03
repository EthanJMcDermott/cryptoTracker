import CryptoCurrency from "./CryptoCurrency"

const Coins = ({ coins }) => {
    
    // for (var i=0; i<coinData.length; i++) {
    //     coinData[i].logo = coinLogos[i].logo
    // }
    // var newLogo = coinLogos[0].logo
    // console.log(coinImages[2])
    // console.log(coinData[0])
    // coinData[0].logo = coinLogos[0].logo
    // console.log(coinLogos)
    // console.log(coinData[0].logo)
    return (
        <div className="coins">
            <div className="coinsHeader">
                <div className="coinInfoHeader">
                    Name
                </div>
                <div className="coinInfoHeader">
                    Symbol
                </div>
                <div className="coinInfoHeader">
                    Price (USD)
                </div>
                <div className="coinInfoHeader">
                    Last 24 hours
                </div>
            </div>
            {coins.map( (coin) => (<CryptoCurrency key={coin.id} coin={coin}/>) )}
        </div>
    )
    
}

export default Coins