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
    
    postChapter = (data) => {
        const url = `chapter`;
        return axiosPrivate.post(url, data);
    }
}
export default new ChapterApi();
