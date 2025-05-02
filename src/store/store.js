import { legacy_createStore as createStore } from "redux";
import myReducer from "./reducers/reducers";


export const myStore  = createStore(myReducer);