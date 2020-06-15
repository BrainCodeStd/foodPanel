import axios from "axios";
import resolve from './resolve';
require('dotenv').config()
let apiBaseUrl = process.env.URL || "https://woocommerce-rest-api-getorders.herokuapp.com/api/v1/wc"
export const getAllWords = async (params) => {
    return await resolve(axios.get(`${apiBaseUrl}/order/all?page=${params.page}&search=${params.search}&status=${params.status}`)
        .then(res => res.data));
}
export const login = async (body) => {
    return await resolve(axios.post(`${apiBaseUrl}/login`, body)
        .then(res => res.data));
}
