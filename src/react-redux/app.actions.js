export const AppActions = {
    APPLICATION: {
        IS_PAGE_CHANGED: Symbol("APPLICATION.IS_PAGE_CHANGED")
    },
    MOVIE_LIST: {
        IS_LOADING: Symbol("MOVIE_LIST.IS_LOADING"),
        IS_LOADED: Symbol("MOVIE_LIST.IS_LOADED")
    },
    MOVIE_SEARCH: {
        BUTTON_PRESSED: Symbol("MOVIE_SEARCH.BUTTON_PRESSED")
    },
    MOVIE_INFO: {
        IS_LOADING: Symbol("MOVIE_INFO.IS_LOADING"),
        IS_LOADED: Symbol("MOVIE_INFO.IS_LOADED")
    }
};
