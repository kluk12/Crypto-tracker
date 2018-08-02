import axios from 'axios';

const coinMarketCapAxiosInstance = axios.create({
  baseURL: 'https://api.coinmarketcap.com/v2/',
});

const getCoinList = () =>
  coinMarketCapAxiosInstance.get("global/");

export default getCoinList;