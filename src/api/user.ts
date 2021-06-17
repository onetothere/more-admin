import axios from '@/plugins/axios';
import { GetUserInfoModel } from './model/userModel';

enum Api {
  GetUserInfo = '/luban-media/my',
}
export const getUserInfo: (params?: {}) => Promise<GetUserInfoModel> = (
  params,
) =>
  axios.request({
    url: Api.GetUserInfo,
    method: 'get',
    params,
  });
