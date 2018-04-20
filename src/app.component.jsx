import React from "react";
import {Route, Link, Switch} from "react-router-dom";

import MovieListComponent from "component/movie-list/movie-list.component";
import MovieInfoComponent from "component/movie-info/movie-info.component";
import MovieSearchComponent from "component/movie-search/movie-search.component";

import "app.style";

const AppComponent = () => {
    return (
        <div className="app-layout">
            <nav>
                <ul>
                    <li><Link to={{pathname: "/", state: {pageName: "home"}}}>Home</Link></li>
                    <li><Link to={{pathname: "/movie-list", state: {pageName: "movie-list"}}}>movie-list</Link></li>
                    <li><Link to={{pathname: "/movie-list/12", state: {pageName: "movie-info"}}}>movie-info 12</Link>
                    </li>
                </ul>
            </nav>
            <header>
                <Switch>
                    <Route exact path="/" render={() => <div><p>Home</p></div>}/>
                    <Route exact path="/movie-list" component={MovieSearchComponent}/>
                    <Route exact path="/movie-list/:movieId" component={MovieInfoComponent}/>
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
