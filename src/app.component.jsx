import React from "react";
import {Route, Link, Switch} from "react-router-dom";

import MovieListComponent from "component/movie-list/movie-list.component";
import MovieInfoComponent from "component/movie-info/movie-info.component";
import MovieSearchComponent from "component/movie-search/movie-search.component";

import "app.style";

const AppComponent = () => {
    return (
        <div className="app-layout">
            <header>
                <h1>
                    <Link to={{pathname: "/", state: {a: 1}}}>Netflix Roulette</Link>
                </h1>
                <Switch>
                    <Route exact path="/" component={MovieSearchComponent}/>
                    <Route exact path="/film/:id" component={MovieInfoComponent}/>
                </Switch>
            </header>
            <nav></nav>
            <main>
                <Switch>
                    <Route path="/" component={MovieListComponent}/>
                </Switch>
            </main>
            <footer>
                <div>
                    <p>Netflix</p>
                </div>
            </footer>
        </div>
    );
};

export default AppComponent;
