import axios from 'axios';
import apiKey from './ApiKey';
const getDominanceData = async () => {
    try{
      const response = await axios.get('https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=' + apiKey.key)
      const data = response.data;
      return data.data
    }
    catch (error){
      console.log(error.message)
    }
  }
  export default getDominanceData;