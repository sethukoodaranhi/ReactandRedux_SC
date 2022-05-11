import { ActionTypes } from "../Actions/ActionTypes";
const initialState={
    products:[],
    cart:[],
    DltItm:[]
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

export const DeleteitemReducer=(state=initialState,{type,payload})=>{
    console.log(state)
    console.log("Dpayload"+payload)
    switch (type) {
        case ActionTypes.DELETEITEM:
            return {...state,
                cart: state.cart.filter((item, DltItm) => DltItm !== payload)}        
        default:
           return state
    }
}