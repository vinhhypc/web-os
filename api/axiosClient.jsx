import axios from 'axios';
import queryString from 'query-string';
import { message } from 'antd';
const axiosClient = axios.create({
    baseURL: 'https://dummyjson.com',
    paramsSerializer: {
        serialize: (params) =>queryString.stringify(params) 
      },
  });

  axiosClient.interceptors.response.use(
    (response) => {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      }
      return Promise.reject(new Error(`Lỗi kết nối! `));
    },
    async (error) => {
      console.log(error);
      const status = {
        401: () => {
          message.error('Hết thời gian phản hồi');
        },
        403: () => {
          message.error('Bạn không có quyền truy cập trang này!');
        },
        404: () => {
            message.error('Không tìm thấy yêu cầu!');
          },
        500: () => {
          message.error(
            'Lỗi không xác định. Vui lòng liên hệ kỹ thuật để được hỗ trợ!'
          );
        },
      };
      status[error.response?.status]?.();
    }
  )
export default axiosClient;