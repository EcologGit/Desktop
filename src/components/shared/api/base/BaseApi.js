import axios from 'axios'
export const baseApi = axios.create({
    baseURL: 'http://81.163.30.36/django_api',
}) 