import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {IoIosClose} from 'react-icons/io'
import { single } from '../Redux/Action'
const SingleProduct = () => {
 const {singleProduct, singleLoading}=useSelector((e)=>e.ProductReducer); 
 const  dispatch=useDispatch() 
    return (
    <div className="user-login" >
        
      {
        singleLoading?<h3>data is loading please wait</h3>:
        <div className='single'>
         <IoIosClose className='CloseIcon' onClick={()=>dispatch(single("singleDisplayF")) }/>
            <img src={singleProduct.thumb} alt={singleProduct.title}/>
          <h3>{singleProduct.title}</h3>
          <div className='singleBody' dangerouslySetInnerHTML={{__html: singleProduct.body}}></div>
          
        </div>
      }
    {console.log(JSON.stringify( singleProduct.body))}
    </div>
  )
}

export default SingleProduct