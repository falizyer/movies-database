import React, {PureComponent} from "react";
import {Route, Link, Switch, withRouter} from "react-router-dom";

import MovieListComponent from "component/movie-list/movie-list.component";
import MovieInfoComponent from "component/movie-info/movie-info.component";
import MovieSearchComponent from "component/movie-search/movie-search.component";

import "app.style";
import {connect} from "react-redux";
import {MovieDatabaseRepository} from "./repository/movie-database.repository";
import {AppActions} from "./react-redux/app.actions";

export const PAGES = {
    DEFAULT: 0,
    MOVIE_INFO: 1
};

export class AppComponent extends PureComponent {
    componentDidMount() {
        this.props.loadMovieList();
    }

    render() {
        const {movieList, movieInfo} = this.props;
        return (
            <div className="app-layout">
                <header>
                    <h1>
                        <Link to={{pathname: "/", state: {page: PAGES.DEFAULT}}}>Netflix Roulette</Link>
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
        async loadMovieList() {
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
        },
        async loadMovieInfo(id) {
            if (this.movieInfo.id != id) {
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
    };
}

connect(function (state) {
    console.log(state, "bla");
    return state;
});

export default withRouter(connect(mapState, mapDispatch)(AppComponent));
