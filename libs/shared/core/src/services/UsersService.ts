

import { IUserLoggedIn } from '../models';
import { ApiService } from './ApiService';
import { ApiEndpoints } from './api-endpoints.constant';

export const UsersService = {
    getUserInfo: async () => {
        try {
            const userInfo = await ApiService.get<IUserLoggedIn>({
                url: `${ApiEndpoints.Users}/info`,
            });
            return userInfo;
        } catch {
            return Promise.resolve({ isLoggedIn: false } as IUserLoggedIn);
        }
    },
};
