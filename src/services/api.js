import axios from 'axios';

export const api = axios.create({baseURL:'https://queue-manager-fake-api.herokuapp.com/'})