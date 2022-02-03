import { useState, useEffect } from 'react';
import Header from './components/Header'
import Coins from './components/Coins'
import Search from './components/Search'
import { selectOptions } from '@testing-library/user-event/dist/select-options';

const axios = require('axios');


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?slug=bitcoin,ethereum,litecoin,dogecoin,cardano,chainlink', {
  //       headers: {
  //         'X-CMC_PRO_API_KEY': 'f9e71c11-5eef-4577-8d88-320b9064baad',
  //       },
  //     })
  //     .then(resImage => {
  //       setCoinImages(resImage.data.data);
  //     })
  //     .catch(error => console.log(error))
  //   }
  // fetchData()
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
          'X-CMC_PRO_API_KEY': 'f9e71c11-5eef-4577-8d88-320b9064baad',
        },
      })
      .then(res => {
        setCoins(res.data.data);
      })
      .catch(error => console.log(error))
    }
  fetchData()
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': 'f9e71c11-5eef-4577-8d88-320b9064baad',
      },
      })
      .then(res => {
        setCoins(res.data.data);
      })
      .catch(error => console.log(error))
    }, 60000);
    return () => clearInterval(interval);
  }, []);
    
  const coinData = []

    for (const item in coins){ coinData.push(coins[item]) }

  return (
    <div className="wrapper">
      <Header />
      <Search search={search} setSearch={setSearch}/>
      <div className="content">
        <Coins coins={coinData.filter(coin => ((coin.name).toLowerCase()).includes(search.toLowerCase()))}/>
      </div>
    </div>
  )};

export default App;
