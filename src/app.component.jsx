import React, {PureComponent} from "react";
import {Route, Link, Switch, withRouter} from "react-router-dom";

import MovieListComponent from "component/movie-list/movie-list.component";
import MovieInfoComponent from "component/movie-info/movie-info.component";
import MovieSearchComponent from "component/movie-search/movie-search.component";

import "app.style";
import {connect} from "react-redux";
import {loadMovieList, loadMovieInfo} from "./react-redux/app.actions";

export const PAGES = {
    DEFAULT: 0,
    MOVIE_INFO: 1
};

export class AppComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.title = "Netflix Roulette";
    }

    componentDidMount() {
        this.props.loadMovieList();
    }

    render() {
        const {movieList, movieInfo} = this.props;
        return (
            <div className="app-layout">
                <header>
                    <h1>
                        <Link to={{pathname: "/", state: {page: PAGES.DEFAULT}}}>{this.title}</Link>
                    </h1>
                    <Switch>
                        <Route exact path="/"
                               render={() => <MovieSearchComponent/>}/>
                        <Route path="/movie/:id"
                               render={({match: {params}}) => {
                                   this.props.loadMovieInfo(params.id);
                                   return <MovieInfoComponent movieInfo={movieInfo}/>;
                               }}/>
                    </Switch>
                </header>
                <main>
                    <MovieListComponent movieList={movieList}/>
                </main>
                <footer>
                    <div>
                        <p>Netflix</p>
                    </div>
                </footer>
            </div>
        );
    };

}

function mapState(state, props) {
    return {
        page: state.page,
        movieList: state.movieList,
        movieInfo: state.movieInfo
    };
}

function mapDispatch(dispatch) {
    return {
        loadMovieList: () => dispatch(loadMovieList()),
        loadMovieInfo(id) {
            dispatch(loadMovieInfo(this.movieInfo, id))
        }
    };
}

export default withRouter(connect(mapState, mapDispatch)(AppComponent));
