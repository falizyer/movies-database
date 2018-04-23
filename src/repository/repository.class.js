export const ResponseType = {
    JSON: "json",
    TEXT: "text"
};

export const RequestMethod = {
    GET: "GET",
    POST: "POST"
};

export class Repository {
    static request(url, properties, type) {
        const response = new Request(url, properties);
        return this.fetchResponse(response, type);
    }

    static fetchResponse(response, type) {
        const fetched = fetch(response);
        switch (type) {
            case ResponseType.TEXT:
                return fetched.then(datum => datum.text());
            case ResponseType.JSON:
                return fetched.then(datum => datum.json());
            default:
                throw new Error("unknown response type");
        }
    }

    constructor(url, headers) {
        this.url = url;
        this.headers = headers;
    }

    getUrl() {
        return this.url;
    }

    getHeaders() {
        return this.headers;
    }
}