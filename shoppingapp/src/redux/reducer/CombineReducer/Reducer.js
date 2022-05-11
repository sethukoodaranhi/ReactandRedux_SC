import { combineReducers } from "redux";
import { setproductReducer } from "../setproductReducer";
import { setcartReducer } from "../setproductReducer";
import { DeleteitemReducer } from "../setproductReducer";
const Reducer=combineReducers({
    allProducts:setproductReducer,
    cartPrdct:setcartReducer,
    dltprdct:DeleteitemReducer
})
export default Reducer;