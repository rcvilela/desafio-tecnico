import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://606eeab20c054f0017657edc.mockapi.io/cardsstudy/v1/presentations/'
})