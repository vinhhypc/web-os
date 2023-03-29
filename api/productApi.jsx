import axiosClient from "./axiosClient";
import useSwr from 'swr'
import queryString from "query-string";
const productApi = {
    getAll : () => {
        const url = '/products'
        return axiosClient.get(url) 
    },
    getId: (id) =>{
        const url = `/products/${id}`
        return axiosClient.get(url)
    },
    getSearch: (params) => {
        const url = `/products/search?q=${(params)}`
        return axiosClient.get(url)
    },
    getHomeProduct : () => {
        const url = '/products?_limit=4'
        return axiosClient.get(url)
    }
}
export default productApi