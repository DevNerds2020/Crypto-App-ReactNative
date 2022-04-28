import axios from "axios";


const getFearAndGreedIndex= async () =>{
    const response = await axios.get("https://api.alternative.me/fng/?limit=1");
    const data = response.data;
    return data.data;
}
export default getFearAndGreedIndex;