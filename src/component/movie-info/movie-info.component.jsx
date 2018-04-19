import React, {PureComponent} from "react";

import "./movie-info.style";

class MovieInfoComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"movie-info-wrap"}>
                <p>Hello World: movie info!</p>
            </div>
        );
    }
}

export default MovieInfoComponent;
