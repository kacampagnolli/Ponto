import { default as axios } from 'axios';

export const http = axios.create()

export function baseUrl(baseUrl: string) {
    http.defaults.baseURL = baseUrl;
}

baseUrl(`${SERVICE_URL}`);


