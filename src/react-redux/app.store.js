import {createStore} from "redux";
import {AppActions} from "./app.actions";

const initState = {
    movieList: []
};
export const AppStore = createStore(function appReducer(state = initState, action) {
    switch (action.type) {
        case AppActions.APPLICATION.IS_LOADING:
            break;
        case AppActions.MOVIE_LIST.IS_LOADED:
            return Object.assign({}, state, {
                movieList: action.payload.movieList
            });
        default:
            break;
    }
    return state;
});
