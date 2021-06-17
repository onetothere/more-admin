export interface GetUserInfoModel {
  createdAt: string | null;
  departmentId: string | null;
  departments: string[];
  deptIdChain: string;
  employeeId: string;
  id: number;
  isAuditor: boolean;
  locked: boolean;
  name: string;
  nickName: string;
  phone: string;
  roleCodes: string[];
  type: number
  tzAccount: string;
  uid: number;
  zenvideoUserId?: string; 
}
