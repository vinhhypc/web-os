import axiosClient from "./axiosClient";
import useSwr from 'swr'
import queryString from "query-string";
const serviceApi = {
    getAll : () => {
        const url = '/services'
        return axiosClient.get(url) 
    },
    getHomeService : () => {
        const url = '/services?_limit=4'
        return axiosClient.get(url)
    },
    getId: (id) =>{
        const url = `/services/${id}`
        return axiosClient.get(url)
    },
    getSearch: (params) => {
        const url = `/services/search?q=${params}`
        return axiosClient.get(url)
    }
}
export default serviceApi