import { AxiosRequestConfig, AxiosTransformer } from 'axios';
import type { RequestOptions, Result } from './types';

export interface CreateAxiosOptions extends AxiosRequestConfig {
  prefixUrl?: string;
  transform?: AxiosTransformer;

  requestOptions?: RequestOptions;
}
