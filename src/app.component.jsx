import React, {PureComponent} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import ReactDOM from "react-dom";

import MovieListComponent from "component/movie-list/movie-list.component";
import MovieInfoComponent from "component/movie-info/movie-info.component";
import MovieSearchComponent from "component/movie-search/movie-search.component";

import "app.style";

class AppComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app-layout">
                    <header>
                        <Route path="/" component={MovieSearchComponent}/>
                        <Route path="/movie-list" component={MovieSearchComponent}/>
                        <Route path="/movie-list/:movieId" component={MovieInfoComponent}/>
                    </header>
                    <main>
                        <Route path="/" component={MovieListComponent}/>
                        <Route path="/movie-list" component={MovieListComponent}/>
                    </main>
                    <footer>
                        <div>
                            <p>Netflix</p>
                        </div>
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppComponent;
ReactDOM.render(<AppComponent/>, document.body);
