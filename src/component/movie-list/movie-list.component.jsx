import React, {PureComponent} from "react";

import "./movie-list.style";

class MovieListComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"movie-list-wrap"}>
                <p>Hello World: movie list!</p>
            </div>
        );
    }
}

export default MovieListComponent;
