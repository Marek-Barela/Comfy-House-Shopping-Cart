import { combineReducers } from "redux";
import productsCartReducer from "./productsCartReducer";

export default combineReducers({
  products: productsCartReducer
});
