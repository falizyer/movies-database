import React from "react";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import AppComponent from "./app.component";

ReactDOM.render(
    <BrowserRouter>
        <AppComponent/>
    </BrowserRouter>
    , document.getElementById("app"));