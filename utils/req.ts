import axios, { AxiosResponse } from "axios";

// 创建 axios 实例
// @ts-ignore
const instance = axios.create({
  // baseURL: process.env.BASE_API_URL,
  timeout: 20000,
  headers: {
    post: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
  },
});

// 请求拦截器
instance.interceptors.request.use(
  function (conf: any) {
    const config = conf;
    const token = null;
    // const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN);
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

interface ResponseInterface<T = any> {
  code: number;
  data: any;
  message: string;
}

// 响应拦截器
instance.interceptors.response.use(
  function (response: AxiosResponse<ResponseInterface>): any {
    // 将 data 的内容直接返回
    return response.data;
  },
  function (error: any) {
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          // 客户端环境
          if (typeof window !== "undefined") {
            window.location.href = "/user/login";
          }
          break;
        case 500:
          console.error(error.response.data.msg);
          break;
        default:
          console.error("An error occurred");
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
