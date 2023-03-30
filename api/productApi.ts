import axiosClient from "./axiosClient";
import useSwr from "swr";
import queryString from "query-string";
const productApi = {
  getAll: () => {
    const url = "/products";
    return axiosClient.get(url);
  },
  getId: (id: any) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  getSearch: (params: any) => {
    return axiosClient.get(`/products?q=${params}`);
  },
  getHomeProduct: () => {
    const url = "/products?_limit=4";
    return axiosClient.get(url);
  },
};
export default productApi;
