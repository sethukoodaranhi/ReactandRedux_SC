import { legacy_createStore as createStore} from 'redux'
// import { setproductReducer } from '../reducer/setproductReducer'
import Reducer from '../reducer/CombineReducer/Reducer'
const store=createStore(Reducer,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store