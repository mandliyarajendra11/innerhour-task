import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getProduct } from '../Redux/Action/Api';
import { useDispatch } from "react-redux";
const Container = () => {
const Api = "https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=10"

 const dispatch  =useDispatch();


    useEffect(()=>{getProduct(Api,dispatch)},[])
 const Data=useSelector((e)=>e.ProductReducer);
    return (
    <div className='container'>
        {
            Data.isLoading?<h1>data loading please wait</h1>
            : Data.products.map((e)=>{
            {console.log(e)}
            return <div>
               <figure>
                </figure> 
            </div>
            
              }  )
        }
    </div>
  )
}

export default Container