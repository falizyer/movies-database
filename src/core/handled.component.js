import React, {PureComponent} from "react";

export default class HandledComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            error: void 0,
            info: void 0
        };
    }

    componentDidCatch(error, info) {
        this.setState({
            error,
            info
        });
    }
}
