import axios from "axios";


const TopTrendingCoins = async() => {
    try{
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending')
        const data = response.data 
        return data.coins
    }
    catch(error){
        console.log(error.message)
    }
}
export default TopTrendingCoins