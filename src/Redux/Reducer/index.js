const initialState={
    isLoading:false,
    isError:false,
    products:[],
    singleDisplay:false,
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
            case "singleDisplayT":
                return {
                    ...state,
                    singleDisplay:true
                }
                case "singleDisplayF":
                return {
                    ...state,
                    singleDisplay:false
                }
                case "singleLoading":
                    return {
                        ...state,
                        singleLoading:true
                    }
                case "single_Product":
                    return{
                        ...state,
                        singleLoading:false,
                        singleProduct:action.payload
                    }

             default :return state
    }
}

export default ProductReducer