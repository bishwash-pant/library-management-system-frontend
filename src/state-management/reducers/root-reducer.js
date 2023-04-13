import { combineReducers } from "redux";
import loaderReducers from "./loader-reducers";
import authReducers from "./auth-reducers";

const rootReducer = combineReducers({
    loadState: loaderReducers,
    authState: authReducers
});
export default rootReducer;