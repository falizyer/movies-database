import React, {PureComponent} from "react";
import {connect} from "react-redux";

import "./movie-info.style";

class MovieInfoComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"movie-info"}>
                <p>Hello World: movie info!</p>
            </div>
        );
    }
}

function mapState(state, props) {
    return {};
}

export default connect(mapState)(MovieInfoComponent);
