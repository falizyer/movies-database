import React from "react";
import HandledComponent from "core/handled.component";

import "./movie-info.style";

class MovieInfoComponent extends HandledComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const {movieInfo: {title, poster_path, overview} = {}} = this.props;
        return (
            <section className={"movie-info"}>
                <figure className={"movie-poster"}>
                    <img src={poster_path} alt={title}/>
                </figure>
                <div className={"description-container"}>
                    <h3 className={"title"}>{title}</h3>
                    <div className={"additional-information"}>
                        <div className={"genres"}></div>
                        <div className={""}></div>
                    </div>
                    <p className={"overview"}>{overview}</p>
                </div>
            </section>
        );
    }
}

export default MovieInfoComponent;
