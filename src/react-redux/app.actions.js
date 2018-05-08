import {MovieDatabaseRepository} from "../repository/movie-database.repository";

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

export function loadMovieList() {
    return async (dispatch) => {
        dispatch({
            type: AppActions.MOVIE_LIST.IS_LOADING
        });
        const {data, total} = await MovieDatabaseRepository.getMovies();
        dispatch({
            type: AppActions.MOVIE_LIST.IS_LOADED,
            payload: {
                movieList: data,
                movieTotal: total
            }
        });
    };
}

export function loadMovieInfo(movieInfo, id) {
    return async (dispatch) => {
        if (movieInfo.id != id) {
            dispatch({
                type: AppActions.MOVIE_INFO.IS_LOADING
            });
            const payload = await MovieDatabaseRepository.getMovie({id});
            dispatch({
                type: AppActions.MOVIE_INFO.IS_LOADED,
                payload
            });
        }
    }
}
