import { ActionTypes } from "../Actions/ActionTypes";
const initialState = {
    products: [],
    cart: [],
   
}
export const setproductReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ActionTypes.SETPRODUCTS:
            return { ...state, products: payload }
        default:
            return state;
    }
}


export const setcartReducer = (state = initialState, { type, payload }) => {
    console.log("cartdataaaaa"+JSON.stringify(payload))

    switch (type) {
        case ActionTypes.SETCARTITEMS:
            return {
                ...state,
                cart: [...state.cart, payload]
            }
        case ActionTypes.DELETEITEM:
            // let data = state.cart.filter((data)=>data.id!==payload.value.id) 
            // console.log("dataaaa"+JSON.stringify(data))   
            // console.log('.....'+JSON.stringify(state.cart))   
            // console.log('PAYLOAD',payload.value.id)
            // console.log('index'+payload.index)
                let rslt=state.cart.splice(payload.index,1)
            // console.log("rslttttt"+JSON.stringify(rslt))
            // const rslt=state.cart.splice(payload.index,payload.index+1)
            
            // console.log("...."+JSON.stringify(rslt))
                return{
                    ...state,
                     cart:[...state.cart]
                }
        default:
            return state
    }
}

// export const DeleteitemReducer = (state, { type, payload }) => { 
//     console.log("Dpayload" + JSON.stringify(payload))
//     console.log(state)
//     console.log('....' +state.cart)
//     switch (type) {
//         case ActionTypes.DELETEITEM:
//             return {
//                 ...state,
//                 cart:[...state.cart.splice(payload,1)]
//             }
            
//                 // ...state,
//                 // cart:state.cart.filter(cartItm=>cartItm!==payload)
//         default:
//             return state
//     }
// }

export const SelectedProductReducer=(state={},{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTEDPRODUCT:
            return{
                ...state,
            }
    
        default:
            return state;
    }

}