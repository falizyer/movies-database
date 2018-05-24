import React from "react";
import HandledComponent from "core/handled.component";

import {Link} from "react-router-dom";
import "./movie-list-item.style";
import {PAGES} from "app.component";

class MovieListItemComponent extends HandledComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            id,
            title,
            poster_path,
            release_date,
            genres
        } = this.props;
        const genreList = this.getGenreList(genres);
        return (
            <section className={"movie-list-item"}>
                <img className={"movie-poster"} src={poster_path} alt={title}/>
                <div className={"movie-description"}>
                    <div className={"movie-content-wrap"}>
                        <h3 className={"content-title"}>
                            <Link to={{pathname: `/movie/${id}`, state: {page: PAGES.MOVIE_INFO, movieId: id}}}>{title}</Link>
                        </h3>
                        <div className={"movie-genre-list"}>{genreList}</div>
                    </div>
                    <div className={"release-date-wrap"}>
                        <div className={"movie-release-date"}>{release_date}</div>
                    </div>
                </div>
            </section>
        );
    }

    getGenreList(genres = []) {
        return genres.map((genre, index) => (
            <div key={index} className={"movie-genre"}>{genre}</div>
        ));
    }
}

export default MovieListItemComponent;
