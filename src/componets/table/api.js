import axios from 'axios';

const coinMarketCapAxiosInstance = axios.create({
  baseURL: 'https://api.coinmarketcap.com/v2/',
});

const getCoinList = (start = 122) =>
  coinMarketCapAxiosInstance.get(`ticker/?limit=100&structure=array$start=${start}`);

export default getCoinList;