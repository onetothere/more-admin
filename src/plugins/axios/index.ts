import axios, { AxiosInstance } from 'axios';
import {
  requestHeaderFormat,
  responseDataFormat,
  responseResult,
} from './intercepters';

const request: AxiosInstance = axios.create({
  timeout: 10000,

  baseURL: 'https://luban-api-test.shiguangkey.com',
});

// 请求拦截
requestHeaderFormat(request);

// 响应拦截
responseDataFormat(request);
responseResult(request);

export default request;
