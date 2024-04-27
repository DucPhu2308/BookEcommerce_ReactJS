import axiosClient, {axiosPrivate} from '../axiosClient'

class CommentApi {
    getByChapter = (id) => {
        const url = `/comment/chapter/${id}`
        return axiosClient.get(url)
    }


    add = (data) => {
        const url = '/comment'
        return axiosPrivate.post(url, data)
    }


    update = (data) => {
        const url = `/comment/${data.id}`
        return axiosClient.put(url, data)
    }

    remove = (id) => {
        const url = `/comment/${id}`
        return axiosClient.delete(url)
    }
}

export default new CommentApi()