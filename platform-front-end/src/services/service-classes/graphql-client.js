import { request } from 'graphql-request'

export class MyGraphqlClient {
    constructor(_settings){
        this.settings = _settings;
    }

    async getData(signal) {
        let url = this.settings.baseUrl;
        let query = this.settings.getRequestQuery
        let response = await request({url: url, document: query, signal: signal})

        return response;
    }

    async getDataById(Id, signal) {
        let url = this.settings.baseUrl;
        let query = this.settings.GetByIdRequestQuery;
        const variables = {id: Id};

        let response = await request({url: url, document: query, variables: variables, signal: signal});

        return response;
    }
    
    async postData(obj) {

        let url = this.settings.baseUrl;
        let mutation = this.settings.PostRequestQuery;
        const variables = {...obj}
        let response = await request(url, mutation, variables);

        return response;
    }

    async deleteData(Id) {
        let url = this.settings.baseUrl;
        let mutation = this.settings.DeleteRequestQuery;
        const variables = {id: Id};
        let response = await request(url, mutation, variables);

        return response;
    }

    async updateData(obj) {
        let url = this.settings.baseUrl;
        let mutation = this.settings.UpdateRequestQuery;
        const variables = {...obj}
        let response = await request(url, mutation, variables);

        return response;
    }
}