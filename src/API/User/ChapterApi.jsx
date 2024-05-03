import axiosClient, {axiosPrivate} from "../axiosClient";

class ChapterApi {
    getAllChapter = () => {
        const url = `chapter/all`;
        return axiosClient.get(url);
    }
    getChapterById = (id) => {
        const url = `chapter/${id}`;
        return axiosPrivate.get(url);
    }
    getChapterByBook = (id) => {
        // const url = `chapter/book/${id}`;
        const url = `book/${id}/chapter`;
        return axiosClient.get(url);
    }
    
    postChapter = (data) => {
        const url = `chapter`;
        return axiosPrivate.post(url, data);
    }
    updateChapter = (data,id) => {
        const url = `chapter/${id}`;
        return axiosPrivate.put(url, data);
    }
}
export default new ChapterApi();
