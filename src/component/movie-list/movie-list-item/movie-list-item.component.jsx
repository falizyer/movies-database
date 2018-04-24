import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import {MovieDatabaseRepository} from "repository/movie-database.repository";

import "./movie-list-item.style";

class MovieListItemComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            id,
            title,
            poster_path,
            release_date,
            genres = []
        } = this.props;
        const genreList = genres.map(genre => (
            <div className={"movie-genre"}>{genre}</div>
        ));
        return (
            <section className={"movie-list-item"}>
                <img className={"movie-poster"} src={poster_path} alt={title}/>
                <div className={"movie-description"}>
                    <div className={"movie-content-wrap"}>
                        <h3 className={"content-title"}>
                            <Link to={{pathname: MovieDatabaseRepository.constructMovieUrl(id)}}>{title}</Link>
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
}

export default MovieListItemComponent;
