import React from "react";
import {shallow} from "enzyme";
import MovieInfoComponent from "./movie-info.component";

describe("MovieInfoComponent", () => {
    const movieInfo = {
        title: "Some Title",
        poster_path: "poster_path",
        overview: "overview"
    };

    describe("when movieInfo property is not defined", () => {
        const movieInfoComponent = shallow(
            <MovieInfoComponent/>
        );

        it("initializes with empty properties", () => {
            expect(movieInfoComponent.find(".title").text()).toBe("");
            expect(movieInfoComponent.find(".overview").text()).toBe("");

            let posterImage = movieInfoComponent.find(".movie-poster img");
            expect(posterImage.prop("src")).toBe(void 0);
            expect(posterImage.prop("alt")).toBe(void 0);
        });
    });

    describe("when movieInfo property is defined", () => {
        const movieInfoComponent = shallow(
            <MovieInfoComponent movieInfo={movieInfo}/>
        );

        it("initializes with some properties", () => {
            expect(movieInfoComponent.find(".title").text()).toBe(movieInfo.title);
            expect(movieInfoComponent.find(".overview").text()).toBe(movieInfo.overview);

            let posterImage = movieInfoComponent.find(".movie-poster img");
            expect(posterImage.prop("src")).toBe(movieInfo.poster_path);
            expect(posterImage.prop("alt")).toBe(movieInfo.title);
            // expect(instance.findByProps({className: "title"}).text()).toBe(movieInfo.title);
        });
    });

});
