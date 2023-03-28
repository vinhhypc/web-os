import axiosClient from "./axiosClient";
import useSwr from 'swr'
import queryString from "query-string";
const postApi = {
    getAll : () => {
        const url = '/posts'
        return axiosClient.get(url) 
    },
    getHomePost : () => {
        const url = '/posts?_limit=4'
        return axiosClient.get(url)
    },
    getId: (id) =>{
        const url = `/posts/${id}`
        return axiosClient.get(url)
    }
}
export default postApi