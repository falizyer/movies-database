import React, {PureComponent} from "react";
import {Route, Link, Switch, withRouter} from "react-router-dom";

import MovieListComponent from "component/movie-list/movie-list.component";
import MovieInfoComponent from "component/movie-info/movie-info.component";
import MovieSearchComponent from "component/movie-search/movie-search.component";

import "app.style";
import {connect} from "react-redux";
import {loadMovieList, loadMovieInfo, AppActions} from "./react-redux/app.actions";

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
        const {movieList, movieInfo, searchBy} = this.props;
        return (
            <div className="app-layout">
                <header>
                    <h1>
                        <Link to={{pathname: "/", state: {page: PAGES.DEFAULT}}}>{this.title}</Link>
                    </h1>
                    <Switch>
                        <Route exact path="/"
                               render={() => <MovieSearchComponent
                                   searchBy={searchBy}
                                   handleSearchLabelChange={this.props.handleSearchLabelChange}
                                   handleChange={this.props.handleChange}
                                   handleSubmit={this.props.handleSubmit}/>}/>
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
        movieInfo: state.movieInfo,
        searchBy: state.searchBy
    };
}

function mapDispatch(dispatch) {
    return {
        loadMovieList: () => dispatch(loadMovieList()),
        loadMovieInfo(id) {
            dispatch(loadMovieInfo(this.movieInfo, id))
        },
        handleSubmit(event) {
            dispatch({
                type: AppActions.MOVIE_SEARCH.BUTTON_PRESSED,
                payload: {
                    search_request: this.search_request,
                    searchBy: this.searchBy
                }
            });
            this.loadMovieList({
                search_request: this.search_request,
                searchBy: this.searchBy
            }).then(movieList => {

            });
            event.preventDefault();
        },
        handleChange(event) {
            dispatch({
                type: AppActions.MOVIE_SEARCH.BUTTON_PRESSED,
                payload: {
                    search_input: event.target.value
                }
            });
            event.preventDefault();
        },
        handleSearchLabelChange(event) {
            dispatch({
                type: AppActions.MOVIE_SEARCH.SEARCH_BY_CHANGED,
                payload: {
                    searchBy: event.target.name
                }
            });
        }
    };
}

export default withRouter(connect(mapState, mapDispatch)(AppComponent));
