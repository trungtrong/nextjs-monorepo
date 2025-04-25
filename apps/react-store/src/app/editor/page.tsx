// eslint-disable-next-line @nx/enforce-module-boundaries
import { UsersService } from './../../../../../libs/shared/core/src/services';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { IUserLoggedIn } from './../../../../../libs/shared/core/src/models';

const EditorPage = async () => {
    try {
        const userInfo: IUserLoggedIn = await UsersService.getUserInfo();

        if (userInfo.isLoggedIn) {
            return (
                <div className="max-w-96 mx-5 md:mx-auto flex flex-col gap-3">
                    <h1 className="text-5xl mx-auto w-fit h-fit button-red">
                        Editor
                    </h1>
                </div>
            );
        } else {
            return (
				<h1 className="text-rose-500 w-fit mx-auto">
					Editor Error
				</h1>
			);
        }
    } catch (err) {
        return (
            <h1 className="text-rose-500 w-fit mx-auto">
                Internal server Error
            </h1>
        );
    }
};

export default EditorPage;
