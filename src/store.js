import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";


const reducer = combineReducers({
user:userReducer
})

let inialState = {
}

const middleware = [thunk];
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  inialState,
  applyMiddleware(...middleware)
  // composeWithDevTools(applyMiddleware(...middleware))
);
export default store;