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
export const DeleteItem=(value,index)=>{  
    // console.log('index'+index)
    // console.log('value',value)
    return{
        type:ActionTypes.DELETEITEM,
        payload:{
            index:index,
            value:value
        }
       
    }
    
}
export const SelectedProduct=(product)=>{
    return{
        type:ActionTypes.SELECTEDPRODUCT,
        payload:product
    }
}