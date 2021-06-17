import { URL_API_IWORK } from '@/contants/domain-api';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';
import code from './code';

const token = import.meta.env.VITE_TOKEN;
console.log('token: ', token);

export function requestMockServer(axios: AxiosInstance, hosts = {}) {
  const keys = Object.keys(hosts);
  if (keys.length === 0) return;

  axios.interceptors.request.use((config: AxiosRequestConfig) => {
    // const [origin, host] = config.url?.match(/(?:https?:\/\/)?([^/]+)/);
    // if (keys.includes(host) && config.useMock === true) {
    //   config.url = config.url.replace(origin, `http://${hosts[host]}`);
    // }
    return config;
  });
}

export function requestHeaderFormat(axios: AxiosInstance) {
  axios.interceptors.request.use((config: AxiosRequestConfig) => {
    // if (config.url.startsWith('https://open')) {
    //   // 退出登录接口的特殊字段
    //   config.headers.terminaltype = 4;
    // }
    config.headers.token = token;
    return config;
  });
}

interface BasicResult {
  data?: any;
  code?: string;
  status?: string | number;
  res?: string | number;
  msg?: string;
  message?: string;
}
// 统一转换各系统接口返回的字段
export function responseDataFormat(axios: AxiosInstance) {
  axios.interceptors.response.use((response: AxiosResponse) => {
    // const data: BasicResult = response.data;
    const { data }: { data: BasicResult } = response;

    const hasCode = Object.hasOwnProperty.call(data, 'code');
    const hasStatus = Object.hasOwnProperty.call(data, 'status');
    if (!hasCode) {
      // 智能客服接口的成功码 为 res: 100
      data.code = hasStatus ? `status_${data.status}` : `res_${data.res}`;
      data.message = data.msg;
    }
    return response;
  });
}

export function responseResult(axios: AxiosInstance) {
  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      const { data }: { data: BasicResult } = response;

      // 成功则返回数据
      if (code.successCode.includes(data.code as string)) {
        const hasData = Object.hasOwnProperty.call(data, 'data');
        return hasData ? data.data : data;
      }

      // 重定向处理
      if (code.redirectCode.includes(data.code as string)) {
        setTimeout(() => {
          // window.location.href = `${URL_API_IWORK}/login`;
        }, 1000);
      } else {
        ElMessage.error(data?.message || '系统异常');
        return Promise.reject(data);
      }
    },
    (error) => {
      const { response } = error;
      if (!response) {
        // 网络错误、跨域等情况导致没有response, 暂时不提示出来
        // Element.Message.error(error?.message || '系统异常');
      } else if (response.status === 401) {
        ElMessage.error(response.data?.msg || '系统异常');
        setTimeout(() => {
          // window.location.href = `${URL_API_IWORK}/login`;
        }, 1000);
      } else if (response.status === 403) {
        ElMessage.error(response.data?.msg || '系统异常');
      } else {
        ElMessage.error(response.data?.msg || '系统异常');
      }
      return Promise.reject(error);
    },
  );
}
