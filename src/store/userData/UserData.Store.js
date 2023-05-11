import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"; 
import UserDataReducer from "./UserData.Reducer";

const reducers = combineReducers({ userDataState: UserDataReducer });
const middleware = [thunk];
const thisState = {};
export const initStore = legacy_createStore(
  reducers,
  thisState,
  applyMiddleware(...middleware),
);
 