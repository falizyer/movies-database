import React, {PureComponent} from "react";

import "./movie-search.style";

class MovieSearchComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"movie-search-wrap"}>
                <p>Hello World: movie search!</p>
            </div>
        );
    }
}

export default MovieSearchComponent;
