import axiosClient, {axiosPrivate} from '../axiosClient'


class UserApi {
    getAll = () => {
        const url = '/user/all';
        return axiosClient.get(url);
    }
    updateUserInfo = (data) => {
        const url = '/user/update';
        return axiosPrivate.put(url, data);
    }
    updateUser = (data, id) => {
        const url = `/user/updateUser/${id}`;
        return axiosPrivate.put(url, data);
    }
    followBook =(id) => {
        const url = `/user/follow/${id}/book`;
        return axiosPrivate.post(url);
    }
    getFollowBooks = () => {
        const url = '/user/follow/book';
        return axiosPrivate.get(url);
    }
    buyChapter = (chapterId) => {
        const url = `/user/buy/${chapterId}`;
        return axiosPrivate.post(url);
    }

    getProfileUser = (userId) => {
        const url = `/user/${userId}/view`;
        return axiosPrivate.get(url);
    }

    followUser = (userId) => {
        const url = `/user/follow/${userId}/user`;
        return axiosPrivate.post(url);
    }
}

export default new UserApi();