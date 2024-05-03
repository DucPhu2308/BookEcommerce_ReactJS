import axiosClient, {axiosPrivate} from '../axiosClient'


class UserApi {
    updateUserInfo = (data) => {
        const url = '/user/update';
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
}

export default new UserApi();