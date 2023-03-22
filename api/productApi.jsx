import axiosClient from "./axiosClient";
const productApi = {
    getAll : (params) => {
        const url = '/products'
        return axiosClient.get(url,{params}) 
    },
    getId: (id) =>{
        const url = `/products/${id}`
        return axiosClient.get(url)
    },
    getSearch: (params) => {
        const url = `/products/search?q=${params}`
        return axiosClient.get(url,{params}) 
    }
}
export default productApi