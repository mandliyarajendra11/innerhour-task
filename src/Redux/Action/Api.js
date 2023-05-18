import axios from "axios";
import { ALL } from ".";
const Api = "https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=10"


export const getProduct=async(url,dispatch)=>{
    dispatch(ALL("Loading"));
    try{
        const res=await axios.get(url);
        var products= await res.data.data
        dispatch(ALL("Api_Data",products))
    }
    catch(error){
        dispatch(ALL("Api_error"));
    }
}
