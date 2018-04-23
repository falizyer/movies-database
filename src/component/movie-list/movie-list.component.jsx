import React, {PureComponent} from "react";
import {connect} from "react-redux";
import MovieListItem from "./movie-list-item/movie-list-item.component";

import "./movie-list.style";

class MovieListComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const MovieList = this.props.movieList.map((movie, i) => {
            return <MovieListItem key={i}
                                  id={movie.id}
                                  title={movie.title}
                                  poster_path={movie.poster_path}
                                  release_date={movie.release_date}
                                  genres={movie.genres}/>;
        });
        return (
            <div className={"movie-list"}>
                {MovieList}
            </div>
        );
    }
}

function mapState(state, props) {
    return {
        movieList: state.movieList
    };
}

export default connect(mapState)(MovieListComponent);
