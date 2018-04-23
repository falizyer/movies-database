import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import {MovieDatabaseRepository} from "repository/movie-database.repository";

import "./movie-list-item.style";

class MovieListItemComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, poster_path, id} = this.props;
        return (
            <section className={"movie-list-item"}>
                <h3><Link to={{pathname: MovieDatabaseRepository.constructMovieUrl(id)}}>{title}</Link></h3>
                <img src={poster_path}/>
            </section>
        );
    }
}

export default MovieListItemComponent;
