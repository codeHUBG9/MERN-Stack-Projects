import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import countReducer from "../reducers/countReducer";

const rootReducer = combineReducers({
  count: countReducer,
});

let initialState = {};
const middleware = [thunk];

const configureStore = () => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
};

export default configureStore;
