import {createStore, applyMiddleware} from "redux";
import {appReducer} from "./app.reducer";
import thunk from "redux-thunk";

export const AppStore = createStore(appReducer, applyMiddleware(thunk));
