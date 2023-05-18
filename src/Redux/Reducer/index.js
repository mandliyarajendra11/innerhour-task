const initialState={
    isLoading:false,
    isError:false,
    products:[],
    singleLoading:false,
    singleProduct:{}
}

const ProductReducer=(state=initialState,action)=>{
    switch(action.type){
        case "Loading":
            return {
                ...state,
                isLoading:true
            }
        case "Api_Data":
            return {
                ...state,
                isLoading:false,
                products:action.payload
            }
        case "Api_Error":
            return {
                ...state,
                isError:true
            }
             default :return state
    }
}

export default ProductReducer