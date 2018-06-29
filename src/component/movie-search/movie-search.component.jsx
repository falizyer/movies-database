import React from "react";
import HandledComponent from "core/handled.component";

import "./movie-search.style";

export default class MovieSearchComponent extends HandledComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.props.handleChange.bind(this);
        this.handleSubmit = this.props.handleSubmit.bind(this);
        this.handleSearchLabelChange = this.props.handleSearchLabelChange.bind(this);
    }

    render() {
        const {searchBy} = this.props;
        return (
            <div className={"movie-search"}>
                <h2>Find your movie</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.props.search_request} onChange={this.handleChange}/>
                    <input type="submit" value="Search"/>
                    <label className={"search-label"}>Title: <input name="title" type="checkbox"
                                                                    checked={searchBy === "title"}
                                                                    onChange={this.handleSearchLabelChange}/></label>
                    <label className={"search-label"}>Genres: <input name="genres" type="checkbox"
                                                                     checked={searchBy === "genres"}
                                                                     onChange={this.handleSearchLabelChange}/></label>
                </form>
            </div>
        );
    }
}
