import React from "react";
import HandledComponent from "core/handled.component";

import MovieListItem from "./movie-list-item/movie-list-item.component";

import "./movie-list.style";

class MovieListComponent extends HandledComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            movieList = []
        } = this.props;
        const MovieList = movieList.map((movie, index) => {
            return <MovieListItem key={index}
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

export default MovieListComponent;
