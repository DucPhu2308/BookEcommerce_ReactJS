import axiosClient, {axiosPrivate} from "../axiosClient";

class ChapterApi {
    getChapterByBook = (id) => {
        const url = `chapter/book/${id}`;
        return axiosClient.get(url);
    }
    
    postChapter = (data) => {
        const url = `chapter`;
        return axiosPrivate.post(url, data);
    }
}
export default new ChapterApi();
