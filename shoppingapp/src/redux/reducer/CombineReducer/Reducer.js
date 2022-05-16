import { combineReducers } from "redux";
import { SelectedProductReducer, setproductReducer } from "../setproductReducer";
import { setcartReducer } from "../setproductReducer";
// import { DeleteitemReducer } from "../setproductReducer";
const Reducer=combineReducers({
    allProducts:setproductReducer,
    cartPrdct:setcartReducer,
    product:SelectedProductReducer
    
})
export default Reducer;