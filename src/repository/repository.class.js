export const ResponseType = {
    JSON: "json",
    TEXT: "text"
};

export const RequestMethod = {
    GET: "GET",
    POST: "POST"
};

export class Repository {
    static async request(url, properties, type) {
        const response = new Request(url, properties);
        return await this.fetchResponse(response, type);
    }

    static async fetchResponse(response, type) {
        const fetched = await fetch(response);
        switch (type) {
            case ResponseType.TEXT:
                return fetched.text();
            case ResponseType.JSON:
                return fetched.json();
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