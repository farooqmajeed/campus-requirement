import {combineReducers} from "redux"
import {routerReducer} from "react-router-redux"
// import {firedux} from '../Server/index'
import {Logins} from "./Login" 
import {Details} from "./Detail"
const rootReducer = combineReducers({
    Logins,
    Details,
    // firedux: firedux.reducer(),
    routing: routerReducer
})
export default rootReducer