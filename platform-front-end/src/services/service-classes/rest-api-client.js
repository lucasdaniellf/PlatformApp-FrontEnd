export class RestApiClient{
    constructor(_settings){
        this.settings = _settings;
    }

    async getData(signal) {
        let url = this.settings.baseUrl;
        let response = await fetch(url, {signal: signal});
        return response;
    }

    async getDataById(id,signal){

        let url = `${this.settings.baseUrl}/${id}`;
        let response = await fetch(url, {signal: signal});
        
        return response;
    }

    async updateData(id, obj){

        let url = `${this.settings.baseUrl}/${id}`;
        
        const requestOptions = {
            method: 'PUT',
            headers: this.settings.headers,
            body: JSON.stringify(obj)
        };

        let response = await fetch(url, requestOptions);
        return response;
    }

    async deleteData(id){
        let url = `${this.settings.baseUrl}/${id}`;

        const requestOptions = {
            method: 'DELETE',
            headers: this.settings.headers,
        };

        let response = await fetch(url, requestOptions);
        return response;
    }

    async postData(obj){
        let url = `${this.settings.baseUrl}`;

        const requestOptions = {
            method: 'POST',
            headers: this.settings.headers,
            body: JSON.stringify(obj)
        };

        let response = await fetch(url, requestOptions);
        return response;
    }

    async postDataWithId(id, obj){
        let url = `${this.settings.baseUrl}/${id}`;

        const requestOptions = {
            method: 'POST',
            headers: this.settings.headers,
            body: JSON.stringify(obj)
        };

        let response = await fetch(url, requestOptions);
        return response;
    }
}