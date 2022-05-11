import { ActionTypes } from "./ActionTypes"
export const SetProducts=(products)=>{
    return{
        type:ActionTypes.SETPRODUCTS,
        payload:products
    }
}

export const setCartItems=(cartprduct)=>{
    
    return{
        type:ActionTypes.SETCARTITEMS,
        payload:cartprduct
    }
}
export const DeleteItem=(deleteitm)=>{
   
    return{
        type:ActionTypes.DELETEITEM,
        payload:deleteitm
    }
    
}