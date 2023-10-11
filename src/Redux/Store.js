import { createStore, combineReducers, applyMiddleware } from "redux";
import { inventoryReducer } from "./InventoryRedux";
import thunk from "redux-thunk";
import { salesReducer } from "./SalesRedux";
const allReducers = combineReducers({
  itemsReducer: inventoryReducer,
  salesReducer: salesReducer,
});
export const store = createStore(allReducers, applyMiddleware(thunk));
