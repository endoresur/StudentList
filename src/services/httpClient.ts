import axios from "axios"

export const http = axios.create({
    baseURL: 'https://front-assignment-api.2tapp.cc/api'
})