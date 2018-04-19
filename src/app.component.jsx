import React, {PureComponent} from "react";
import {Route, Link, Switch} from "react-router-dom";

import MovieListComponent from "component/movie-list/movie-list.component";
import MovieInfoComponent from "component/movie-info/movie-info.component";
import MovieSearchComponent from "component/movie-search/movie-search.component";

import "app.style";

class AppComponent extends PureComponent {
    render() {
        return (
            <div className="app-layout">
                <header>
                    <Switch>
                        <Route exact path="/" component={MovieSearchComponent}/>
                        <Route path="/movie-list" component={MovieSearchComponent}/>
                        <Route path="/movie-list/:movieId" component={MovieInfoComponent}/>
                    </Switch>
                </header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/movie-list">movie-list</Link></li>
                        <li><Link to="/movie-list/12">movie-info 12</Link></li>
                    </ul>
                </nav>
                <main>
                    <Switch>
                        <Route exact path="/" component={MovieListComponent}/>
                        <Route path="/movie-list" component={MovieListComponent}/>
                    </Switch>
                </main>
                <footer>
                    <div>
                        <p>Netflix</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default AppComponent;
