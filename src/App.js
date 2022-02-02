import { useState, useEffect } from 'react';
import Header from './components/Header'
import Coins from './components/Coins'
import { selectOptions } from '@testing-library/user-event/dist/select-options';

const axios = require('axios');


function App() {
  const [coins, setCoins] = useState([]);
  const [coinImages, setCoinImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?slug=bitcoin,ethereum,litecoin,dogecoin,cardano,chainlink', {
        headers: {
          'X-CMC_PRO_API_KEY': 'f9e71c11-5eef-4577-8d88-320b9064baad',
        },
      })
      .then(resImage => {
        console.log(resImage.data)
        setCoinImages(resImage.data.data);
      })
      .catch(error => console.log(error))
    }
  fetchData()
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=bitcoin,ethereum,litecoin,dogecoin,cardano,chainlink', {
        headers: {
          'X-CMC_PRO_API_KEY': 'f9e71c11-5eef-4577-8d88-320b9064baad',
        },
      })
      .then(res => {
        console.log(res.data)
        setCoins(res.data.data);
      })
      .catch(error => console.log(error))
    }
  fetchData()
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=bitcoin,ethereum,litecoin,dogecoin,cardano,chainlink', {
      headers: {
        'X-CMC_PRO_API_KEY': 'f9e71c11-5eef-4577-8d88-320b9064baad',
      },
      })
      .then(res => {
        console.log(res.data)
        setCoins(res.data.data);
      })
      .catch(error => console.log(error))
    }, 60000);
    return () => clearInterval(interval);
  }, []);
    
    

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Coins coins={coins} coinImages={coinImages}/>
      </div>
    </div>
  )};

export default App;
