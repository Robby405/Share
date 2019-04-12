import axios from 'axios'

var server = axios.create({
  baseURL: 'http://localhost/3000',
  timeout: 5000,
});

//添加请求拦截器
server.interceptors.request.use(function (config) {
  //在发送请求之前做些什么
  return config;
},function (error) {
  //对请求错误做些什么
  return Promise.reject(error);
});

//添加响应拦截器
server.interceptors.response.use(function (response) {
  //对响应数据做些什么
  // eslint-disable-next-line
  /* eslint-disable */ 
  return response;
}, function (error) {
  //对响应错误做些什么
  console.log(error);
  return Promise.reject(error);
});

export default server