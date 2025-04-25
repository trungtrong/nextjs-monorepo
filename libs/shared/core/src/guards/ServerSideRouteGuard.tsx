import { redirect } from 'next/navigation';
import { UsersService } from '../services';


export const ServerSideRouteGuard = async ({
	children,
}: Readonly<{ children: React.ReactNode }>) => {
    const userInfo = await UsersService.getUserInfo();
    console.log(userInfo)
    if (!userInfo.isLoggedIn) redirect('/');

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return (<>{children}</>);
};
