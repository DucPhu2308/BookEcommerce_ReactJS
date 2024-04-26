import axiosClient, {axiosPrivate} from '../axiosClient'


class UserApi {
    updateUserInfo = (data) => {
        const url = '/user/update';
        return axiosPrivate.put(url, data);
    }
}

export default new UserApi();