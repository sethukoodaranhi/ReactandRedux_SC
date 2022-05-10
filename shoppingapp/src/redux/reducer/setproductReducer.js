import { ActionTypes } from "../Actions/ActionTypes";
const initialState={
    products:[]
}
export const setproductReducer=(state=initialState,{type,payload})=>{
    
    switch (type){
        case ActionTypes.SETPRODUCTS:
            return {...state,products:payload}
        default:
            return state;
    }
}


export const setcartReducer=(state={},{type,payload})=>{
   console.log('...data'+payload)
    switch (type) {
        case ActionTypes.SETCARTITEMS:            
            return {...state,...payload}  
        default:
            return state
    }
}