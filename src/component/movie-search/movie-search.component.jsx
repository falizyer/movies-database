import React, {PureComponent} from "react";
import {connect} from "react-redux";

import "./movie-search.style";

class MovieSearchComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"movie-search"}>
                <p>Hello World: movie search!</p>
            </div>
        );
    }
}

function mapState(state, props) {
    return {};
}

export default connect(mapState)(MovieSearchComponent);
