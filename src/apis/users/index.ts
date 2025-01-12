import axios from 'axios';

import type { ILoginRequest, ILoginResponse } from '@/apis/users/type';

export const userApi = {
  postUsersLogin: (params: ILoginRequest) => {
    return axios.post<ILoginResponse>('http://43.201.96.112/api/users/login', params).then(res => res.data);
  },
};
