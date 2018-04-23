import {createStore} from "redux";
import {AppActions} from "./app.actions";

const initState = {
    search_request: "",
    movieList: [],
    movieTotal: 0
};
export const AppStore = createStore(function appReducer(state = initState, action) {
    switch (action.type) {
        case AppActions.APPLICATION.IS_LOADING:
            break;
        case AppActions.MOVIE_LIST.IS_LOADED:
            return Object.assign({}, state, {
                movieList: action.payload.movieList
            });
        case AppActions.MOVIE_SEARCH.BUTTON_PRESSED:
            return Object.assign({}, state, {
                search_request: action.payload.search_request
            });
        default:
            break;
    }
    return state;
});
