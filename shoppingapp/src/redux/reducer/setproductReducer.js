import { ActionTypes } from "../Actions/ActionTypes";
const initialState={
    products:[],
    cart:[]
}
export const setproductReducer=(state=initialState,{type,payload})=>{
    
    switch (type){
        case ActionTypes.SETPRODUCTS:
            return {...state,products:payload}
        default:
            return state;
    }
}


export const setcartReducer=(state=initialState,{type,payload})=>{ 
    console.log(payload)
    switch (type) {
        case ActionTypes.SETCARTITEMS:            
            return {...state,
             cart:[...state.cart,payload]
        }             
        default:
            return state
    }
}