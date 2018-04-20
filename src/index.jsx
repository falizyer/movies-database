import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from "react-dom";
import AppComponent from "./app.component";
import {AppStore} from "react-redux/app.store";
import {AppActions} from "./react-redux/app.actions";

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
setTimeout(() => {
    AppStore.dispatch({
        type: AppActions.MOVIE_LIST.IS_LOADED,
        payload: {
            movieList: [{
                title: "movie-title 1",
                release_date: "movie-release_date 1"
            }, {
                title: "movie-title 2",
                release_date: "movie-release_date 2"
            }]
        }
    });
}, 5000);