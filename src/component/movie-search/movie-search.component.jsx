import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {AppActions} from "../../react-redux/app.actions";

import "./movie-search.style";


class MovieSearchComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.props.dispatch({
            type: AppActions.MOVIE_SEARCH.BUTTON_PRESSED,
            payload: {
                search_input: event.target.value
            }
        });
        event.preventDefault();
    }

    handleSubmit(event) {
        this.props.dispatch({
            type: AppActions.MOVIE_SEARCH.BUTTON_PRESSED,
            payload: {
                search_request: this.search_request
            }
        });
        event.preventDefault();
    }

    render() {
        return (
            <div className={"movie-search"}>
                <h2>Find your movie</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.props.search_request} onChange={this.handleChange}/>
                    <input type="submit" value="Search"/>
                    <input type="checkbox" />
                </form>
            </div>
        );
    }
}

function mapState(state, props) {
    return {
        search_request: state.search_request
    };
}

export default connect(mapState)(MovieSearchComponent);
