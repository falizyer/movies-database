import {Repository, ResponseType, RequestMethod} from "./repository.class";

class MovieDatabaseRepositoryClass extends Repository {
    constructor(url, headers = new Headers()) {
        super(url, headers);
    }

    /**
     * @interface DataItem {
     *  id: number,
     *  title: string,
     *  tagline: string,
     *  vote_average: number,
     *  vote_count: number,
     *  release_date: string,
     *  poster_path: string,
     *  overview: string,
     *  budget: number,
     *  revenue: number,
     *  runtime: number,
     *  genres: Array<string>
     * }
     */
    /**
     * Method for getting full list of movies with some additional properties
     * @returns {
     * data: Array<DataItem>,
     * total: number,
     * offset: number,
     * limit: number
     * }
     */
    async getMovies({searchBy}) {
        const properties = {
            method: RequestMethod.GET,
            headers: this.getHeaders()
        };
        return await Repository.request(`${this.getUrl()}/movies`, properties, ResponseType.JSON);
    }

    /**
     * Method for getting individual information about some movie
     * @param id the id of the movie
     * @returns {
     *   id: number,
     *   title: string,
     *   tagline: string,
     *   vote_average: number,
     *   vote_count: number,
     *   release_date: string,
     *   poster_path: string,
     *   overview: string,
     *   budget: number,
     *   revenue: number,
     *   runtime: number,
     *   genres: Array<string>
     * }
     */
    async getMovie({id}) {
        const properties = {
            method: RequestMethod.GET,
            headers: this.getHeaders()
        };
        return await Repository.request(`${this.getUrl()}/movies/${id}`, properties, ResponseType.JSON);
    }
}

export const MovieDatabaseRepository = new MovieDatabaseRepositoryClass("http://react-cdp-api.herokuapp.com", {});
