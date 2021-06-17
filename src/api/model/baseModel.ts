export interface BasicPageParams {
  pageIndex: number;
  pageSize: number;
}

export interface BasicListResult<T extends any> {
  items: T;
  total: number;
}

// control + option + v 复制json 自动转换为ts
export interface Data {
  id: number;
  uid: number;
  tzAccount: string;
  phone: string;
  name: string;
  nickName: string;
  locked: boolean;
  type: number;
  employeeId: string;
  createdAt: string;
  departments: string[];
  departmentId?: any;
  deptIdChain: string;
  zenvideoUserId?: any;
  roleCodes: string[];
  isAuditor: boolean;
}

export interface RootObject {
  code: string;
  message: string;
  data: Data;
  traceId: string;
}
