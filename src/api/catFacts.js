import axios from "axios";

export const fetchCatFacts=async ()=>{
    const responseData=await axios.get('https://cat-fact.herokuapp.com/facts')
    return responseData.data
}
