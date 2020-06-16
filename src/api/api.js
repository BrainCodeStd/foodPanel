import axios from "axios";
import resolve from './resolve';
require('dotenv').config()
let apiBaseUrl = process.env.URL || "http://localhost:5001/api"
export const getTodayOrders = async (params) => {
    return await resolve(axios.get(`${apiBaseUrl}/getTodayFood`)
        .then(res => res.data));
}
export const getAllMenu = async (params) => {
    return await resolve(axios.get(`${apiBaseUrl}/getAllMenu`)
        .then(res => res.data));
}
export const login = async (body) => {
    return await resolve(axios.post(`${apiBaseUrl}/login`, body)
        .then(res => res.data));
}
// https://foodxwood.herokuapp.com/api
//