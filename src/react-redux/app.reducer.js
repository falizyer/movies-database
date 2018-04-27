import {AppActions} from "./app.actions";

const initState = {
    page: {
        pathname: "/",
        params: {}
    },
    search_request: "",
    movieList: [],
    movieInfo: {},
    movieTotal: 0
};
export function appReducer(state = initState, action) {
    switch (action.type) {
        case AppActions.APPLICATION.IS_PAGE_CHANGED:
            return Object.assign({}, state, {
                page: {
                    pathname: action.payload.pathname,
                    params: action.payload.params
                }
            });
        case AppActions.MOVIE_LIST.IS_LOADED:
            return Object.assign({}, state, {
                movieList: action.payload.movieList
            });
        case AppActions.MOVIE_SEARCH.BUTTON_PRESSED:
            return Object.assign({}, state, {
                search_request: action.payload.search_request
            });
        case AppActions.MOVIE_INFO.IS_LOADED:
            return Object.assign({}, state, {
                movieInfo: action.payload
            });
        default:
            break;
    }
    return state;
}