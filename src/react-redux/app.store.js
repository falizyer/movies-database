import {createStore} from "redux";
import {appReducer} from "./app.reducer";

export const AppStore = createStore(appReducer);
