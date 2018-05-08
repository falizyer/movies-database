import "babel-polyfill";
import React from "react";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import AppComponent from "./app.component";
import {AppStore} from "react-redux/app.store";

ReactDOM.render(
    <Provider store={AppStore}>
        <HashRouter>
            <AppComponent/>
        </HashRouter>
    </Provider>
    , document.getElementById("app"));
