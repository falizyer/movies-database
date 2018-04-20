import React, {PureComponent} from "react";

import "./movie-list-item.style";

class MovieListItemComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {title} = this.props;

        return (
            <div className={"movie-list-item"}>
                {title}
            </div>
        );
    }
}

export default MovieListItemComponent;
