import {Repository, ResponseType, RequestMethod} from "./repository.class";

class MovieDatabaseRepositoryClass extends Repository {
    constructor(url, headers = new Headers()) {
        super(url, headers);
    }

    getMovies() {
        const properties = {
            method: RequestMethod.GET,
            headers: this.getHeaders()
        };
        return Repository.request(`${this.getUrl()}/movies`, properties, ResponseType.JSON);
    }

    getMovie(id) {
        const properties = {
            method: RequestMethod.GET,
            headers: this.getHeaders()
        };
        return Repository.request(`${this.getUrl()}/movies/${id}`, properties, ResponseType.JSON);
    }
}

export const MovieDatabaseRepository = new MovieDatabaseRepositoryClass("http://react-cdp-api.herokuapp.com");
