import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from "react-dom";
import AppComponent from "./app.component";
import {AppStore} from "react-redux/app.store";
import {AppActions} from "./react-redux/app.actions";
import {MovieDatabaseRepository} from "repository/movie-database.repository";

ReactDOM.render(
    <Provider store={AppStore}>
        <Router>
            <AppComponent/>
        </Router>
    </Provider>
    , document.getElementById("app"));

AppStore.dispatch({
    type: AppActions.MOVIE_LIST.IS_LOADING,
});
MovieDatabaseRepository.getMovies()
    .then(movies => {
        const {data, total} = movies;
        AppStore.dispatch({
            type: AppActions.MOVIE_LIST.IS_LOADED,
            payload: {
                movieList: data,
                movieTotal: total
            }
        });
        console.log(movies);
    });
